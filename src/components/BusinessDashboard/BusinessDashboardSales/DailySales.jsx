import { Loader } from "@/components/Loader/Loader";
import { useDailySales } from "@/hooks/cms.queries";
import useAuth from "@/hooks/useAuth";

const DailySales = () => {
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { data: allSales, isLoading } = useDailySales(online_store_id);

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Daily Sales
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-4 lg:mb-7">
        Track, analyze & grow your salon business daily
      </p>

      <div className="border-t border-primary mt-10 pb-5"></div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader />
        </div>
      ) : allSales?.sales?.length > 0 ? (
        <div className="overflow-x-auto">
          {/* Table */}
          <table className="w-full border-collapse lg:min-w-[800px]">
            <tr className="lg:text-lg text-gray-700 text-nowrap">
              <th className="lg:px-4 py-2 lg:py-6 !text-left">Product Name</th>
              <th className="lg:px-4 py-2 lg:py-6">Product Price</th>
              <th className="lg:px-4 py-2 lg:py-6">Quantity</th>
              <th className="lg:px-4 py-2 lg:py-6">Client Name</th>
              <th className="lg:px-4 py-2 lg:py-6">Total</th>
            </tr>
            <tbody>
              {allSales?.sales?.map(data => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-200 border-t 
                    first:border-none text-sm lg:text-base text-nowrap border-dashed text-[#545454]"
                >
                  <td className="px-4 text-[#545454] font-medium py-5">
                    {data?.product_name}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    SAR{data?.price}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data?.quantity}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data?.client_name}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data?.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="font-medium text-red-500 text-xl">No data found!</p>
      )}
    </div>
  );
};

export default DailySales;
