import { Rating } from "@smastrom/react-rating";
import humanPic from "../../../assets/images/humanPic.png";
import { useState } from "react";
import "@smastrom/react-rating/style.css";

const BusinessReviewCard = () => {
  const [rating, setRating] = useState(3);
  return (
    <div>
      {/*  */}
      <div className="flex flex-col xl:flex-row items-center gap-5 mt-4">
        <img src={humanPic} alt="" />
        <p className="text-[#545454] font-manrope xl:text-lg leading-[27px]">
          "By far the best experience I’ve had with a salon booking system in 20
          years! It’s super user friendly and intuitive - their no-show and
          cancellation policy and text reminders have ensured we have not had
          one no-show since we opened a year and a half ago!"
        </p>
      </div>
      <div className="mt-[35px]">
        <Rating
          className="w-6 h-6"
          style={{ maxWidth: 136 }}
          value={rating}
          onChange={setRating}
        />
        <p className="text-[#2C2C2C] font-outfit text-[20px] xl:text-2xl font-semibold leading-[28.8px]">
          Ursula, Bond Salon
        </p>
        <p className="text-[#545454] font-manrope text-base leading-6">
          Washington, California
        </p>
      </div>
    </div>
  );
};

export default BusinessReviewCard;
