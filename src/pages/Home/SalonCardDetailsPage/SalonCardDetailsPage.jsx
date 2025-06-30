import "swiper/css";
import "swiper/css/pagination";
import SalonCardDetailsBanner from "./section/SalonCardDetailsBanner";
import TeamofGhalib from "./section/TeamofGhalib";
import ProductOfGalib from "./section/ProductOfGalib";
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

  const detailsPage = true;

  return (
    <section className="pt-28 lg:pt-36">
      <SalonCardDetailsBanner data={data} />
      <ServicesGhalibSalon detailsPage={detailsPage} data={data} />
      <TeamofGhalib data={data} />
      {data?.data?.products.length > 0 && <ProductOfGalib data={data} />}
      <AboutGhalibSalon data={data} />
      <VenuesNearby homepage={false} data={data} />
    </section>
  );
};

export default SalonCardDetailsPage;
