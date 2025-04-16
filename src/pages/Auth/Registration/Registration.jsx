import loginImg from "../../../assets/images/loginImage.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import icon from "../../../assets/images/icon.png";
import image2 from "../../../assets/images/image2.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Registration = () => {
  const [userAvatar, setUserAvatar] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserAvatar(imageUrl);
    }
  };

  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] xl:gap-[132px] mb-[50px] items-start h-[100vh] overflow-hidden">
      {/* This is the left side div */}
      <div className="mt-3 xl:h-[100vh] xl:sticky xl:top-0 flex-shrink-0">
        <Link className="w-full block" to={"/business/signorlogin"}>
          <LeftSideArrowSvg />
        </Link>
        <div className="hidden xl:block">
          <img
            className="mt-3 w-[100%]  h-[200px] xl:w-[750px] xl:h-[850px] rounded-[32px] object-cover"
            src={loginImg}
            alt=""
          />
        </div>
      </div>

      {/* This is the right side div */}
      <div className="lg:py-[62px] overflow-y-auto h-[100vh] hide-scrollbar">
        <h1 className="text-textSecondary font-outfit text-[32px] xl:text-[40px] font-semibold leading-[52.8px] text-center">
          Sign up
        </h1>
        <p className="text-[#8993A4] font-outfit text-lg leading-[29.52px] text-center max-w-[578px] mt-2">
          We imported your data from Google but any changes you make here will
          be limited to your Fresha profile. Please make sure your name is
          correct as this will be seen by clients.
        </p>
        {/* This is the Image Section */}
        <div className="w-full flex justify-center items-center mt-6">
          <label htmlFor="avatar" className="relative cursor-pointer">
            <input
              id="avatar"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <img
              src={userAvatar || image2}
              alt="upload preview"
              className="rounded-full lg:w-40 lg:h-40 w-32 h-32 object-cover"
            />
            <div className="absolute bottom-0 right-4 bg-[white] rounded-[20px] p-[7px] border border-[#DFE1E6]">
              <img src={icon} alt="upload icon" className="w-5 h-5 block" />
            </div>
          </label>
        </div>
        <div className="space-y-[14px]">
          {/* First Name Div */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base leading-[26.24px]">
              First Name
            </label>
            <Input
              className="text-[#BCBCBC] font-outfit text-base leading-[26.24px]"
              type="text"
              placeholder="Input your first name"
            />
          </div>
          {/* Last Name Div */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base leading-[26.24px]">
              Last Name
            </label>
            <Input
              className="text-[#BCBCBC] font-outfit text-base leading-[26.24px]"
              type="text"
              placeholder="Input your last name"
            />
          </div>
          {/* Email address Div */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base leading-[26.24px]">
              Email address
            </label>
            <Input
              className="text-[#BCBCBC] font-outfit text-base leading-[26.24px]"
              type="email"
              placeholder="Input your address"
            />
          </div>
          {/* Mobile Number Div */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base leading-[26.24px]">
              Mobile Number
            </label>
            <Input
              className="text-[#BCBCBC] font-outfit text-base leading-[26.24px]"
              type="number"
              placeholder="Mobile Number"
            />
          </div>
          {/* Country Div */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base leading-[26.24px]">
              Country
            </label>
            <Input
              className="text-[#BCBCBC] font-outfit text-base leading-[26.24px]"
              type="text"
              placeholder="Input your first name"
            />
          </div>
          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <h1 className="text-textSecondary font-outfit leading-[22.96px]">
                I agree to the{" "}
                <span className="text-[#008A90] font-outfit leading-[22.96px]">
                  Privacy Policy, Terms of Service
                </span>{" "}
                and
                <span className="text-[#008A90] font-outfit leading-[22.96px]">
                  Terms of Business.
                </span>
              </h1>
            </label>
          </div>
        </div>
        {/* Button */}
        <Link to='/business/stepContainer'>
          <Button
            className="h-[58px] font-manrope text-xl font-semibold block w-full rounded-2xl mt-5"
            variant="secondary"
          >
            Continue
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Registration;
