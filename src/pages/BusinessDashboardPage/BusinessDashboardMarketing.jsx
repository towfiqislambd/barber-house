import {
  BusinessReviewStar,
} from "@/components/svgContainer/SvgContainer";
import reviewImg from "../../assets/images/reviews/reviewHumanPic.png";

const BusinessDashboardMarketing = () => {

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
        <p className="text-textLight font-manrope text-base font-medium leading-6 mt-4 mb-10">
          See star ratings and reviews left by clients after their visit
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-7">
        <div className="w-full">
          {/* This is the right section */}
          <div className="space-y-4">
            {reviews.map(review => (
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

export default BusinessDashboardMarketing;
