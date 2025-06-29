import { ContinueButtonArrowSvg } from "@/components/svgContainer/SvgContainer";
import userImg from "../../../assets/images/online-profile/user.png";
import chartImg from "../../../assets/images/online-profile/chart.png";
import clientImg from "../../../assets/images/online-profile/client.png";
import { Link } from "react-router-dom";

const TellUsAboutYourBusiness = () => {
  const steps = [
    {
      id: 1,
      title: "Tell us about your business",
      description:
        "Shire some basic Info, ke your venue name, location and opening hours",
      imgSrc: userImg,
    },
    {
      id: 2,
      title: "Stand out online",
      description:
        "Add images of your location and select some venue highlights to make your profile pop",
      imgSrc: chartImg,
    },
    {
      id: 3,
      title: "Accept online bookings",
      description:
        "With a complete profile you're ready to start taking online bookinge directly and on the Fresha marketplace",
      imgSrc: clientImg,
    },
  ];

  return (
    <section className="max-w-[1320px] mx-auto px-5 lg:px-0 mt-5 md:mt-0">
      {/* This is the button Section */}
      <div className="flex justify-end gap-4">
        <Link
          to={"/businessDashboard/businessContainer"}
          className="bg-[#0D1619] text-[#FFF] text-base px-[18px] py-[10px] rounded-[10px] flex items-center justify-center gap-[6px]"
        >
          Continue
          <ContinueButtonArrowSvg />
        </Link>
      </div>
      {/* This is the content section */}
      <div className="3xl:mt-[90px] 2xl:mt-8 lg:mt-11 mt-5 flex flex-col lg:flex-row items-center 2xl:gap-12 xl:gap-5 lg:gap-10 justify-center">
        {/* This is left side div */}
        <div className="xl:max-w-[486px] lg:max-w-[300px] max-w-[500px]">
          <h1 className="text-[#000] font-outfit text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold xl:leading-[57.6px] lg:leading-[50px]">
            Let’s get you published on the world’s{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              most popular marketplace
            </span>{" "}
            to grow your business
          </h1>
        </div>
        {/* This is right side div */}
        <div className="md:mt-8 mt-4 lg:mt-0">
          {steps.map(step => (
            <div key={step.id} className="flex gap-6 2xl:py-8 py-4 lg:px-2">
              <div>
                <h1 className="text-textColor font-outfit text-xl md:text-2xl font-semibold leading-[28.8px]">
                  {step.id} {step.title}
                </h1>
                <p className="text-[#757575] font-manrope text-base font-medium leading-6 md:mt-4 max-w-[341px] md:ml-4">
                  {step.description}
                </p>
              </div>
              <div>
                <img src={step.imgSrc} alt="Step Image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TellUsAboutYourBusiness;
