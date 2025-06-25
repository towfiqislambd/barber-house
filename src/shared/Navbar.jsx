import logo from "../assets/images/logo.jpg";
import { RxCross2 } from "react-icons/rx";
import {
  DownArrowSvg,
  DownArrowSvgTwo,
  HeaderSVGFour,
  HeaderSVGOne,
  HeaderSVGSix,
  HeaderSVGTwo,
} from "@/components/svgContainer/SvgContainer";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLogOut } from "@/hooks/auth.hook.";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [gender, setGender] = useState("Male");
  const [scrolling, setScrolling] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSmallPopoverOpen, setIsSmallPopoverOpen] = useState(false);
  const { mutate: logOutMutate } = useLogOut();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 116);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    setIsPopoverOpen(false);
    logOutMutate();
  };

  return (
    <header
      className={`fixed w-full z-[999] top-0 left-0 transition-all duration-300 ${
        scrolling ? "bg-black" : "bg-black/20"
      }`}
    >
      <nav className="flex px-5 items-center justify-between container py-4 xl:py-2">
        {/* logo */}
        <Link
          to="/"
          className="size-[60px] md:size-[65px] lg:size-[80px] 3xl:size-[100px]"
        >
          <img className="w-full h-full object-cover" src={logo} alt="Logo" />
        </Link>

        {/* NavLinks */}
        <div className="hidden xl:flex items-center gap-8">
          {/* cta */}
          <div className="flex items-center gap-5">
            <Link
              to={"/business"}
              className="text-white px-5 py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] text-xl font-medium"
            >
              For Business
            </Link>
            {user ? (
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger>
                  <button className="px-5 py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] text-xl font-medium flex items-center gap-2 text-white">
                    <span>Get Started</span>
                    <DownArrowSvg />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 mt-5">
                  <div className="!bg-white rounded-lg px-7 py-10">
                    <ul className="font-medium text-[#2C2C2C] text-lg space-y-4">
                      {[
                        {
                          icon: <HeaderSVGOne />,
                          label: "Profile",
                          path: "/userdashboard",
                        },
                        {
                          icon: <HeaderSVGTwo />,
                          label: "Appointments",
                          path: "/userdashboard/appointments",
                        },
                        {
                          icon: <HeaderSVGFour />,
                          label: "Favourites",
                          path: "/userdashboard/favourites",
                        },
                        {
                          icon: <HeaderSVGSix />,
                          label: "Product orders",
                          path: "/userdashboard/productorder",
                        },
                      ].map(({ icon, label, path }) => (
                        <Link
                          to={path}
                          key={label}
                          className="cursor-pointer flex gap-2 items-center hover:bg-primary-gradient hover:text-white group text-[#2C2C2C] duration-300 transition-all rounded px-3 py-2"
                          onClick={() => setIsPopoverOpen(false)}
                        >
                          {icon}
                          <p className="font-manrope text-lg font-medium">
                            {label}
                          </p>
                        </Link>
                      ))}
                      <li
                        className="cursor-pointer flex gap-2 items-center hover:bg-primary-gradient hover:text-white group text-[#2C2C2C] duration-300 transition-all rounded px-3 py-2"
                        onClick={handleLogOut}
                      >
                        <p className="font-manrope text-lg font-medium">
                          Log Out
                        </p>
                      </li>
                    </ul>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Link to="/login">
                <button className="px-5 py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] text-xl font-medium text-white">
                  <span>Sign Up</span>
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Hamburger btn */}
        <button
          onClick={() => setOpen(!isOpen)}
          className="bg-[#00C2CB] xl:hidden text-white w-10 h-10 lg:w-14 lg:h-12 rounded grid place-items-center"
        >
          <FaBars className="text-2xl lg:text-3xl" />
        </button>
      </nav>

      {/* Responsive Navbar */}

      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-[999] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-500 transition-transform fixed top-0 z-[999] left-0 bg-white py-10 shadow-lg overflow-y-auto  border-r max-h-screen min-h-screen w-[270px] xl:hidden`}
      >
        {/* logo */}
        <Link to="/" className="size-[80px]">
          <img className="object-cover mx-auto" src={logo} alt="Logo" />
        </Link>

        <div className="flex flex-col mt-5 items-center gap-6">
          {/* tabs */}
          <div className="flex flex-col items-center gap-3">
            {["Male", "Female"].map(option => (
              <button
                key={option}
                onClick={() => setGender(option)}
                className={`px-5 py-1 border-b-2 transition-all duration-300 ${
                  gender === option
                    ? "border-b-primary text-primary font-semibold text-lg md:text-xl"
                    : "border-b-transparent text-gray-500 font-medium md:text-lg"
                }`}
                aria-pressed={gender === option}
              >
                {option === "Male" ? "Man" : "Woman"}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5">
            {/* business */}
            <Link
              to={"/business"}
              className="px-4 py-2 3xl:py-3.5 border border-textColor rounded-[32px] md:text-lg font-medium"
            >
              For Business
            </Link>

            {/* Get started btn */}
            <Popover
              open={isSmallPopoverOpen}
              onOpenChange={setIsSmallPopoverOpen}
            >
              <PopoverTrigger>
                <button className="px-4 py-2 3xl:py-3.5 border border-textColor rounded-[32px] md:text-lg font-medium flex items-center gap-2">
                  <span>Get Started</span>
                  <DownArrowSvgTwo />
                </button>
              </PopoverTrigger>
              <PopoverContent className="mt-5">
                <div className="!bg-white rounded-lg ">
                  <ul className="font-medium text-[#2C2C2C] text-[17px] space-y-1">
                    {[
                      {
                        icon: <HeaderSVGOne />,
                        label: "Profile",
                        path: "/userdashboard",
                      },
                      {
                        icon: <HeaderSVGTwo />,
                        label: "Appointments",
                        path: "/userdashboard/appointments",
                      },
                      {
                        icon: <HeaderSVGFour />,
                        label: "Favourites",
                        path: "/userdashboard/favourites",
                      },
                      {
                        icon: <HeaderSVGSix />,
                        label: "Product orders",
                        path: "/userdashboard/productorder",
                      },
                    ].map(({ icon, label, path }) => (
                      <Link
                        to={path}
                        key={label}
                        className="cursor-pointer flex gap-2 items-center hover:bg-[#008a90] hover:text-white group text-[#2C2C2C] duration-300 transition-all rounded py-2 px-3"
                        onClick={() => setIsPopoverOpen(false)}
                      >
                        {icon}
                        <p className="font-manrope font-medium">{label}</p>
                      </Link>
                    ))}
                    <li
                      className="cursor-pointer flex gap-2 items-center hover:bg-primary-gradient hover:text-white group text-[#2C2C2C] duration-300 transition-all rounded py-1"
                      onClick={() => setIsPopoverOpen(false)}
                    >
                      <p className="font-manrope text-[17px] font-medium">
                        Log Out
                      </p>
                    </li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* Cancel btn */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3"
        >
          <RxCross2 className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
