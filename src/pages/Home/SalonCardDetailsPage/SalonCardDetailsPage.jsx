import "swiper/css";
import "swiper/css/pagination";
import SalonCardDetailsBanner from "./section/SalonCardDetailsBanner";
import TeamofGhalib from "./section/TeamofGhalib";
import ProductOfGalib from "./section/ProductOfGalib";
import HomepageReview from "@/pages/Homepage/sections/HomepageReview";
import StaySharp from "./section/StaySharp";
import AboutGhalibSalon from "./section/AboutGhalibSalon";
import VenuesNearby from "./section/VenuesNearby";
import ServicesGhalibSalon from "./section/ServicesGhalibSalon";
import { useParams } from "react-router-dom";
import { useStoreDetails } from "@/hooks/user.queries";
import { Loader } from "@/components/Loader/Loader";

const SalonCardDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useStoreDetails(id);

  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="pt-28 lg:pt-36">
      <SalonCardDetailsBanner data={data} />
      <ServicesGhalibSalon data={data} />
      <TeamofGhalib data={data} />
      {data?.data?.products.length > 0 && <ProductOfGalib data={data} />}
      <AboutGhalibSalon data={data} />
      {/* <div className="py-10 2xl:py-20 bg-[#FCFCFC]">
        <HomepageReview review={"Reviews of Ghalib's Barber Salon"} />
      </div> */}
      <VenuesNearby homepage={false} data={data} />
    </section>
  );
};

export default SalonCardDetailsPage;
