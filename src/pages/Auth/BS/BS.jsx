import {
  LeftSideArrowSvg,
  SelectAccountSvg,
  SupportSvg,
} from "@/components/svgContainer/SvgContainer";
import loginImg from "../../../assets/images/loginImage.png";
import { Link, useNavigate } from "react-router-dom";

const BS = () => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <section className="pb-10">
      <div className="container">
        <div className="flex gap-20 justify-center items-center mt-20 2xl:mt-0">
          {/* Left */}
          <div className="mt-3 2xl:block hidden">
            <button onClick={handlePrev}>
              <LeftSideArrowSvg />
            </button>
            <img
              className="mt-3 w-full xl:w-[750px] h-[200px] xl:h-[800px] rounded-[32px] object-cover"
              src={loginImg}
              alt=""
            />
          </div>
          {/* Right */}
          <div className="xl:w-[40%]">
            <h1 className="text-textSecondary font-outfit  text-[32px] xl:text-[40px] font-semibold leading-[52.8px] text-center max-w-[570px] ml-[13px]">
              Sign up
            </h1>
            <p className="text-[#8993A4] font-outfit text-lg leading-[29.52px] mt-2 text-center">
              How you want to join BS
            </p>
            <div className="mt-[60px] space-y-6 ">
              <Link
                to={"/registration/customer"}
                className="border border-[#797979] px-8 py-7 flex items-center justify-between rounded-[10px] group hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer"
              >
                <div>
                  <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                    BS for customers
                  </h1>
                  <p className="text-textLight font-outfit text-base leading-[26.24px]">
                    Book salons and spa near your address
                  </p>
                </div>
                <SelectAccountSvg />
              </Link>
              <Link
                to={"/registration/business"}
                className="border border-[#797979] px-8 py-7 flex items-center justify-between rounded-[10px] group hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer"
              >
                <div>
                  <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                    BS for salon or spamanagemnets
                  </h1>
                  <p className="text-textLight font-outfit text-base leading-[26.24px]">
                    Manage and grow your business
                  </p>
                </div>
                <SelectAccountSvg />
              </Link>
            </div>

            <div className="pt-[30px] mb-[30px] xl:pt-[300px] flex justify-center gap-1 items-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BS;
