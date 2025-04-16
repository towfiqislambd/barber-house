import { Link } from "react-router-dom";
import { Switch } from "antd";

export default function Tipping() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="container px-0 sm:px-0">
      <div className="2xl:w-[1000px] pb-[40px]">
        <div className="mb-[24px]">
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
            Tipping
          </h4>
          <p className="">
            Choose when to ask clients to tip and customise default tipping
            values.
          </p>
        </div>
        <div className="border border-[#DFE1E6] md:p-[32px] p-4 rounded-[16px] bg-white">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h4 className="text-[#2C2C2C] font-outfit text-[24px] font-medium mb-[16px]">
                Tipping options
              </h4>
            </div>
            <div>
              <Link to="/businessDashboard/edittipping">
                <button className="text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-[24px]">
              <div>
                <h4 className="text-[#2C2C2C] font-outfit text-[24px] font-medium mb-[16px]">
                  Team member rating
                </h4>
                <p className="text-[#545454] font-manrope font-medium mb-[23px]">
                  Display a tip option screen at the Point of Sale
                </p>
              </div>
              <div>
                <Switch onChange={onChange} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-[8px] text-[#2C2C2C] font-outfit text-[24px] font-medium">
              Tip values
            </h4>
            <p className="font-manrope text-[#2C2C2C] font-medium">
              Default values
            </p>
            <ul className="mt-[20px] list-disc flex gap-x-3">
              <li className="text-[#2C2C2C] font-manrope font-medium pe-[20px] list-none">
                10%
              </li>
              <li className="text-[#2C2C2C] font-manrope font-medium pe-[20px]">
                18%
              </li>
              <li className="text-[#2C2C2C] font-manrope font-medium pe-[20px]">
                25%
              </li>
              <li className="text-[#2C2C2C] font-manrope font-medium pe-[20px]">
                35%
              </li>
              <li className="text-[#2C2C2C] font-manrope font-medium pe-[20px]">
                45%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
