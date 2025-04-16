import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { FeaturedStarSvg, LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import professionalImage from "../../../assets/images/chooseProfessionalImg/professionalImg.png";
import { Link } from "react-router-dom";
import ellipseImg from "../../../assets/images/chooseProfessionalImg/ellipse.png";
import humanPic1 from "../../../assets/images/chooseProfessionalImg/human1.png";
import humanPic2 from "../../../assets/images/chooseProfessionalImg/human2.png";
import humanPic3 from "../../../assets/images/chooseProfessionalImg/human3.png";
import humanPic4 from "../../../assets/images/chooseProfessionalImg/human4.png";
import salonImg from "../../../assets/images/Featuresd-card/featureCard.png"
import { useState } from "react";

const ChooseProfessionalTimePage = () => {
  const [activeProfessional, setactiveProfessional] = useState();
  const therapists = [
    {
      id: 1,
      name: "Any professional",
      role: "Expert Care for Your Perfect Look",
      image: professionalImage,
    },
    {
      id: 2,
      name: "Muhammed Jamil",
      role: "Therapist",
      image: humanPic1,
    },
    {
      id: 3,
      name: "Sarah Ahmed",
      role: "Psychologist",
      image: humanPic2,
    },
    {
      id: 4,
      name: "John Doe",
      role: "Counselor",
      image: humanPic3,
    },
    {
      id: 5,
      name: "John Doe",
      role: "Counselor",
      image: humanPic4,
    },
  ];

  return (
    <section className="pb-10 xl:pb-20 pt-28 2xl:py-36 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container">
        {/* This is the button section */}
        <div className="flex gap-4 items-center">
          <Link to={"/booknow"}>
            <button className="flex border border-[#757575] rounded-[100px] text-[#2C2C2C] lg:text-base font-manrope font-medium gap-1 text-sm lg:gap-[6px] items-center leading-6 px-2 lg:px-3 py-1 lg:py-2">
              <LeftSideArrowSvg />
              Back
            </button>
          </Link>
          <BreadCrumb
            items={[
              { label: "Services", href: "/" },
              { label: "Professional", href: "/docs/components" },
              { label: "Time" },
              { label: "Confirm" },
            ]}
          />
        </div>
        {/* Div */}
        <div className="mt-5 xl:mt-10">
          <h1 className="text-[#2C2C2C] text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-medium font-outfit">
            Select Professional for Wax Services
          </h1>

          {/* This is the flex section */}
          <div className="flex flex-col lg:flex-row justify-between gap-[21px] mt-5 xl:mt-8">
            {/* This is the left side div */}
            <div className="flex-grow">
              {/* This is the card section */}
              <div className="grid 2xl:grid-cols-2 gap-5 max-w-[1006px] mt-5">
                {therapists?.map((therapist) => (
                  <div
                    onClick={() => {
                      setactiveProfessional(therapist);
                    }}
                    key={therapist.id}
                    className="w-full"
                  >
                    <div className="relative">
                      <div
                        className={`${activeProfessional?.id === therapist.id
                          ? " border-[#01BAC2] bg-[#F8FFFF] "
                          : "bg-[#FFF] border-[#B0ECEF] "
                          } cursor-pointer min-h-[139px] py-3 xl:py-5 px-5 xl:px-8 border-[0.4px] ease-in-out duration-300 rounded-[12px] space-y-2`}
                      >
                        <img src={therapist.image} alt={therapist.name} />
                        <h1 className="text-[#2C2C2C] text-xl font-manrope font-semibold">
                          {therapist.name}
                        </h1>
                        <p className="text-base text-textLight font-manrope font-medium">
                          {therapist.role}
                        </p>
                      </div>
                      <img
                        className="absolute bottom-0 right-0"
                        src={ellipseImg}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* This is the right side div */}
            <div className="self-start w-full border-[#B0ECEF] border-[0.4px] border-solid h-auto rounded-2xl xl:w-[400px] px-[19px] py-6">
              <div className="flex gap-2">
                <figure className="h-[91px] w-[91px]">
                  <img
                    className="h-full w-full object-cover"
                    src={salonImg}
                    alt=""
                  />
                </figure>
                <div>
                  <p className="text-[#000] text-xl font-manrope font-semibold">
                    Trendy Trim
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#000] text-sm font-medium">4.5</p>
                    <FeaturedStarSvg />
                    <p className="text-[#000] text-sm font-medium">(343)</p>
                  </div>
                  <p className="text-[#8C8C8C] text-sm font-medium">
                    Mirpur, Dhaka
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between mt-12">
                <p className="text-[#000] text-base font-medium">
                  Regular Haircut
                </p>
                <p className="text-[#000] text-base font-medium">
                  from BDT 200
                </p>
              </div>
              {/*  */}
              <div className="flex justify-between">
                <p className="text-[#8C8C8C]">30 mins with {activeProfessional?.name ? activeProfessional.name : "John"} </p>
                <p className="text-[#8C8C8C] text-sm mt-[6px]">from BDT 250</p>
              </div>
              {/*  */}
              <div className="bg-[#000] h-[2px] my-[36px]"></div>
              {/*  */}
              <div className="flex flex-col gap-y-[6px]">
                <div className="flex justify-between">
                  <p className="text-[#8C8C8C]">Subtotal</p>
                  <p className="text-[#8C8C8C] text-sm mt-[6px]">BDT 250</p>
                </div>
                {/*  */}
                <div className="flex justify-between">
                  <p className="text-[#8C8C8C] text-sm">Discounts</p>
                  <p className="text-[#8C8C8C] text-sm line-through mt-[6px]">- BDT 50</p>
                </div>
              </div>
              {/* This is the button section */}
              <div className="flex bg-[#1E1E1E] bg-gradient-to-r justify-center rounded-[40px] lg:mt-40 mt-10 px-6 py-[14px]">
                <Link
                  to={"/professional-time-page"}
                  className="text-[#FFF] text-lg font-manrope font-semibold"
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ChooseProfessionalTimePage;
