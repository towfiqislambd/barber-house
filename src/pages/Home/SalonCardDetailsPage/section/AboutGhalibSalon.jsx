import {
  AddressSvg,
  AdultsOnlySvg,
  BathTowelsSvg,
  ClockSvg,
  KidFriendlySvg,
  LockersSvg,
  NearPublicTransportSvg,
  OpeningTimeSvg,
  ParkingAvailableSvg,
  PetFriendlySvg,
  SaunaSvg,
  ShowersSvg,
  SwimmingPoolSvg,
  WheelchairAccessibleSvg,
} from "@/components/svgContainer/SvgContainer";
import moment from "moment";

const AboutGhalibSalon = ({ data }) => {
  const openingHours = data?.data?.opening_hours || [];
  const currentDay = moment().format("dddd").toLowerCase();
  return (
    <section className="py-10 2xl:py-20 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0 container">
      <div>
        <h1 className="text-textSecondary font-outfit text-2xl lg:text-[32px] font-medium">
          About {data?.data?.name}
        </h1>
        <p className="text-textColor font-manrope md:text-lg leading-[27px] max-w-[1007px] mt-3 lg:mt-6">
          {data?.data?.about}
        </p>
        {/* Address Section  */}
        <div className="mt-5 lg:mt-8 flex items-start flex-col md:flex-row md:items-center">
          {/* Address */}
          <div className="flex items-center gap-2">
            <AddressSvg />
            <h1 className="text-[#2C2C2C]  font-manrope md:text-lg leading-[30px]">
              Location:
            </h1>
          </div>
          {/* Daily 9:00 AM - 8:00 PM */}
          <div className="flex items-center gap-2">
            <h1 className="text-textLight font-manrope lg:text-lg  leading-[30px]">
              {data?.data?.address}
              {data?.data?.latitude && data?.data?.longitude && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${data.data.latitude},${data.data.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-manrope lg:text-xl font-semibold leading-[30px] ml-1 underline"
                >
                  Get direction
                </a>
              )}
            </h1>
          </div>
        </div>
        {/* Time Section */}
        <div className="mt-3 md:mt-5 flex flex-col md:flex-row md:gap-5">
          {/* Opening Times */}
          <div className="flex  gap-2">
            <ClockSvg />
            <h1 className="text-[#2C2C2C] font-manrope md:text-lg font-normal">
              Opening Times
            </h1>
          </div>
          {/* Daily 9:00 AM - 8:00 PM */}
          <div className="flex flex-col  gap-2">
            {openingHours.map((day) => {
              const isToday = day.day_name.toLowerCase() === currentDay;
              const isClosed =
                !day.morning_start_time && !day.evening_start_time;

              return (
                <p
                  key={day.day_name}
                  className={`font-manrope text-lg leading-[27px]  ${
                    isToday ? "text-primary font-semibold" : "text-[#000]"
                  }`}
                >
                  {day.day_name} —{" "}
                  {isClosed
                    ? "Closed"
                    : `${day.morning_start_time} - ${day.morning_end_time}${
                        day.evening_start_time && day.evening_end_time
                          ? `, ${day.evening_start_time} - ${day.evening_end_time}`
                          : ""
                      }`}
                </p>
              );
            })}
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-8 max-w-[800px]">
          <h1 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Amenities
          </h1>
          {/*  */}
          <div className="flex gap-[10px] mt-4 flex-wrap">
            {/* Parking available */}
            {data?.data?.store_amenities?.map((amenities) => {
              return (
                <div
                  key={amenities.id}
                  className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center"
                >
                  <img
                    src={`${import.meta.env.VITE_SITE_URL}/${
                      amenities?.amenity?.icon
                    }`}
                    className="w-5 h-5"
                    alt={amenities?.amenity?.name}
                  />
                  <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                    {amenities?.amenity?.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-8 max-w-[800px]">
          <h1 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Highlights
          </h1>
          {/*  */}
          <div className="flex flex-wrap gap-[10px] mt-4">
            {/* Pet-friendly */}
            {data?.data?.store_highlights?.map((highlight) => (
              <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${
                    highlight?.highlight?.icon
                  }`}
                  className="w-5 h-5"
                  alt={highlight?.highlight?.name}
                />
                <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                  {highlight?.highlight?.name}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-8 max-w-[800px]">
          <h1 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Values
          </h1>
          {/*  */}
          <div className="flex flex-wrap gap-[10px] mt-4">
            {/* Organic products only */}
            {data?.data?.store_values?.map((value) => (
              <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
                <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                  {value?.value?.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGhalibSalon;
