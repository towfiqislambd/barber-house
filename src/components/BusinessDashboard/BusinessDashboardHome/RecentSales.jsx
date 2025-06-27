import RecentSalesChart from "../Charts/RecentSalesChart";

const RecentSales = ({ data }) => {
  return (
    <div className="3xl:w-[750px] border p-6 border-[#B3BAC5] md:rounded-xl bg-white">
      <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-1">
        Recent Sales
      </h3>
      <p className="text-[#545454] mb-3">Last 7 Days</p>
      <p className="mb-1 text-[#2C2C2C] font-medium">
        Appointments: {data?.total_appointments}
      </p>
      <p className="mb-7 text-[#2C2C2C] font-medium">
        Appointments value: SAR {data?.total_price}
      </p>
      <RecentSalesChart data={data} />
    </div>
  );
};

export default RecentSales;
