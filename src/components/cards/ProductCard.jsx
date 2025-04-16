/* eslint-disable react/prop-types */
import { useState } from "react";
import { StarSvg, WishButtonSvg } from "../svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="rounded-lg relative group">
      <div className="relative w-full h-52 rounded-t-lg overflow-hidden">
        {/* Actual Image */}
        <img
          src={item?.image}
          alt="Card"
          className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-all duration-300"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>
      {/* content section */}
      <div className="xl:px-5 px-3 xl:py-4 py-2 border border-borderColor rounded-b-lg flex flex-col gap-6">
        <div>
          <div className="w-full flex xl:flex-row flex-col xl:items-center items-baseline justify-between">
            <h3 className="text-xl lg:text-2xl font-medium font-outfit">
              {item?.title}
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <p className="text-textLight font-medium text-lg">
                  {item?.rating}
                </p>
                <StarSvg />
              </div>
              <span className="text-textLight font-medium text-lg">
                ({item?.totalRating})
              </span>
            </div>
          </div>
          {/* location */}
          <div className="mt-1">
            <p className="text-base lg:text-lg font-medium text-textLight">
              {item?.location}
            </p>
          </div>
        </div>
        {/* shop now button */}
        <Link className="bg-primary-gradient xl:px-6 px-2 xl:py-2.5 py-1 rounded-full inline-block w-fit text-white hover:scale-95 transition-transform duration-500">
          Shop Now
        </Link>
      </div>
      {/* category */}
      <div className="px-3 py-1.5 rounded-sm bg-white/50 absolute top-3 left-3">
        {item?.category}
      </div>
      {/* wishlist button */}
      <div
        onClick={() => setChecked((prev) => !prev)}
        className="size-8 cursor-pointer flex items-center justify-center rounded-full bg-white/50 absolute top-3 right-3"
      >
        <WishButtonSvg checked={checked} />
      </div>

      {/* status */}
      {item?.status && (
        <div
          className={`xl:px-3 px-1 xl:py-1.5 py-1 rounded-sm font-medium absolute bottom-3 right-3  ${
            item?.status == "Previous"
              ? "text-[#D21837] bg-[#D2183729]"
              : "text-[#008C4F] bg-[#008A9029]"
          }`}
        >
          {item?.status}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
