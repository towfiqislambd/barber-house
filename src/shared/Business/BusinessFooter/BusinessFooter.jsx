import {
  CopyrightSvg,
  FacebookSvg,
  InstagramSvg,
  TiktokSvg,
  TwitterSvg,
  WorldSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const BusinessFooter = () => {
  const socialMediaLinks = [
    { name: "Facebook", icon: FacebookSvg, url: "https://www.facebook.com" },
    { name: "Instagram", icon: InstagramSvg, url: "https://www.instagram.com" },
    { name: "Twitter", icon: TwitterSvg, url: "https://www.twitter.com" },
    { name: "Tiktok", icon: TiktokSvg, url: "https://www.tiktok.com" },
  ];

  return (
    <footer className="bg-[#F4F5F7] pt-10">
      <div className="flex flex-col xl:flex-row gap-[20px] justify-between container">
        {/* This is the left side div */}
        <div className="space-y-3">
          <h1 className="text-textSecondary text-[32px] xl:text-5xl font-Marcellus">
            cleanse
          </h1>
          <p className="text-textColor text-[16px] xl:text-lg font-manrope leading-[27px] xl:max-w-[262px]">
            Your Beauty, Our Priority – Exceptional Service, Every Time
          </p>
        </div>
        {/* This is the Right side div */}
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-4 sm:gap-20 gap-5">
            {/* This is the about div */}
            <div>
              <h1 className="text-textSecondary font-manrope text-xl font-semibold leading-[30px]">
                About Us
              </h1>
              <div className=" xl:mt-6 mt-[10px] flex flex-col gap-3">
                <Link
                  to="/business/businesshelpcenter"
                  className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer"
                >
                  Customer Support
                </Link>
                <Link
                  to={"/business/blog"}
                  className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer"
                >
                  Blog
                </Link>
                <Link
                  to="/business/sitemap"
                  className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer"
                >
                  Sitemap
                </Link>
              </div>
            </div>
            {/* This is the For Business div */}
            <div>
              <h1 className="text-textSecondary font-manrope text-xl font-semibold leading-[30px]">
                For Business
              </h1>
              <div className="xl:mt-6 mt-[10px] flex flex-col gap-3">
                <Link className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer">
                  For Partners
                </Link>
                <Link
                  to="/business/pricingPage"
                  className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer"
                >
                  Pricing
                </Link>
              </div>
            </div>
            {/* This is the Legal div */}
            <div>
              <h1 className="text-textSecondary font-manrope text-xl font-semibold leading-[30px]">
                Legal
              </h1>
              <div className="xl:mt-6 mt-[10px] flex flex-col gap-3">
                <Link className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer">
                  Terms of Service
                </Link>
                <Link className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer">
                  Privacy Policy
                </Link>
                <Link className="text-textColor xl:text-lg leading-[27px] font-manrope cursor-pointer">
                  Terms of Use
                </Link>
              </div>
            </div>
            {/* This is the Contact Us div */}
            <div>
              <h1 className="text-textSecondary font-manrope text-xl font-semibold leading-[30px]">
                Contact Us
              </h1>
              <div className="mt-6 flex flex-row gap-2">
                {socialMediaLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.name}
                      className="rounded-full p-2 md:p-[10px] transition-all duration-300 bg-primary-gradient hover:bg-buttonColor hover:text-primary-gradient ease-in-out"
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is the border */}
      <div className="border border-[#DFE1E6] mt-[34px]"></div>
      {/* This is the social icon */}
      <div className="flex flex-col xl:flex-row gap-[15px] justify-between container py-6">
        <div className="flex items-center">
          <WorldSvg />
          <h1 className="font-manrope font-semibold text-base text-primary">
            English
          </h1>
        </div>
        <div className="flex items-center">
          <CopyrightSvg />
          <p className="font-manrope font-medium text-base text-[#545454]">
            2025 cleanse.com SV Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BusinessFooter;
