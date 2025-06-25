import VenuesNearbyCard from "@/components/VenuesNearbyCard/VenuesNearbyCard";
import { useBookmarkGet } from "@/hooks/user.queries";
import React from "react";

const UserFavourites = () => {
  const { data: bookmark } = useBookmarkGet();

  console.log(bookmark);

  return (
    <div className="px-[15px]">
      <h3 className="text-[#2C2C2C] font-outfit text-[24px] xl:text-[36px] font-medium mb-[40px] pl-[50px] xl:pl-[0px]">
        Favorites
      </h3>
      <div className="flex gap-[20px] flex-wrap justify-center">
        {bookmark?.map((venue) => (
          <div className="w-[365px] ">
            <VenuesNearbyCard venue={venue} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFavourites;
