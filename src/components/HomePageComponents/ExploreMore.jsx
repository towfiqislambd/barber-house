import { ExploreMoreSvg } from "../svgContainer/SvgContainer";
import explore from "../../assets/images/blog/blog-details-img-1.png";
import explore2 from "../../assets/images/blog/blog-img-5.png";

const ExploreMore = () => {
  return (
    <section className="pt-8 bg-white relative py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:gap-10 lg:gap-20 gap-10">
          <div className="3xl:space-y-7 space-y-3">
            <h2 className="text-3xl xl:text-[40px] 3xl:text-[60px] 4xl:text-7xl font-bold text-[#1E1E1E] font-outfit">
              For Your Business
            </h2>
            <p className="text-[#2C2C2C] font-medium text-sm xl:text-lg 3xl:text-xl leading-7 xl:leading-[35px]">
              Take your salon or spa to the next level for free with the leading
              booking platform. Chosen by experts, it simplifies appointment
              management. Ranked No. 1 by industry professionals for its top
              features.
            </p>
            <button className="px-6 py-3 rounded-full bg-primary-gradient text-white">
              Explore more
            </button>
            <div className="flex gap-3 items-center text-xl font-semibold">
              <p className="text-[#545454] text-sm xl:text-lg 3xl:text-xl">
                Excellent
              </p>
              <p className="text-[#2C2C2C] text-sm xl:text-lg 3xl:text-xl">
                5/5
              </p>
              <ExploreMoreSvg />
            </div>
          </div>
          <div className="relative">
            <figure className="w-full xl:h-[476.452px] rounded-lg object-cover">
              <img
                src={explore}
                alt="explore"
                className="3xl:w-full w-full lg:h-[300px] xl:h-[404px] 2xl:h-full md:h-[300px] rounded-lg object-cover"
              />
            </figure>
            <figure className="absolute xl:w-[235px] w-[160px] 2xl:h-[148px] h-[194px] rounded 3xl:-left-28 xl:-left-[106px] -left-[0px] 3xl:bottom-0 2xl:bottom-2 xl:bottom-[35px] lg:bottom-[-88px] sm:bottom-[-89px] bottom-[-88px]">
              <img
                src={explore2}
                alt="explore"
                className="3xl:w-full 3xl:h-full rounded-lg object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
