import { recentlyViewedData } from "@/data/data";
import HomepageSliderContainer from "./sections/HomepageSliderContainer";
import HomepageReview from "./sections/HomepageReview";
import HomepageStat from "./sections/HomepageStat";
import ExploreMore from "@/components/HomePageComponents/ExploreMore";
import HomepageBanner from "./sections/HomepageBanner";
import { useHomePageData } from "@/hooks/cms.queries";

const Homepage = () => {
  const { data: homePageData } = useHomePageData();
  console.log(homePageData)

  const containerItems = [
    {
      title: "Appointments",
      data: recentlyViewedData,
    },
    {
      title: "Recently Viewed",
      data: recentlyViewedData,
    },
    {
      title: "Recommended for You",
      data: recentlyViewedData,
    },
    {
      title: "New to Cleanse",
      data: recentlyViewedData,
    },
    {
      title: "Trending",
      data: recentlyViewedData,
    },
  ];
  return (
    <>
      <HomepageBanner />
      <div className="bg-[#FCFCFC] 2xl:py-32 lg:py-16 py-8">
        {containerItems?.map((data, index) => (
          <HomepageSliderContainer
            isLastItem={index + 1 == containerItems?.length}
            key={data?.title}
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
