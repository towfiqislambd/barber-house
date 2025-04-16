import { Link } from "react-router-dom";

const LocationSetUpPageCard = ({ title, email, phone, href, location }) => {
  return (
    <div className="border border-[#DFE1E6] max-w-[554px] 2xl:py-12 py-6 2xl:px-10 px-5 rounded-2xl bg-[#FFF]">
      <div className="flex justify-between">
        <p className="text-[#000] font-outfit text-2xl font-medium leading-[28.8px]">
          {title}
        </p>
        <Link to={href} className="text-[#5E22DD]">
          Edit
        </Link>
      </div>
      <div>
        <div className="mt-[23px]">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            {location}
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            {email}
          </p>
        </div>

        <div className="mt-[23px]">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            Location contact number
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSetUpPageCard;
