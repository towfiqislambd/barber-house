const TopServices = ({ data }) => {
  return (
    <div className="3xl:w-[750px] border p-4 md:p-6 border-[#B3BAC5] md:rounded-xl bg-white shadow-md">
      <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-5 lg:mb-6">
        Top Services
      </h3>
      {data?.top_services.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="lg:text-lg text-gray-700">
              <th className="text-left px-4 py-2">Service</th>
              <th className="text-left px-4 py-2">This Month</th>
              <th className="text-left px-4 py-2">Last Month</th>
            </tr>
          </thead>
          <tbody>
            {data?.top_services?.map(data => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="px-4 py-3">{data?.service}</td>
                <td className="px-4 py-3">{data?.thisMonth}</td>
                <td className="px-4 py-3">{data?.lastMonth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="font-medium text-red-500 text-lg">No services found yet!</p>
      )}
    </div>
  );
};

export default TopServices;
