import {
  BusinessReviewStar,
  CloseSvg,
  GreatStarSvg,
  ReviewsFilter,
  YellowBorderSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import reviewImg from "../../../assets/images/reviews/reviewHumanPic.png";

const Reveiws = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const ratings = [
    { stars: 5, rating: 1 },
    { stars: 4, rating: 2 },
    { stars: 3, rating: 3 },
    { stars: 2, rating: 4 },
    { stars: 1, rating: 5 },
  ];

  const reviews = [
    {
      id: 1,
      name: "Wendy Smith",
      date: "10 Feb 2025 at 15:32",
      service: "appointment",
      salon: "SHIHAB",
      reviewText:
        "Had a wonderful experience at the salon! The staff was super friendly, and the haircut turned out exactly how I wanted. Will definitely be coming back!",
      img: reviewImg,
      rating: 5,
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Feb 2025 at 10:00",
      service: "haircut",
      salon: "The Style Lab",
      reviewText:
        "Great experience! I loved the service and the staff were very professional. Highly recommend!",
      img: reviewImg,
      rating: 4,
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Feb 2025 at 10:00",
      service: "haircut",
      salon: "The Style Lab",
      reviewText:
        "Great experience! I loved the service and the staff were very professional. Highly recommend!",
      img: reviewImg,
      rating: 4,
    },
  ];

  return (
    <section className="xl:mt-[60px]">
      <div>
        <h1 className="text-[#000] font-outfit text-[28px] font-semibold leading-[33.6px]">
          Reviews
        </h1>
        <p className="text-textLight font-manrope text-base font-medium leading-6 mt-4">
          See star ratings and reviews left by clients after their visit
        </p>
      </div>
      {/*  */}
      <div
        onClick={toggleDropdown}
        className="bg-[#EBECF0] border border-[#DFE1E6] py-3 px-[14px] my-6 rounded-lg"
      >
        <div className="flex gap-2 border border-[#DFE1E6] rounded-[36px] py-[10px] px-5 cursor-pointer max-w-[110px] bg-[#FFF]">
          <button className="text-[#000] font-manrope text-sm font-medium leading-[21px]">
            Filters
          </button>
          <ReviewsFilter />
        </div>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-[671px] top-[320px] mt-2  bg-white border border-gray-300 shadow-lg rounded-2xl py-10 px-8 z-50 w-[476px]">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium text-[#2C2C2C] font-outfit leading-[28.8px]">
                Filters
              </h2>
              <button onClick={toggleDropdown}>
                <CloseSvg />
              </button>
            </div>

            {/* Filter Options */}
            <div className="mt-6">
              <p className="font-medium text-[#2C2C2C] font-manrope text-lg leading-[27px]">
                Sort by
              </p>
              <div className="flex flex-col mt-2 space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    className="filterInput"
                    type="radio"
                    name="sort"
                    value="recommended"
                    defaultChecked
                  />
                  <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]">
                    Recommended
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="filterInput"
                    type="radio"
                    name="sort"
                    value="nearest"
                  />
                  <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]">
                    Nearest
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="filterInput"
                    type="radio"
                    name="sort"
                    value="top-rated"
                  />
                  <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]">
                    Top-rated
                  </span>
                </label>
              </div>
            </div>

            {/* Dropdown Footer */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="border border-borderColor px-6 py-3 rounded-lg text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]"
                onClick={() => setIsOpen(false)}
              >
                Clear all
              </button>
              <button
                className="bg-primary text-white px-8 py-3 rounded-lg font-manrope text-lg font-semibold leading-[27px]"
                onClick={() => setIsOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
      {/*  */}
      <div className="flex flex-col xl:flex-row gap-6">
        {/* This is the left side card */}
        <div className="border border-[#B3BAC5] rounded-2xl 3xl:p-6 xl:p-3 lg:p-10 p-5 xl:w-[35%] h-full">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <BusinessReviewStar key={index} />
            ))}
          </div>
          <p className="mt-3 text-textColor font-outfit text-2xl font-semibold leading-[28.8px] border-b pb-6">
            5.0 Great (1)
          </p>
          {/* This is the review section */}
          <div className="space-y-4">
            {ratings.map((ratingItem, index) => (
              <div
                key={index}
                className="mt-6 flex justify-between xl:items-center gap-3"
              >
                <div className="flex w-[116px]">
                  {[...Array(ratingItem.stars)].map((_, starIndex) => (
                    <GreatStarSvg key={starIndex} />
                  ))}
                </div>
                <YellowBorderSvg />
                <p className="text-textColor font-manrope text-base font-semibold leading-6">
                  {ratingItem.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* This is the right side card */}
        <div className="w-full">
          {/* This is the right section */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-[#B3BAC5] 3xl:p-8 p-4 rounded-2xl"
              >
                <div className="flex gap-[14px] items-center">
                  <figure className="sm:w-[60px] sm:h-[60px]">
                    <img
                      className="w-full h-full object-cover"
                      src={review.img}
                      alt={review.name}
                    />
                  </figure>
                  <div>
                    <p className="text-textColor font-manrope text-base sm:text-xl font-semibold leading-[30px]">
                      {review.name}
                    </p>
                    <p className="text-textColor font-manrope text-sm sm:text-base font-medium leading-6">
                      {review.date} for an{" "}
                      <span className="text-[#055AD9]">{review.service}</span>{" "}
                      at {review.salon}
                    </p>
                  </div>
                </div>
                <div className="flex sm:mt-6 mt-3">
                  {[...Array(review.rating)].map((_, index) => (
                    <BusinessReviewStar key={index} />
                  ))}
                </div>
                <p className="text-textColor font-manrope text-base font-medium leading-6 mt-[6px]">
                  {review.reviewText}
                </p>
              </div>
            ))}
          </div>
          {/* Dynamic Results Count */}
          <p className="text-center mt-6 text-textLight font-manrope text-sm font-semibold leading-6">
            Showing {reviews.length} of {reviews.length} results
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reveiws;
