import ServiceMenu from "@/components/BusinessDashboard/BusinessDashboardCatalog/ServiceMenu";
import { useState } from "react";
import { useCatalogue } from "@/hooks/cms.queries";
import { Link } from "react-router-dom";

const BusinessDashboardCatalogue = () => {
  const [activeTab, setActiveTab] = useState("service_menu");
  const { data: allCategoryData } = useCatalogue();

  return (
    <section className="xl:grid xl:grid-cols-12 gap-10 3xl:gap-20">
      <div className="xl:col-span-4 2xl:col-span-3 3xl:col-span-2 4xl:col-span-2 mb-5 xl:mb-0 bg-white rounded-xl 4xl:p-6 p-3 self-start">
        <h3 className="mb-3 text-2xl font-semibold">Catalog</h3>
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
          <button className="xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg">
            Add Category
          </button>
          <button className="xl:ps-5 px-[10px] md:px-3 xl:pe-24 py-[5px] md:py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg">
            Add Brand
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
        {/* {activeTab === "products" && <Product />} */}
      </div>
    </section>
  );
};

export default BusinessDashboardCatalogue;
