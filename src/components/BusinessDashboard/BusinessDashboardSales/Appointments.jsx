const Appointments = ({ data }) => {
  return (
    <div className=" relative">
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Appointments
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">
        Track, analyze & grow your salon business daily
      </p>
      <div className="border-t border-primary mt-10 pb-5"></div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="lg:text-lg text-gray-700 bg-gray-100 text-nowrap">
              <th className="py-4 px-2">ID</th>
              <th className="py-4 px-2">Client Name</th>
              <th className="py-4 px-2 !text-left">Service</th>
              <th className="py-4 px-2 !text-left">Price</th>
              <th className="py-4 px-2 !text-left">Duration</th>
              <th className="py-4 px-2">Team member</th>
              <th className="py-4 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data?.map((data, idx) => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap"
                >
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                    {idx + 1}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                    {data?.customer_name}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 ">
                    {data?.services?.map(service => (
                      <p key={service?.price}>{service?.service_name}</p>
                    ))}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 ">
                    {data?.services?.map(service => (
                      <p key={service?.price}>{service?.price}</p>
                    ))}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 ">
                    {data?.services?.map(service => (
                      <p key={service?.price}>{service?.duration}</p>
                    ))}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                    {data?.appointment_date}
                  </td>
                  <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                    <span
                      className={`capitalize ${
                        data?.status === "confirmed"
                          ? "text-green-700 bg-green-200"
                          : "text-red-700 bg-red-200"
                      } px-3 py-1 rounded-full`}
                    >
                      {data?.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <p className="font-medium pt-5 text-red-500 text-xl">
                No activity found!
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
