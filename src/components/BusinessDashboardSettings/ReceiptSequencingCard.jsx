import { Link } from "react-router-dom";

const ReceiptSequencingCard = ({ title, subTitle, href }) => {
  return (
    <div className="border border-[#DFE1E6] max-w-[554px] 2xl:py-12 py-6 2xl:px-10 px-5 rounded-2xl bg-[#FFF]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#000] font-outfit text-2xl font-medium leading-[28.8px]">
            {title}
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            {subTitle}
          </p>
        </div>
        <Link to={href} className="text-[#5E22DD]">
          Edit
        </Link>
      </div>
      <div>
        <div className="mt-[23px]">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            Receipt No. Prefix
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            -
          </p>
        </div>

        <div className="mt-[23px]">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            Next receipt number
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            1
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptSequencingCard;
