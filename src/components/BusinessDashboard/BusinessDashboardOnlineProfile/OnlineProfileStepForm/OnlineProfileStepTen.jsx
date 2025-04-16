import {
  AdultsOnlySvg,
  BathTowelsSvg,
  KidFriendlySvg,
  LockersSvg,
  NearPublicTransportSvg,
  ParkingAvailableSvg,
  PetFriendlySvg,
  SaunaSvg,
  ShowersSvg,
  SwimmingPoolSvg,
  WheelchairAccessibleSvg,
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";

const OnlineProfileStepTen = ({ step, setStep }) => {
  return (
    <section className="lg:px-6 px-5 xl:px-0 pb-10 sm:pb-0">
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex flex-col sm:flex-row gap-4">
          <h1 className="mt-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Preview
          </h1>
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] py-[12px] sm:py-0 flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[708px] mx-auto lg:mt-[40px] mt-5 font-semibold leading-[43.2px]">
        {/* Make your profile stand out */}
        <div className="lg:mt-12">
          <h1 className="text-textColor font-outfit text-[28px] font-semibold leading-[33.6px]">
            Make your profile stand out
          </h1>
          <p className="text-textLight font-manrope text-sm md:text-base font-medium leading-6 max-w-[608px] mt-3">
            Let cats know what makes your business spectal by secting any
            samemtes or addittinar intamation that an important to you. Choose
            many as opply
          </p>
        </div>
        {/* Amenities */}
        <div className="md:mt-8 mt-4 max-w-[800px]">
          <h1 className="text-[#000] font-manrope text-lg font-bold leading-[27px]">
            Amenities
          </h1>
          {/*  */}
          <div className="flex flex-wrap gap-[10px] mt-4">
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
        <div className="md:mt-8 mt-4 max-w-[800px]">
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
        <div className="md:mt-8 mt-4 max-w-[800px]">
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

export default OnlineProfileStepTen;
