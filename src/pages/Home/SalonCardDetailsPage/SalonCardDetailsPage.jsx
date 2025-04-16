import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
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

const SalonCardDetailsPage = () => {
  return (
    <section className="pt-28 lg:pt-36">
      <SalonCardDetailsBanner />
      <ServicesGhalibSalon />
      <TeamofGhalib />
      <ProductOfGalib />
      <AboutGhalibSalon />
      <div className="py-10 2xl:py-20 bg-[#FCFCFC]">
        <HomepageReview review={"Reviews of Ghalib's Barber Salon"} />
      </div>
      <VenuesNearby />
      <StaySharp />
    </section>
  );
};

export default SalonCardDetailsPage;
