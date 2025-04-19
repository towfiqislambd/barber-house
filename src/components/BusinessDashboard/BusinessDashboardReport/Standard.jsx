import {
  FinanceSvg,
  PerformanceLogoSvg,
  SalesImgSvg,
  ServicesSearch,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Standard = () => {
  const [activeList, setActiveList] = useState("reports");
  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-2xl font-medium mb-2">
        Reporting and analytics (17)
      </h3>
      <p className="text-[#2C2C2C] text-lg font-medium mb-7">
        Access all of your fresha reports
      </p>
      <div className="flex justify-between items-center">
        {/* Search */}
        <div className="relative w-[450px]">
          <input
            type="text"
            className="rounded-lg bg-white w-full py-3 ps-10 pe-5 shadow outline-none border border-gray-100"
            placeholder="Search"
          />
          <button className="absolute left-4 top-[18px]">
            <ServicesSearch />
          </button>
        </div>
      </div>
      <div className="flex gap-3 items-center flex-wrap mt-8 mb-8">
        <button
          onClick={() => setActiveList("reports")}
          className={`px-5 py-2 text-[#545454] font-medium rounded-full border ${
            activeList === "reports"
              ? "border-borderColor bg-primary text-white"
              : "border-gray-300"
          }`}
        >
          All reports
        </button>

        <button
          onClick={() => setActiveList("sales")}
          className={`px-5 py-2 text-[#545454] font-medium rounded-full border ${
            activeList === "sales"
              ? "border-borderColor bg-primary text-white"
              : "border-gray-300"
          }`}
        >
          Sales
        </button>

        <button
          onClick={() => setActiveList("finance")}
          className={`px-5 py-2 text-[#545454] font-medium rounded-full border ${
            activeList === "finance"
              ? "border-borderColor bg-primary text-white"
              : "border-gray-300"
          }`}
        >
          Finance
        </button>

        <Link to="/businessDashboard/appointment-list">
          <button
            onClick={() => setActiveList("appointments")}
            className={`px-5 py-2 text-[#545454] font-medium rounded-full border ${
              activeList === "appointments"
                ? "border-borderColor bg-primary text-white"
                : "border-gray-300"
            }`}
          >
            Appointments
          </button>
        </Link>

        <Link to="/businessDashboard/reporting-client-list">
          <button
            onClick={() => setActiveList("clients")}
            className={`px-5 py-2 text-[#545454] font-medium rounded-full border ${
              activeList === "clients"
                ? "border-borderColor bg-primary text-white"
                : "border-gray-300"
            }`}
          >
            Clients
          </button>
        </Link>

        <Link to="/businessDashboard/inventory">
          <button
            onClick={() => setActiveList("inventory")}
            className={`px-5 py-2 text-[#545454] font-medium rounded-full border ${
              activeList === "inventory"
                ? "border-borderColor bg-primary text-white"
                : "border-gray-300"
            }`}
          >
            Inventory
          </button>
        </Link>
      </div>

      {activeList === "reports" && (
        <div>
          <Link
            to="/businessDashboard/performance"
            className="border cursor-pointer mb-5 bg-white p-5 rounded-lg border-borderColorLight flex gap-5 items-center"
          >
            <PerformanceLogoSvg />
            <div className="">
              <h3 className="text-[#2C2C2C] text-xl font-semibold">
                Performance dashboard
              </h3>
              <p className="text-[#757575] font-medium">
                Dashboard of your business performance
              </p>
            </div>
          </Link>
          <Link
            to="/businessDashboard/presence"
            className="border cursor-pointer bg-white p-5 rounded-lg border-borderColorLight flex gap-5 items-center"
          >
            <PerformanceLogoSvg />
            <div className="">
              <h3 className="text-[#2C2C2C] text-xl font-semibold">
                Online presence dashboard
              </h3>
              <p className="text-[#757575] font-medium">
                Online sales and online client performance
              </p>
            </div>
          </Link>
        </div>
      )}

      {activeList === "sales" && (
        <div>
          <Link
            to="/businessDashboard/sales-summary"
            className="border cursor-pointer mb-5 bg-white p-5 rounded-lg border-borderColorLight flex gap-5 items-center"
          >
            <SalesImgSvg />
            <div className="">
              <h3 className="text-[#2C2C2C] text-xl font-semibold">
                Sales summary
              </h3>
              <p className="text-[#757575] font-medium">
                Units sold and revenue, not including gift card purchases
              </p>
            </div>
          </Link>
          <Link
            to="/businessDashboard/sales-list"
            className="border cursor-pointer bg-white p-5 rounded-lg border-borderColorLight flex gap-5 items-center"
          >
            <SalesImgSvg />
            <div className="">
              <h3 className="text-[#2C2C2C] text-xl font-semibold">
                Sales list
              </h3>
              <p className="text-[#757575] font-medium">
                A comprehensive record of all sales transactions
              </p>
            </div>
          </Link>
        </div>
      )}

      {activeList === "finance" && (
        <div>
          <Link
            to="/businessDashboard/payment-summery"
            className="border cursor-pointer mb-5 bg-white p-5 rounded-lg border-borderColorLight flex gap-5 items-center"
          >
            <FinanceSvg />
            <div className="">
              <h3 className="text-[#2C2C2C] text-xl font-semibold">
                Payments summary
              </h3>
              <p className="text-[#757575] font-medium">
                Units sold and revenue, not including gift card purchases
              </p>
            </div>
          </Link>
          <Link
            to="/businessDashboard/payment-transition"
            className="border cursor-pointer bg-white p-5 rounded-lg border-borderColorLight flex gap-5 items-center"
          >
            <FinanceSvg />
            <div className="">
              <h3 className="text-[#2C2C2C] text-xl font-semibold">
                Payments transaction
              </h3>
              <p className="text-[#757575] font-medium">
                A comprehensive record of all sales transactions
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Standard;
