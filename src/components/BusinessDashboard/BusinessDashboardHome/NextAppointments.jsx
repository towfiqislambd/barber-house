const AppointmentsActivity = ({ data }) => {
  console.log(data?.appointment_activities);

  return (
    <div className="3xl:w-[750px] border p-4 md:p-6 border-[#B3BAC5] md:rounded-xl bg-white h-[650px] overflow-y-auto">
      <h3 className="font-semibold text-xl lg:text-2xl text-[#2C2C2C] mb-5 lg:mb-10">
        Today's next appointments
      </h3>
      <div className="space-y-7">
        {data?.todays_appointments?.map(data => (
          <li key={data.id} className="md:flex justify-between items-center">
            <div className="flex gap-3 md:gap-5 flex-grow items-center">
              <div className="text-center">
                <p className="text-lg font-medium">
                  {data?.user?.first_name} {data?.user?.last_name}
                </p>
              </div>
              <div className="">
                <div className="flex gap-5 items-center">
                  <p className="text-sm md:text-base">{data?.date}</p>
                  <p className="text-sm md:text-base">{data?.time}</p>
                </div>
              </div>
            </div>
            <p
              className={`font-medium text-sm md:text-base capitalize ${
                data?.status === "confirmed" ? "text-green-600" : "text-red-500"
              }`}
            >
              {data.status}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsActivity;
