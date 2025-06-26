const AppointmentsActivity = ({ data }) => {
  console.log(data?.appointment_activities);

  return (
    <div className="3xl:w-[750px] border p-4 md:p-6 border-[#B3BAC5] md:rounded-xl bg-white h-[650px] overflow-y-auto">
      <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-5 lg:mb-10">
        Appointments activity
      </h3>
      <div className="space-y-7">
        {data?.appointment_activities?.map(data => (
          <div key={data.id} className="md:flex justify-between items-center">
            <div className="flex gap-3 md:gap-5 flex-grow items-center">
              <div className="text-center">
                <p className="text-xl font-bold">{data.date}</p>
              </div>
              <div className="">
                <div className="flex gap-5 items-center">
                  <p className="text-sm md:text-base">{data.time}</p>
                  <p
                    className={`font-medium text-sm md:text-base ${
                      data?.status === "confirmed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {data.status}
                  </p>
                </div>
                {/* <h3 className="text-[#1E1E1E] text-lg font-semibold py-[2px]">
                  {data.title}
                </h3> */}
                {/* <p className="font-medium text-[#2C2C2C]">{data.desc}</p>
                <p className="text-[#1E1E1E] md:hidden font-semibold text-lg lg:text-xl">
                  SAR 55
                </p> */}
              </div>
            </div>
            <p className="text-[#1E1E1E] hidden md:block font-semibold text-lg lg:text-xl">
              SAR 55
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsActivity;
