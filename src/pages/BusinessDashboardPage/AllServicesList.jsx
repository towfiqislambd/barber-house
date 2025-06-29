const AllServicesList = ({ allProductsList }) => {
  console.log(allProductsList);
  return (
    <div className=" relative">
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        All Products
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">
        See all the products
      </p>
      <div className="border-t border-primary mt-10 pb-5"></div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="lg:text-lg text-gray-700 bg-gray-100 text-nowrap">
              <th className="py-4 px-2">ID</th>
              <th className="py-4 px-2">Product Name</th>
              <th className="py-4 px-2 !text-left">Product Price</th>
              <th className="py-4 px-2 !text-left">Category</th>
              <th className="py-4 px-2 !text-left">Stock Quantity</th>
              <th className="py-4 px-2 !text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {allProductsList ? (
              allProductsList?.map((data, idx) => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap"
                >
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                    {idx + 1}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                    {data?.name}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base">
                    SAR: {data?.price}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base">
                    {data?.category}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base">
                    {data?.stock_quantity}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base">
                    {data?.amount}
                  </td>
                </tr>
              ))
            ) : (
              <p className="font-medium pt-10 text-red-500 text-xl">
                No products found!
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServicesList;
