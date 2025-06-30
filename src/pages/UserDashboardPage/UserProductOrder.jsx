import { Loader } from "@/components/Loader/Loader";
import { useShowProducts } from "@/hooks/user.queries";

export default function UserProductOrder() {
  const { data: showProducts, isLoading } = useShowProducts();
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]">
        Product Order
      </h3>
      <div>
        <table class="w-full">
          <thead className="border-b border-b-[#cccbcb] ">
            <tr className="">
              <th className="text-[#333] font-semibold font-manrope py-[20px] text-start">
                Product Name
              </th>
              <th className="text-[#333] font-semibold font-manrope py-[20px] text-start">
                Price
              </th>
              <th className="text-[#333] font-semibold font-manrope py-[20px] text-start">
                Description
              </th>
              <th className="text-[#333] font-semibold font-manrope py-[20px] text-start">
                Quantity
              </th>
              <th className="text-[#333] font-semibold font-manrope py-[20px] text-start">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="">
            {showProducts?.orders?.flatMap(singleProduct =>
              singleProduct?.products?.map(item => (
                <tr key={item?.product_id} className="border-b text-start">
                  <td className="py-[10px] text-[#5C5C5C] text-[16px] font-medium">
                    {item?.product_name}
                  </td>
                  <td className="py-[10px] text-[#5C5C5C] text-[16px] font-medium">
                    {item?.product_price}
                  </td>
                  <td className="py-[10px] text-[#5C5C5C] text-[16px] font-medium">
                    {item?.product_description}
                  </td>
                  <td className="py-[10px] text-[#5C5C5C] text-[16px] font-medium">
                    {item?.ordered_quantity}
                  </td>
                  <td className="py-[10px] text-[#5C5C5C] text-[16px] font-medium">
                    {item?.subtotal}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
