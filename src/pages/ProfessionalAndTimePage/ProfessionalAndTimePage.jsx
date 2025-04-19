import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  FeaturedStarSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import professionalImage from "../../assets/images/chooseProfessionalImg/professionalImg.png";
import { Link } from "react-router-dom";
import ellipseImg from "../../assets/images/chooseProfessionalImg/ellipse.png";

import humanPic1 from "../../assets/images/chooseProfessionalImg/human1.png";
import humanPic2 from "../../assets/images/chooseProfessionalImg/human2.png";
import humanPic3 from "../../assets/images/chooseProfessionalImg/human3.png";
import humanPic4 from "../../assets/images/chooseProfessionalImg/human4.png";
import salonImg from "../../assets/images/Featuresd-card/featureCard.png";
import { useState } from "react";
import addMember from "../../assets/images/chooseProfessionalImg/Frame 1707484273.png";
import { UserIcon } from "lucide-react";
import { DropDownSvg } from "@/components/SvgContainerTwo/SvgContainerTwo";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ProfessionalAndTimePage = () => {
  const [activeProfessional, setactiveProfessional] = useState();
  const [isMultiple, setisMultiple] = useState();
  const [open, setopen] = useState();
  const therapists = [
    {
      id: 1,
      name: "Any professional",
      role: "Expert Care for Your Perfect Look",
      image: professionalImage,
    },
    {
      id: 2,
      name: "Professional per service ",
      role: "Expert Care for Your Perfect Look",
      image: addMember,
    },
    {
      id: 3,
      name: "Muhammed Jamil",
      role: "Therapist",
      image: humanPic1,
    },
    {
      id: 4,
      name: "Sarah Ahmed",
      role: "Psychologist",
      image: humanPic2,
    },
    {
      id: 5,
      name: "John Doe",
      role: "Counselor",
      image: humanPic3,
    },
    {
      id: 6,
      name: "John Doe",
      role: "Counselor",
      image: humanPic4,
    },
  ];

  return (
    <>
      <section className="pb-10 xl:pb-20 pt-28 2xl:py-36 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
        <div className="container">
          {/* This is the button section */}
          {!isMultiple && (
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
          )}
          {/* Div */}
          <div className="mt-5 xl:mt-10">
            {!isMultiple && (
              <h1 className="text-[#2C2C2C] text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-medium font-outfit">
                Select Professional for Wax Services
              </h1>
            )}

            {/* This is the flex section */}
            <div className="flex flex-col lg:flex-row justify-between gap-[21px] mt-5 xl:mt-8">
              {/* This is the left side div */}
              {isMultiple ? (
                <div className="flex flex-col gap-y-10   ">
                  <h1 className="text-[#2C2C2C] text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-medium font-outfit">
                    Select Professional
                  </h1>
                  <div className="flex flex-col gap-y-5 ">
                    {[1, 2].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row w-[925px] h-auto p-[28px] border-[1px] border-solid border-borderColorLight rounded-[16px]  justify-between items-center  "
                        >
                          <div className="flex flex-col gap-y-4 ">
                            <div className="flex flex-col gap-y-[6px]">
                              <h5 className="text-[#2C2C2C] text-2xl  font-medium font-outfit">
                                Wax Services 2
                              </h5>
                              <span className="text-[#545454] text-basee  font-medium font-outfit">
                                5 - 10 mins
                              </span>
                              <h2 className="text-primary text-2xl  font-medium font-outfit">
                                {" "}
                                SAR 10{" "}
                              </h2>
                            </div>
                            <span className="text-[#000] text-base font-medium font-outfit">
                              Price and duration may vary depending on
                              individual requirements
                            </span>
                          </div>
                          <div className="border-[1px] border-solid border-borderColorLight p-3  h-[54px] w-[244px] rounded-[40px]  flex flex-row gap-x-[10px]  items-center   ">
                            <div className="bg-[#85DDB1] w-[32px] h-[32px] rounded-full flex flex-row items-center justify-center   ">
                              <UserIcon />
                            </div>
                            <h4>Any Professional</h4>
                            <div
                              onClick={() => {
                                setopen(true);
                              }}
                              className="cursor-pointer"
                            >
                              <DropDownSvg />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex-grow">
                  {/* This is the card section */}
                  <div className="grid 2xl:grid-cols-2 gap-5 max-w-[1006px] mt-5">
                    {therapists?.map(therapist => (
                      <div
                        onClick={() => {
                          if (therapist.id === 2) {
                            setisMultiple(true);
                            setactiveProfessional();
                          } else {
                            setactiveProfessional(therapist);
                          }
                        }}
                        key={therapist.id}
                        className="w-full"
                      >
                        <div className="relative">
                          <div
                            className={`${
                              activeProfessional?.id === therapist.id
                                ? " border-borderColorLight bg-[#F8FFFF] "
                                : "bg-[#FFF] border-borderColorLight "
                            } cursor-pointer min-h-[139px] py-3 xl:py-5 px-5 xl:px-8 border-[0.4px] ease-in-out duration-300 rounded-[12px] space-y-2`}
                          >
                            <img src={therapist.image} alt={therapist.name} />
                            <h1 className="text-primary text-xl font-manrope font-semibold">
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
              )}
              {/* This is the right side div */}
              <div className="self-start w-full border-borderColorLight border-[0.4px] border-solid h-auto rounded-2xl xl:w-[400px] px-[19px] py-6">
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
                  <p className="text-[#8C8C8C]">
                    30 mins with{" "}
                    {activeProfessional?.name
                      ? activeProfessional.name
                      : "John"}{" "}
                  </p>
                  <p className="text-[#8C8C8C] text-sm mt-[6px]">
                    from BDT 250
                  </p>
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
                    <p className="text-[#8C8C8C] text-sm line-through mt-[6px]">
                      - BDT 50
                    </p>
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
      <Dialog open={open} onOpenChange={setopen}>
        <DialogContent className=" max-w-[1070px] rounded-[16px] text-[#1E1E1E] leading-[150%] font-medium text-base ">
          <div className="grid 2xl:grid-cols-2 gap-5 max-w-[1006px] mt-5">
            {therapists?.map(therapist => {
              if (therapist.id === 2) return;
              return (
                <div
                  onClick={() => {
                    setactiveProfessional(therapist);
                  }}
                  key={therapist.id}
                  className="w-full"
                >
                  <div className="relative">
                    <div
                      className={`${
                        activeProfessional?.id === therapist.id
                          ? " border-borderColorLight bg-[#F8FFFF] "
                          : "bg-[#FFF] border-borderColorLight "
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
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfessionalAndTimePage;
