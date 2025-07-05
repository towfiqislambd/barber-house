import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import LeftSideCard from "./Section/LeftSideCard";
import { useUserSearchStore } from "@/hooks/user.queries";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import { Loader } from "@/components/Loader/Loader";

const SearchResultPage = () => {
  const locationState = useLocation();
  const serviceInfo = locationState?.state?.serviceInfo;
  const [searchParams] = useSearchParams();
  const searchLocation = searchParams.get("location");
  const serviceId = searchParams.get("serviceId");
  const latitude = parseFloat(searchParams.get("lat"));
  const longitude = parseFloat(searchParams.get("lng"));
  const [isOpen, setIsOpen] = useState(false);
  const queryParams = {
    service_id: serviceId,
    latitude,
    longitude,
  };
  const { data: stores, isLoading } = useUserSearchStore(queryParams);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <section className="pb-14 pt-20 2xl:py-20 3xl:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center pt-5 md:pt-20 pb-5 md:pb-10 3xl:py-[67px] space-y-3">
          <h1 className="text-[#2C2C2C] font-outfit text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-semibold text-center">
            Showing results for {serviceInfo?.service_name || "All services"}
          </h1>
          <p className="text-textLight font-manrope text-lg md:text-xl font-semibold text-center leading-[30px]">
            {searchLocation || "Your selected location"}
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse xl:flex-row gap-8 3xl:gap-[55px] xl:h-screen">
          {/* Left Side */}
          <div className="xl:w-[400px] 3xl:w-[500px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5 xl:gap-8 overflow-y-auto xl:h-full flex-shrink-0">
            {isLoading ? (
              <div className="mt-64 mx-auto  ">
                <Loader />
              </div>
            ) : stores?.data?.length > 0 ? (
              stores.data.map(store => (
                <LeftSideCard key={store.id} store={store} />
              ))
            ) : (
              <p className="text-center font-medium text-xl text-red-500">
                No salons found for this search.
              </p>
            )}
          </div>

          {/* Map with Markers */}
          <div className="flex-grow w-full h-[300px] xl:h-full">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={13}
              >
                {stores?.data?.map(store => (
                  <Marker
                    key={store.id}
                    position={{
                      lat: parseFloat(store.latitude),
                      lng: parseFloat(store.longitude),
                    }}
                    title={store.name}
                    icon={{
                      url: `${import.meta.env.VITE_SITE_URL}/${
                        store?.store_images[0]?.images
                      }`,
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                ))}
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultPage;
