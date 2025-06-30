import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAuth from "@/hooks/useAuth";
import { useAllSales } from "@/hooks/cms.queries";
import { Loader } from "@/components/Loader/Loader";

const Sales = () => {
  const [filter, setFilter] = useState("weekly");
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { data: allSales, isLoading } = useAllSales(online_store_id, filter);

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Sales
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-4 lg:mb-7">
        Track, analyze & grow your salon business daily
      </p>

      {/* Filter */}
      <Select value={filter} onValueChange={setFilter}>
        <SelectTrigger className="w-[220px] text-base border !py-5 border-[#B3BAC5]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weekly" className="!text-black">
            Weekly
          </SelectItem>
          <SelectItem value="monthly" className="!text-black">
            Monthly
          </SelectItem>
          <SelectItem value="yearly" className="!text-black">
            Yearly
          </SelectItem>
        </SelectContent>
      </Select>

      <div className="border-t border-primary mt-10 pb-5"></div>
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader />
        </div>
      ) : allSales?.products.length > 0 ? (
        <div className="overflow-x-auto">
          {/* Table */}
          <table className="w-full border-collapse lg:min-w-[800px]">
            <thead>
              <tr className="lg:text-lg text-gray-700 text-nowrap">
                <th className="lg:px-4 py-2 lg:py-6 !text-left">
                  Product Name
                </th>
                <th className="lg:px-4 py-2 lg:py-6">Sold Quantity</th>
                <th className="lg:px-4 py-2 lg:py-6">Sales Amount</th>
              </tr>
            </thead>
            <tbody>
              {allSales?.products?.map(item => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-200 border-t first:border-none text-sm lg:text-base text-nowrap border-dashed text-[#545454]"
                >
                  <td className="px-4 text-[#545454] font-medium py-5">
                    {item?.product_name}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {item?.quantity_sold}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {item?.sales_amount}
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

export default Sales;
