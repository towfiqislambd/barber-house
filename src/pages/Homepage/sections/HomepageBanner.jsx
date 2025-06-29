import { SearchButtonSvg } from "@/components/svgContainer/SvgContainer";
import homepageBg from "../../../assets/images/home-bg.jpg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { useServicesType } from "@/hooks/cms.queries";
import toast from "react-hot-toast";

const HomepageBanner = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [serviceId, setServiceId] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const typingTimeout = useRef(null);

  const { data: serviceData } = useServicesType();

  const handleSearch = () => {
    if (!location.trim()) {
      toast.error("Please enter a location");
      return;
    }

    if (!coords.lat || !coords.lng) {
      toast.error("Please select a location from the suggestions");
      return;
    }
    const selectedService = serviceData?.find((s) => s.id === +serviceId);

    const params = new URLSearchParams();

    if (serviceId) params.append("serviceId", serviceId);
    if (location) params.append("location", location);
    if (coords.lat && coords.lng) {
      params.append("lat", coords.lat);
      params.append("lng", coords.lng);
    }

    navigate(`/searchresultpage?${params.toString()}`, {
      state: {
        serviceInfo: selectedService,
      },
    });
  };

  const handleLocationChange = (value) => {
    setLocation(value);
    setCoords({ lat: null, lng: null });
    setSuggestions([]);

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(async () => {
      if (value.length > 2) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
              value
            )}&key=${import.meta.env.VITE_GOOGLE_MAP_API}`
          );
          const data = await res.json();
          if (data.status === "OK" && data.results.length > 0) {
            setSuggestions(data.results);
            const { lat, lng } = data.results[0].geometry.location;
            setCoords({ lat, lng });
          } else {
            setSuggestions([]);
          }
        } catch (err) {
          console.error("Error fetching geocode:", err);
          setSuggestions([]);
        } finally {
          setLoading(false);
        }
      }
    }, 500);
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.formatted_address);
    setCoords({
      lat: suggestion.geometry.location.lat,
      lng: suggestion.geometry.location.lng,
    });
    setSuggestions([]);
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });

        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
              import.meta.env.VITE_GOOGLE_MAP_API
            }`
          );
          const data = await res.json();

          if (data.status === "OK" && data.results.length > 0) {
            setLocation(data.results[0].formatted_address);
          } else {
            setLocation("Your Location");
          }
        } catch (err) {
          console.error("Reverse geocoding failed", err);
          setLocation("Your Location");
        } finally {
          setSuggestions([]);
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error getting current location", error);
        alert("Failed to get current location.");
        setLoading(false);
      }
    );
  };

  return (
    <section
      className="flex bg-center bg-cover bg-no-repeat justify-center w-full items-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.64) 100%), url(${homepageBg})`,
        backgroundColor: "#E7E7E7",
      }}
    >
      <div className="container flex flex-col justify-center gap-8 xl:gap-16 items-center">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl text-center text-white font-outfit font-semibold pt-8 lg:pt-12 xl:pt-16">
          Experience Luxury Grooming <br />
          Like Never Before
        </h1>

        <div className="bg-white py-10 xl:py-0 rounded-xl xl:rounded-full w-full max-w-[500px] xl:max-w-[700px] 2xl:max-w-[1000px] mx-auto px-5 xl:px-2 2xl:py-1">
          <form className="flex flex-wrap md:flex-nowrap flex-col xl:flex-row w-full 2xl:justify-between font-medium gap-3 2xl:gap-5 items-center">
            {/* Category Selector */}
            <div className="flex flex-1 border xl:border-none py-3 lg:py-5 px-3 lg:px-5 rounded-lg border-r gap-2 items-center w-full xl:w-auto">
              <SearchButtonSvg />
              <select
                className="w-full focus:outline-none"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              >
                <option value="">All treatments & places</option>
                {serviceData?.map((data) => (
                  <option key={data?.id} value={data?.id}>
                    {data?.service_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Input */}
            <div className="relative flex flex-1 border xl:border-none px-3 rounded-lg py-2 border-r gap-3 items-center w-full xl:w-auto">
              <SearchButtonSvg />
              <input
                className="focus:outline-none w-full placeholder:text-black"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => handleLocationChange(e.target.value)}
              />
              {loading && (
                <div className="absolute right-3">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
              )}
              {suggestions.length > 0 && (
                <ul className="absolute top-full left-0 right-0 z-10 bg-white border mt-2 rounded shadow max-h-60 overflow-auto">
                  <li
                    onClick={handleUseCurrentLocation}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-blue-600 flex items-center gap-1"
                  >
                    <LuMapPin /> Use My Current Location
                  </li>
                  {suggestions.map((s, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClick(s)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-1"
                    >
                      <LuMapPin /> {s.formatted_address}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={handleSearch}
              className="bg-textColor rounded-full text-white px-4 xl:px-8 py-2 xl:py-4 w-full xl:w-auto"
            >
              Search
            </button>
          </form>
        </div>

        {/* Booking Stats */}
        <div>
          <h4 className="text-xl lg:text-2xl text-white font-outfit">
            <span className="text-3xl font-semibold">250,000</span> appointments
            booked this week!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner;
