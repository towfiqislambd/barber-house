import { Link } from "react-router-dom";

const ExternalLinkCard = ({ label, value, href }) => {
  return (
    <div className="w-[50%] mt-4">
      <p className="text-textColor font-manrope text-base ms:text-lg font-semibold">
        {label}
      </p>
      <Link
        to={href}
        className="text-[#055AD9] font-manrope font-medium leading-6 mt-[5px]"
      >
        {value}
      </Link>
    </div>
  );
};

export default ExternalLinkCard;
