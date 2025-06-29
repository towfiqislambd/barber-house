import { BusinessReviewStar } from "@/components/svgContainer/SvgContainer";
import { Loader } from "@/components/Loader/Loader";
import useAuth from "@/hooks/useAuth";
import { useGetReviews } from "@/hooks/cms.queries";

const BusinessDashboardMarketing = () => {
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { data: reviewsData, isLoading } = useGetReviews(online_store_id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <section>
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
            {reviewsData ? (
              reviewsData?.map(review => (
                <div
                  key={review.id}
                  className="border border-[#B3BAC5] 3xl:p-8 p-4 rounded-2xl"
                >
                  <div className="flex gap-[14px] items-center">
                    <figure className="sm:w-[60px] sm:h-[60px] border rounded-full">
                      <img
                        className="w-full h-full object-cover"
                        src={`${import.meta.env.VITE_SITE_URL}/${
                          review?.user?.avatar
                        }`}
                        alt="avatar"
                      />
                    </figure>
                    <div>
                      <p className="text-textColor font-manrope text-base sm:text-xl font-semibold leading-[30px]">
                        {review?.user?.first_name} {review?.user?.last_name}
                      </p>
                      <p className="text-textColor font-manrope text-sm sm:text-base font-medium leading-6">
                        Services:{" "}
                        {review?.appointment?.appointment_services?.map(
                          item => (
                            <span>{item?.catalog_service?.name}, </span>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:mt-6 mt-3">
                    {[...Array(review?.rating)].map((_, index) => (
                      <BusinessReviewStar key={index} />
                    ))}
                  </div>
                  <p className="text-textColor font-manrope text-base font-medium leading-6 mt-[6px]">
                    {review?.review}
                  </p>
                </div>
              ))
            ) : (
              <p className="font-medium text-red-500 text-xl">
                No review found yet!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardMarketing;
