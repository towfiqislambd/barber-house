import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { ForCustomerSvg } from "@/components/svgContainer/SvgContainer";
import { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaTimesCircle } from "react-icons/lia";
import useAuth from "@/hooks/useAuth";

const BusinessNavbar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 116);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [salesetting, setSalesetting] = useState(false);
  const saleMobileMenuActive = () => {
    setSalesetting(!salesetting);
  };

  const { user } = useAuth();
  return (
    <section
      className={`py-[14px] border-b shadow-businessNavShadow bg-[#FFF] fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolling ? "bg-white" : "bg-white"
      }`}
    >
      <div className="container flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img
              className="w-[60px] h-[60px] xl:w-[100px] xl:h-[100px] object-cover"
              src={logo}
              alt="Business Logo"
            />
          </Link>
        </div>

        <div>
          <div>
            <button
              onClick={saleMobileMenuActive}
              className="text-[24px] block xl:hidden"
            >
              <HiMiniBars3 />
            </button>
          </div>
          <div
            className={`flex-shrink-0  transition-all fixed xl:static bg-white xl:bg-white left-0 top-0 bottom-0 p-[20px] w-[230px] xl:w-[100%] ${
              salesetting
                ? "translate-x-[0%]"
                : "translate-x-[-100%] xl:translate-x-[0%]"
            }`}
          >
            <div className="block xl:hidden">
              <div className="border-b broder-[1px] border-primary pb-[15px] mb-[20px] flex justify-between items-center">
                <div>
                  <Link to="/business">
                    <img
                      className="w-[30px] object-cover rounded-[5px]"
                      src={logo}
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => saleMobileMenuActive(false)}
                    className="text-[25px] text-primary"
                  >
                    <LiaTimesCircle />
                  </button>
                </div>
              </div>
            </div>

            <nav className={`flex flex-col xl:flex-row gap-8`}>
              <NavLink
                onClick={() => saleMobileMenuActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? "businessNavClass text-primary hover:text-primary"
                    : "businessNavClass hover:text-primary"
                }
                to={"/business/pricingPage"}
              >
                Pricing
              </NavLink>
              <NavLink
                onClick={() => saleMobileMenuActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? "businessNavClass text-primary hover:text-primary"
                    : "businessNavClass hover:text-primary"
                }
                to={"/business/businesshelpcenter"}
              >
                Support for business
              </NavLink>
              <NavLink
                onClick={() => saleMobileMenuActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? "businessNavClass text-primary hover:text-primary"
                    : "businessNavClass hover:text-primary"
                }
                to={"/business/blog"}
              >
                Blog
              </NavLink>
              {user?.role === "business" && (
                <Link
                  className="text-black font-medium hover:text-primary "
                  to={"/businessDashboard"}
                >
                  Business Dashboard
                </Link>
              )}

              {/* <NavLink
                onClick={() => saleMobileMenuActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? "businessNavClass text-primary hover:text-primary"
                    : "businessNavClass hover:text-primary "
                }
                to={"/business/signorlogin"}
              >
                Signup
              </NavLink>
              <NavLink
                onClick={() => saleMobileMenuActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? "businessNavClass text-primary hover:text-primary"
                    : "businessNavClass hover:text-primary"
                }
                to={"/business/login"}
              >
                Login
              </NavLink> */}
              {/* <NavLink
                onClick={() => saleMobileMenuActive(false)}
                className={({ isActive }) =>
                  isActive
                    ? "businessNavClass text-primary hover:text-primary"
                    : "businessNavClass hover:text-primary"
                }
                to={"/business/contactus"}
              >
                Contact Us
              </NavLink> */}
              <div className="group flex gap-1 cursor-pointer items-center hover:text-primary">
                <NavLink
                  onClick={() => saleMobileMenuActive(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "businessNavClass"
                      : "businessNavClass hover:text-primary"
                  }
                  to="/"
                >
                  For Customer
                </NavLink>
                <ForCustomerSvg />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessNavbar;
