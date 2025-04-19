import { useState } from "react";
import Select from "react-select";
import Star from "../../assets/images/star.svg";

export default function Review() {
  const [selectreview, setSelectReview] = useState("Latest");

  const options = [
    { value: "Latest", label: "Latest" },
    { value: "Best", label: "Best" },
  ];

  const ratings = [
    { stars: 5, count: 199 },
    { stars: 4, count: 92 },
    { stars: 3, count: 46 },
    { stars: 2, count: 21 },
    { stars: 1, count: 31 },
  ];
  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      sortName: "JS",
      date: "February 11, 2025",
      time: "14:16",
      star: 5,
      review:
        "Overall very good, they were professional, knowledgeable, and truly went above and beyond to help me with my case.",
    },

    {
      id: 2,
      name: "John Smith",
      sortName: "SS",
      date: "February 11, 2025",
      time: "14:16",
      star: 4,
      review:
        "Overall very good, they were professional, knowledgeable, and truly went above and beyond to help me with my case.",
    },

    {
      id: 3,
      name: "John Smith",
      sortName: "JS",
      date: "February 11, 2025",
      time: "14:16",
      star: 3,
      review:
        "Overall very good, they were professional, knowledgeable, and truly went above and beyond to help me with my case.",
    },

    {
      id: 4,
      name: "John Smith",
      sortName: "SS",
      date: "February 11, 2025",
      time: "14:16",
      star: 5,
      review:
        "Overall very good, they were professional, knowledgeable, and truly went above and beyond to help me with my case.",
    },

    {
      id: 4,
      name: "John Smith",
      sortName: "JS",
      date: "February 11, 2025",
      time: "14:16",
      star: 5,
      review:
        "Overall very good, they were professional, knowledgeable, and truly went above and beyond to help me with my case.",
    },

    {
      id: 6,
      name: "John Smith",
      sortName: "SS",
      date: "February 11, 2025",
      time: "14:16",
      star: 5,
      review:
        "Overall very good, they were professional, knowledgeable, and truly went above and beyond to help me with my case.",
    },
  ];

  return (
    <section className="pt-[200px] pb-[100px]">
      <div className="container">
        <h3 className="mb-[20px] text-[#2C2C2C] font-outfit text-[36px] font-medium">
          Review
        </h3>
        <div className="flex gap-[56px]">
          <div className="w-[917px] h-auto flex-shrink-0">
            <div className="flex justify-between items-center border-b border-[#A5ADBA] mb-[32px] pb-[32px]">
              <div className="">
                <h4 className="text-[#2C2C2C] font-manrope text-[20px] font-medium leading-[30px]">
                  325 reviews
                </h4>
              </div>
              <div className="flex gap-[20px] items-center">
                <div>
                  <p className="text-[#2C2C2C] font-manrope text-[18px] font-medium leading-[27px]">
                    Sort by
                  </p>
                </div>
                <div>
                  <Select
                    options={options}
                    onChange={setSelectReview}
                    defaultValue={options[0]}
                  />
                </div>
              </div>
            </div>
            <div className="w-[568px]">
              <div className="flex flex-col gap-[64px] ">
                {reviews.map((review, index) => (
                  <div className="flex flex-col gap-[12px]" key={review.id}>
                    <div className="flex gap-[12px]">
                      <div
                        className={`w-[64px] h-[64px] rounded-[100%] flex justify-center items-center ${
                          index % 2 == 0 ? "bg-[#B0ECEF]" : "bg-[#F4E7FF]"
                        }`}
                      >
                        <h2
                          className={`font-outfit font-semibold leading-[33px] ${
                            index % 2 == 0 ? "text-[#008A90]" : "text-[#5E22DD]"
                          }`}
                        >
                          JS
                        </h2>
                      </div>

                      <div>
                        <p className="mb-[4px] text-[#2C2C2C] font-manrope font-semibold leading-[30px]">
                          {review.name}
                        </p>
                        <p className="text-[#606060] font-manrope font-medium leading-[24px]">
                          {review.date} at {review.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex gap-[5px]">
                        {Array(5)
                          .fill()
                          .map((_, index) => (
                            <img
                              key={index}
                              src={Star}
                              alt="star"
                              style={{
                                color: index < review.star ? "gold" : "#d3d3d3",
                                filter:
                                  index < review.star
                                    ? "none"
                                    : "brightness(0) saturate(100%)",
                              }}
                            />
                          ))}
                        {/*                                                   
                                                    <img src={Star} alt="" />
                                                    <img src={Star} alt="" />
                                                    <img src={Star} alt="" />
                                                    <img src={Star} alt="" /> */}
                      </div>
                      <div className="">
                        <p className="text-[#545454] font-manrope text-[18px] leading-[27px] font-medium">
                          {review.review}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[500px] border-primary border rounded-[16px] py-[69px] px-[66px] w-full">
            <div className="flex gap-[5px] mb-[15px]">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span key={index} className="text-yellow-500 text-[25px]">
                    ★
                  </span>
                ))}
            </div>
            <div className="flex gap-[20px]">
              <p className="font-manrope font-medium leading-[27px] text-[18px] text-sm text-[#2C2C2C]">
                5/5 • {totalReviews} reviews
              </p>
            </div>
            <div className="pt-[20px]">
              <p className="text-[#2C2C2C] font-manrope text-[20px] font-semibold leading-[30px]">
                Filter by
              </p>
            </div>
            <div>
              <div className="p-4 max-w-xs bg-white rounded-lg">
                <p className="mt-4 text-gray-800 font-semibold">Filter by</p>
                <ul className="space-y-2 mt-2">
                  {ratings.map((rating) => {
                    const percentage = (rating.count / totalReviews) * 100;
                    return (
                      <li
                        key={rating.stars}
                        className="flex items-center space-x-2"
                      >
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-gray-800">{rating.stars}</span>
                        <div className="flex-1 h-2 bg-gray-300 rounded-full mx-2 relative">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-600 text-sm">
                          {rating.count}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
