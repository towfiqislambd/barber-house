import logo from "../assets/images/businessLogo.png"
import {
  FooterCopyrightSvg,
  FooterLangSvg,
  FooterSocialFour,
  FooterSocialOne,
  FooterSocialThree,
  FooterSocialTwo,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      {/* upper part */}
      <div className="bg-[#EFF0F4] py-7 sm:py-14 px-5 xl:px-3 2xl:px-5">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8 md:gap-[35px] lg:gap-6 xl:gap-2 2xl:gap-5">
          <div className="col-span-1 xl:col-span-2">
            <img src={logo} alt="" className="mb-5 block" />
            <p className="max-w-[262px] text-[#2C2C2C]">
              Your Beauty, Our Priority – Exceptional Service, Every Time
            </p>
          </div>
          <div className="">
            <h3 className="xl:mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              About Us
            </h3>
            <ul className="text-[#2C2C2C] space-y-1 xl:space-y-3 flex flex-col">
              <Link to={"/business/businesshelpcenter"}>Customer Support</Link>
              <Link to={"/business/blog"}>Blog</Link>
              <Link to={"/business/sitemap"}>Sitemap</Link>
            </ul>
          </div>
          <div className="">
            <h3 className="xl:mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              For Business
            </h3>
            <ul className="text-[#2C2C2C] space-y-1 xl:space-y-3 flex flex-col">
              <Link to={"/business"}>For Partners</Link>
              <Link to={"/business/pricingPage"}>Pricing</Link>
            </ul>
          </div>
          <div className="">
            <h3 className="xl:mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              Legal
            </h3>
            <ul className="text-[#2C2C2C] space-y-1 xl:space-y-3">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              Contact Us
            </h3>
            <div className="flex gap-1 2xl:gap-3 items-center">
              <button className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-r from-[#008A90] from-[0.38%] to-[#00C2CB] to-[99.24%]">
                <FooterSocialOne />
              </button>
              <button className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-r from-[#008A90] from-[0.38%] to-[#00C2CB] to-[99.24%]">
                <FooterSocialTwo />
              </button>
              <button className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-r from-[#008A90] from-[0.38%] to-[#00C2CB] to-[99.24%]">
                <FooterSocialThree />
              </button>
              <button className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-r from-[#008A90] from-[0.38%] to-[#00C2CB] to-[99.24%]">
                <FooterSocialFour />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* lower part */}
      <div className="bg-white py-5 flex items-center justify-between container px-5 4xl:px-0">
        <p className="flex gap-1 items-center">
          <FooterLangSvg />
          <span className="text-[#00848A] font-medium">English</span>
        </p>
        <p className="flex gap-1 items-center">
          <FooterCopyrightSvg />
          <span className="text-[#545454] font-medium">
            2025 cleanse.com SV Ltd.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
