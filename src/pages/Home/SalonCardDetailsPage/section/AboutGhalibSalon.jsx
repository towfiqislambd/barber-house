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

const AboutGhalibSalon = () => {
  return (
    <section className="py-10 2xl:py-20 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0 container">
      <div>
        <h1 className="text-textSecondary font-outfit text-2xl lg:text-[32px] font-medium">
          About Ghalib's Barber Salon
        </h1>
        <p className="text-textColor font-manrope md:text-lg leading-[27px] max-w-[1007px] mt-3 lg:mt-6">
          At Ghalib's Barber Salon, we deliver top-notch grooming with precision
          and style. From classic cuts to modern fades and razor shaves, our
          skilled barbers ensure you look your best. Walk in or book an
          appointment for a fresh, confident look! Experience classic barbering
          with a modern touch—walk in or book today!
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
              Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia.{" "}
              <span className="text-[#008A90] font-manrope lg:text-xl font-semibold leading-[30px]">
                Get direction
              </span>
            </h1>
          </div>
        </div>
        {/* Time Section */}
        <div className="mt-3 md:mt-5 flex flex-col md:flex-row md:gap-5">
          {/* Opening Times */}
          <div className="flex items-center gap-2">
            <ClockSvg />
            <h1 className="text-[#2C2C2C] font-manrope md:text-lg font-normal">
              Opening Times
            </h1>
          </div>
          {/* Daily 9:00 AM - 8:00 PM */}
          <div className="flex items-center gap-2">
            <h1 className="text-[#2C2C2C] font-manrope md:text-lg font-normal">
              Daily 9:00 AM - 8:00 PM
            </h1>
            <OpeningTimeSvg />
          </div>
        </div>

        {/* Make your profile stand out */}
        <div className="mt-7 lg:mt-12">
          <h1 className="text-textColor font-outfit text-2xl lg:text-[28px] font-semibold leading-[33.6px]">
            Make your profile stand out
          </h1>
          <p className="text-textLight font-manrope text-base font-medium leading-6 max-w-[608px] mt-3">
            Let cats know what makes your business spectal by secting any
            samemtes or addittinar intamation that an important to you. Choose
            many as opply
          </p>
        </div>
        {/* Amenities */}
        <div className="mt-8 max-w-[800px]">
          <h1 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Amenities
          </h1>
          {/*  */}
          <div className="flex gap-[10px] mt-4 flex-wrap">
            {/* Parking available */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <ParkingAvailableSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Parking available
              </h1>
            </div>
            {/* Near public transport */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <NearPublicTransportSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Near public transport
              </h1>
            </div>
            {/* Showers */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <ShowersSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Showers
              </h1>
            </div>
            {/* Lockers */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <LockersSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Lockers
              </h1>
            </div>
            {/* ============================= */}
          </div>
          {/* ================ */}
          <div className="max-w-[800px] flex flex-wrap gap-[10px] mt-[10px]">
            {/* Bath towels */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <BathTowelsSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Bath towels
              </h1>
            </div>
            {/* Swimming pool */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <SwimmingPoolSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Swimming pool
              </h1>
            </div>
            {/* Sauna */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <SaunaSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Sauna
              </h1>
            </div>
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
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <PetFriendlySvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Pet-friendly
              </h1>
            </div>
            {/* Adults only */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <AdultsOnlySvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Adults only
              </h1>
            </div>
            {/* Kid-friendly */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <KidFriendlySvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Kid-friendly
              </h1>
            </div>
            {/* Wheelchair accessible */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <WheelchairAccessibleSvg />
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Wheelchair accessible
              </h1>
            </div>
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
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Organic products only
              </h1>
            </div>
            {/* Vegan products only */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Vegan products only
              </h1>
            </div>
            {/* Environmentally friendly */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Environmentally friendly
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap gap-[10px] mt-4">
            {/* LGBTQ+ */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                LGBTQ+
              </h1>
            </div>
            {/* Black-owned */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Black-owned
              </h1>
            </div>
            {/* Woman-owned */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Woman-owned
              </h1>
            </div>
            {/* Asian-owned */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Asian-owned
              </h1>
            </div>
            {/* Hispanic-owned */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Hispanic-owned
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-[10px] mt-4">
            {/* Indigenous-owned */}
            <div className="flex gap-[6px] border border-[#DFE1E6] py-2 px-3 rounded-[100px] cursor-pointer items-center">
              <h1 className="text-textColor font-manrope font-medium leading-[21px]">
                Indigenous-owned
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGhalibSalon;
