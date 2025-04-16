import { Link } from "react-router-dom";

export default function Receipts() {
  return (
    <div className="2xl:w-[1000px] pb-[40px]">
      <div>
        <div className="mb-[24px]">
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
            Receipts
          </h4>
          <p className="">
            ustomise the content displayed on sales receipts issued to your
            clients
          </p>
        </div>
        <div className=" border border-[#DFE1E6] p-[15px] xl:p-[32px] rounded-[16px] bg-[#fff]">
          <div className="flex flex-col gap-[23px]">
            <div className="flex justify-between gap-[5px]">
              <div className="mb-[20px]">
                <h4 className="text-[#2C2C2C] font-outfit text-[24px] font-medium mb-[4px]">
                  Receipt design
                </h4>
                <p className="font-manrope text-[#2C2C2C]">
                  Choose how your receipts are displayed to clients
                </p>
              </div>
              <div className="">
                <Link to="/businessDashboard/editreceipt">
                  <button className="pt-[10px] text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                    Edit
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[20px] flex-col lg:flex-row">
                <div className="lg:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Client mobile and email
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Shown on receipt
                  </p>
                </div>
                <div className="lg:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope lg:text-[18px] font-semibold mb-[5px]">
                    Client address
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Shown on receipt
                  </p>
                </div>
              </div>
              <div className="flex gap-[20px] flex-col lg:flex-row">
                <div className="lg:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope lg:text-[18px] font-semibold mb-[5px]">
                    Receipt title
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Sale
                  </p>
                </div>
                <div className="lg:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope lg:text-[18px] font-semibold mb-[5px]">
                    Receipt custom line 1
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">Add</p>
                </div>
              </div>
              <div className="flex gap-[20px] flex-col lg:flex-row">
                <div className="lg:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope lg:text-[18px] font-semibold mb-[5px]">
                    Receipt custom line 2
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">Add</p>
                </div>
                <div className="lg:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope lg:text-[18px] font-semibold mb-[5px]">
                    Receipt footer
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">Add</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
