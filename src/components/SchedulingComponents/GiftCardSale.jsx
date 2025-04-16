import { Link } from "react-router-dom";

export default function GiftCardSale() {
  return (
    <div className="2xl:w-[1000px] pb-[40px]">
      <div>
        <div className="mb-[24px]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
                Gift cards
              </h4>
              <p className="">
                Choose how you would like to sell your gift cards, and customise
                their settings
              </p>
            </div>
            <div>
              <Link to="/businessDashboard/editgifcardsale">
                <button className="text-[#fff] font-manrope font-semibold py-2 px-[12px] rounded-[8px] border border-[#757575] bg-[#000]">
                  add
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" border border-[#DFE1E6] md:p-[32px] p-4 rounded-[16px] bg-[#fff]">
          <div className="flex flex-col gap-[23px]">
            <div className="flex justify-between">
              <div className="mb-[20px]">
                <h4 className="text-[#2C2C2C] font-outfit text-[24px] font-medium mb-[4px]">
                  Availability and values
                </h4>
                <p className="font-manrope text-[#2C2C2C]">
                  Choose where you would like to sell your gift cards, set
                  expiration and values.
                </p>
              </div>
              <div>
                <Link to="">
                  <button className="text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                    Edit
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[20px]">
                <div className="w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Client mobile and email
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Shown on receipt
                  </p>
                </div>
                <div className="w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Client address
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Shown on receipt
                  </p>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div className="w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Receipt title
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Sale
                  </p>
                </div>
                <div className="w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Receipt custom line 1
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">Add</p>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div className="w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Receipt custom line 2
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">Add</p>
                </div>
                <div className="w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
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
