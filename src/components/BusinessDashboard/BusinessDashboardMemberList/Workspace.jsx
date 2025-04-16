import workspace from "../../../assets/images/workspace.png";
const Workspace = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-outfit text-2xl sm:text-3xl font-medium">
          Workspace
        </h3>
        <button className="border rounded-lg px-4 py-2 text-base font-medium">
          Edit
        </button>
      </div>
      <div className="border lg:p-7 p-3 rounded-lg mt-5">
        <h4 className="text-[#2C2C2C] font-semibold mb-5 text-xl">Services</h4>
        <h5 className="text-[#2C2C2C] text-base lg:text-lg font-medium mb-1">
          Provides
        </h5>
        <h6 className="text-sm lg:text-xl mb-5 text-[#757575]">All services</h6>
        <hr />
        <h5 className="text-[#2C2C2C] text-base lg:text-lg font-medium mt-5">
          Settings
        </h5>
        <div className="mt-5 flex mb-5">
          <div className="flex-1 text-left justify-start items-start">
            <h5 className="text-[#2C2C2C] text-base lg:text-lg font-medium mb-1">
              Calendar bookings
            </h5>
            <p className="text-[#545454] text-sm lg:text-base">Enabled</p>
          </div>
          <div className="flex-1">
            <div className="flex-1 text-left justify-start items-start">
              <h5 className="text-[#2C2C2C] text-base lg:text-lg font-medium mb-1">
                Permission level
              </h5>
              <p className="text-[#545454] text-sm lg:text-base">Owner</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col sm:flex-row mt-5 gap-5 sm:items-center">
        <img src={workspace} alt="" />
        <div>
          <h3 className="font-semibold text-base lg:text-xl">Shihab shop</h3>
          <p className="text-[#2C2C2C] text-sm lg:text-base">
            zoo Road, Dhaka,Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
