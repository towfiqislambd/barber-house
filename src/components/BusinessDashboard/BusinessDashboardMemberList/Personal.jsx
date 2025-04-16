const Personal = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-outfit text-2xl sm:text-3xl font-medium">
          Personal
        </h3>
        <button className="border rounded-lg px-4 py-2 text-base font-medium">
          Edit
        </button>
      </div>
      {/* This is the profile information */}
      <div className="border lg:p-7 p-3 rounded-lg mt-5">
        <h4 className="text-[#2C2C2C] font-semibold mb-5 text-xl">Profile</h4>
        <div>
          <div className="flex lg:items-center flex-col lg:flex-row 3xl:gap-[200px] xl:gap-[190px] lg:gap-[150px] gap-5">
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Full name
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">Rahman</p>
            </div>
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Email
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">
                waleedbin123@gmail.com
              </p>
            </div>
          </div>
          <div className="flex lg:items-center flex-col lg:flex-row 3xl:gap-[160px] xl:gap-[150px] lg:gap-[110px] gap-5 mt-5">
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Phone number
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">
                +111 18520345
              </p>
            </div>
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Date of birth
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">
                2-02-2025
              </p>
            </div>
          </div>
          <div className="flex lg:items-center flex-col lg:flex-row 3xl:gap-[200px] xl:gap-[185px] lg:gap-[145px] gap-5 mt-5">
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Country
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">
                Bangladesh
              </p>
            </div>
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Job title
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">Haircut</p>
            </div>
          </div>
          <hr className="col-span-2 mt-5" />
          <h4 className="text-[#2C2C2C] col-span-2 font-semibold text-xl mt-5">
            Work details
          </h4>
          <div className="flex flex-col lg:flex-row 3xl:gap-[75px] lg:gap-[65px] gap-5 lg:items-center">
            <div className="mt-5">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Employment
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">
                February 3rd, 2025 - present
              </p>
            </div>
            <div className="">
              <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                Employment type
              </h4>
              <p className="text-[#545454] font-medium lg:text-base">Add</p>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
              Team member ID
            </h4>
            <p className="text-[#545454] font-medium lg:text-base">Add</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
