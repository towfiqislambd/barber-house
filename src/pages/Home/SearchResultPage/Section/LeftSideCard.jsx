import { StarSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const LeftSideCard = ({
  cardImg,
  title,
  rating,
  reviews,
  address,
  services,
  isRow,
}) => {
  return (
    <div
      className={`${isRow ? "flex 2xl:flex-row flex-col" : "flex flex-col"}`}
    >
      {/* Card Image */}
      <img
        className={`object-cover rounded-t-lg ${
          isRow
            ? "4xl:w-[320px] 3xl:w-[300px] 2xl:w-[260px] h-full bg-red-500 object-cover"
            : "w-full xl:w-[438px] h-[230px] 3xl:h-[260px]"
        } `}
        src={cardImg}
        alt={title}
      />

      {/* Card Content */}
      <div className="border 2xl:p-4 xl:p-6 p-2 rounded-b-xl border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-borderColorLight bg-white">
        <h1 className="text-textLight font-outfit text-xl lg:text-2xl 3xl:text-[32px] font-medium">
          {title}
        </h1>
        {/* Rating Section */}
        <div className="flex gap-3 mt-2 xl:mt-3">
          <div className="flex gap-1 items-center">
            <h1 className="text-[#2C2C2C] font-manrope text-lg xl:text-xl 3xl:text-2xl font-semibold">
              {rating}
            </h1>
            <StarSvg />
          </div>
          <h1 className="text-textLight font-manrope text-lg xl:text-xl 3xl:text-2xl font-semibold">
            ({reviews})
          </h1>
        </div>
        {/* Address */}
        <h1 className="text-textLight font-manrope text-sm lg:text-lg font-medium leading-[27px] max-w-[377px] xl:mt-5 mt-2">
          {address}
        </h1>
        {/* Services List */}
        <div className="xl:space-y-4 space-y-2 lg:mt-5 mt-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between bg-[#F6F6F6] p-3 rounded-lg"
            >
              <div>
                <h1 className="text-[#2C2C2C] font-manrope text-sm lg:text-base font-semibold">
                  {service.name}
                </h1>
                <p className="text-textLight font-manrope text-xs lg:text-sm font-semibold">
                  {service.duration}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {service.price && (
                  <>
                    <h1 className="text-[#2C2C2C] font-manrope text-base font-medium">
                      {service.priceLabel || "from"}
                    </h1>
                    <div className="flex items-center">
                      <img
                        className="w-[13px] h-4 object-cover"
                        src={service.currencyImg}
                        alt="Currency"
                      />
                      <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
                        {service.price}
                      </h1>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          {/* See More Services */}
          <Link className="text-primary font-manrope lg:text-lg font-semibold underline cursor-pointer flex">
            See More Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;
