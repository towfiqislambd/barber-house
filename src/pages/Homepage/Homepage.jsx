import { recentlyViewedData } from "@/data/data";
import HomepageSliderContainer from "./sections/HomepageSliderContainer";
import HomepageReview from "./sections/HomepageReview";
import HomepageStat from "./sections/HomepageStat";
import ExploreMore from "@/components/HomePageComponents/ExploreMore";
import HomepageBanner from "./sections/HomepageBanner";
import { useHomePageData } from "@/hooks/cms.queries";
import { useStores } from "@/hooks/user.queries";

const Homepage = () => {
  const { data: homePageData } = useHomePageData();
  const { data: stores, isLoading } = useStores();

  const containerItems = [
    {
      id: 1,
      title: "Appointments",
      data: stores,
    },
    {
      id: 2,
      title: "Recently Viewed",
      data: stores,
    },
    {
      id: 3,
      title: "Recommended for You",
      data: stores,
    },
    {
      id: 4,
      title: "New to Cleanse",
      data: stores,
    },
    {
      id: 5,
      title: "Trending",
      data: stores,
    },
  ];
  return (
    <>
      <HomepageBanner />
      <div className="bg-[#FCFCFC] 2xl:py-32 lg:py-16 py-8">
        {containerItems?.map((data, index) => (
          <HomepageSliderContainer
            isLastItem={index + 1 == containerItems?.length}
            key={data?.id}
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
