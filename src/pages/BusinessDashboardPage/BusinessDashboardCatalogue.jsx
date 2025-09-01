import ServiceMenu from "@/components/BusinessDashboard/BusinessDashboardCatalog/ServiceMenu";
import { useEffect, useState } from "react";
import { useAllProductsList, useCatalogue } from "@/hooks/cms.queries";
import { Link, useLocation } from "react-router-dom";
import AddProductCategoryModal from "@/components/BusinessDashboard/Modals/AddProductCategoryModal";
import AddProductBrandModal from "@/components/BusinessDashboard/Modals/AddProductBrandModal";
import AllServicesList from "./AllServicesList";
import useAuth from "@/hooks/useAuth";
import AddDiscountModal from "@/components/BusinessDashboard/Modals/AddDiscountModal";

const BusinessDashboardCatalogue = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDiscount, setOpenDiscount] = useState(false);
  const [activeTab, setActiveTab] = useState("service_menu");
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { data: allCategoryData } = useCatalogue();
  const { data: allProductsList } = useAllProductsList(online_store_id);

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <section className="xl:grid xl:grid-cols-12 gap-10">
      <div className="xl:col-span-4 2xl:col-span-3 3xl:col-span-2 4xl:col-span-2 mb-5 xl:mb-0 bg-white rounded-xl 4xl:p-6 p-3 self-start">
        <h3 className="mb-3 text-2xl font-semibold">Catalogue</h3>
        <div className="border-t pb-5"></div>
        <ul className="xl:space-y-5 xl:text-lg font-medium text-nowrap flex xl:block gap-3 flex-wrap md:gap-5">
          <button
            onClick={() => setActiveTab("service_menu")}
            className={`xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg ${
              activeTab === "service_menu"
                ? "text-white bg-primary"
                : "text-[#2C2C2C]"
            }`}
          >
            Service menu
          </button>
          <button
            onClick={() => setActiveTab("services_list")}
            className={`xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg ${
              activeTab === "services_list"
                ? "text-white bg-primary"
                : "text-[#2C2C2C]"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setOpen(true)}
            className="xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg"
          >
            Add Product Category
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg"
          >
            Add Product Brand
          </button>
          <button
            onClick={() => setOpenDiscount(true)}
            className="xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg"
          >
            Add Discount Coupon
          </button>
          <Link
            to={"/businessDashboard/addnew-product"}
            className={`xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg ${
              activeTab === "products"
                ? "text-white bg-primary"
                : "text-[#2C2C2C]"
            }`}
          >
            Add Products
          </Link>
        </ul>
      </div>
      <div className="xl:col-span-8 2xl:col-span-9 3xl:col-span-10 px-4 pb-5">
        {activeTab === "service_menu" && (
          <ServiceMenu allCategoryData={allCategoryData} />
        )}
        {activeTab === "services_list" && (
          <AllServicesList allProductsList={allProductsList} />
        )}
      </div>

      {/* Modals */}
      <AddProductCategoryModal open={open} setOpen={setOpen} />
      <AddProductBrandModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <AddDiscountModal isOpen={openDiscount} setIsOpen={setOpenDiscount} />
    </section>
  );
};

export default BusinessDashboardCatalogue;
