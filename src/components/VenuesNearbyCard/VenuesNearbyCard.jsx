import { useState } from "react";
import { StarSvg, WishButtonSvg } from "../svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const VenuesNearbyCard = ({ venue }) => {
  console.log(venue);
  console.log(venue?.store_images[0].images);

  return (
    <Link to={`/shop-info/${venue?.id}`} className="rounded-lg relative group">
      <div className="relative w-full h-52 rounded-t-lg overflow-hidden">
        {/* Actual Image */}
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${
            venue?.store_images[0].images
          }`}
          alt={venue?.name}
          className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-all duration-300"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* content section */}
      <div className="px-5 py-4 border border-borderColor rounded-b-lg flex flex-col gap-6">
        <div>
          <div className="w-full flex items-center justify-between">
            <h3 className="text-2xl font-medium font-outfit">{venue?.name}</h3>
            {/* <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <p className="text-textLight font-medium text-lg">{rating}</p>
                <StarSvg />
              </div>
              <span className="text-textLight font-medium text-lg">
                ({reviews})
              </span>
            </div> */}
          </div>
          {/* location */}
          <div className="mt-1">
            <p className="text-lg font-medium text-textLight">
              {venue?.address}
            </p>
          </div>
        </div>

        {/* shop now button */}
        <Link className="bg-primary-gradient px-6 py-2.5 rounded-full inline-block w-fit text-white hover:scale-95 transition-transform duration-500">
          Book Now
        </Link>
      </div>

      {/* category */}
      {/* <div className="px-3 py-1.5 rounded-sm bg-white/50 absolute top-3 left-3">
        {category}
      </div> */}

      {/* wishlist button */}
      <div className="size-8 cursor-pointer flex items-center justify-center rounded-full bg-white/50 absolute top-3 right-3">
        <WishButtonSvg />
      </div>
    </Link>
  );
};

export default VenuesNearbyCard;
