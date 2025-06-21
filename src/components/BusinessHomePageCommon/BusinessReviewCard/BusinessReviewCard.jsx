import { IoIosStar } from "react-icons/io";

const BusinessReviewCard = ({ item }) => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-center gap-5 mt-4">
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${item?.client_avatar}`}
          alt="Reviewer"
          className="w-24 h-24 rounded-full"
        />
        <p className="text-[#545454] font-manrope xl:text-lg leading-[27px]">
          {item?.review}
        </p>
      </div>

      <div className="mt-[35px]">
        <div className="flex items-center gap-[2px] text-[#FFA800] text-xl mb-2">
          {[...Array(item?.rating || 0)].map((_, index) => (
            <IoIosStar key={index} />
          ))}
        </div>

        <p className="text-[#2C2C2C] font-outfit text-[20px] xl:text-2xl font-semibold leading-[28.8px]">
          {item?.shop_name}
        </p>
        <p className="text-[#545454] font-manrope text-base leading-6">
          {item?.shop_location}
        </p>
      </div>
    </div>
  );
};

export default BusinessReviewCard;
