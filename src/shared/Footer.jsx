import {
  FooterCopyrightSvg,
  FooterSocialFour,
  FooterSocialOne,
  FooterSocialThree,
  InstagramSvg,
} from "@/components/svgContainer/SvgContainer";
import { FaLinkedinIn } from "react-icons/fa";
import {
  useDynamicPages,
  useSiteSettings,
  useSocialLinks,
} from "@/hooks/cms.queries";
import { Link } from "react-router-dom";
import SupportModal from "@/components/BusinessDashboard/Modals/SupportModal";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const { data: socialLinks } = useSocialLinks();
  const { data: siteSettings } = useSiteSettings();
  const { data: dynamicPages } = useDynamicPages();

  return (
    <footer>
      {/* upper part */}
      <div className="bg-[#EFF0F4] py-7 sm:py-14 xl:px-3 2xl:px-5">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-[35px] lg:gap-6 xl:gap-2 2xl:gap-5">
          <div className="col-span-1 xl:col-span-2">
            <h3 className="text-[48px] font-normal font-Marcellus text-[#1E1E1E] ">
              cleanse
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: siteSettings?.description || "",
              }}
              className="max-w-[262px] text-[#2C2C2C]"
            ></p>
          </div>
          <div className="">
            <h3 className="xl:mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              About Us
            </h3>
            <ul className="text-[#2C2C2C] space-y-1 xl:space-y-3 flex flex-col">
              {/* <Link to={"/business/businesshelpcenter"}>Customer Support</Link> */}

              <button onClick={() => setOpen(true)} className="text-left">
                Support
              </button>
              <Link to={"/business/blog"}>Blog</Link>
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
          <div></div>
          <div className="">
            <h3 className="xl:mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              Legal
            </h3>
            <ul className="text-[#2C2C2C] space-y-1 xl:space-y-3">
              {dynamicPages?.map(item => (
                <li key={item?.id}>
                  <Link to={`/dynamic-page/${item?.page_slug}`}>
                    {item?.page_title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 2xl:mb-5 text-[#1E1E1E] text-xl 2xl:text-2xl font-semibold font-manrope">
              Contact Us
            </h3>
            <div className="flex gap-1 2xl:gap-3 items-center">
              {socialLinks?.map((item, idx) => (
                <a
                  key={idx}
                  target="_blank"
                  href={item?.profile_link}
                  className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0 bg-primary-gradient "
                >
                  {item?.social_media === "facebook" && <FooterSocialOne />}
                  {item?.social_media === "twitter" && <FooterSocialThree />}
                  {item?.social_media === "instagram" && <InstagramSvg />}
                  {item?.social_media === "linkedin" && (
                    <FaLinkedinIn className="text-xl text-white" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* lower part */}
      <div className="bg-white py-5 flex items-center text-center justify-center container px-5 4xl:px-0">
        <span className="text-[#545454] font-medium">
          {siteSettings?.copyright_text}
        </span>
      </div>

      <SupportModal isOpen={open} setIsOpen={setOpen} />
    </footer>
  );
};

export default Footer;
