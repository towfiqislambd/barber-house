import HomepageSliderContainer from "./sections/HomepageSliderContainer";
import HomepageReview from "./sections/HomepageReview";
import HomepageStat from "./sections/HomepageStat";
import ExploreMore from "@/components/HomePageComponents/ExploreMore";
import HomepageBanner from "./sections/HomepageBanner";
import { useHomePageData } from "@/hooks/cms.queries";
import {
  useAppointmentCount,
  useStores,
  useUserRecentlyViewStores,
  useUserTrendingStores,
} from "@/hooks/user.queries";
// import useAuth from "@/hooks/useAuth";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const Homepage = () => {
  const { data: appointmentCount, isLoading: appointmentCountLoading } =
    useAppointmentCount();
  const { data: homePageData, isLoading: homepageDataLoading } =
    useHomePageData();
  const { data: stores, isLoading: allStoreLoading } = useStores();
  const { data: trendingStore, isLoading: trendingStoreLoading } =
    useUserTrendingStores();
  const { data: recentlyView } = useUserRecentlyViewStores();
  // const { user } = useAuth();

  const isLoading =
    allStoreLoading ||
    trendingStoreLoading ||
    appointmentCountLoading ||
    homepageDataLoading;

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  const containerItems = [];

  // if (user) {
  //   containerItems.push({
  //     id: 2,
  //     title: "Recently Viewed",
  //     data: recentlyView,
  //   });
  // }

  containerItems.push(
    {
      id: 4,
      title: "New to Cleanse",
      data: stores,
    },
    {
      id: 5,
      title: "Trending",
      data: trendingStore,
    }
  );

  return (
    <>
      <HomepageBanner appointmentCount={appointmentCount} />
      <div className="bg-[#FCFCFC] 2xl:py-32 lg:py-16 py-8">
        {containerItems.map((data, index) => (
          <HomepageSliderContainer
            isLastItem={index + 1 === containerItems.length}
            key={data.id}
            data={data}
          />
        ))}
      </div>
      <HomepageReview data={homePageData?.client_reviews} />
      <HomepageStat data={homePageData?.stats} />
      <ExploreMore data={homePageData?.banner} />
    </>
  );
};

export default Homepage;
