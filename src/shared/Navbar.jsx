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
import { Link, useNavigate } from "react-router-dom";
import { useLogOut } from "@/hooks/auth.hook.";
import useAuth from "@/hooks/useAuth";
import { Button, Drawer } from "antd";
import { Loader } from "@/components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {
  addtoCart,
  decreaseCart,
  removeFromCart,
} from "@/redux/features/cartSlice";
import toast from "react-hot-toast";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { useSiteSettings } from "@/hooks/cms.queries";
import { useTranslation } from "@/provider/TranslationContext";
import ReactFlagsSelect from "react-flags-select";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const { changeLanguage } = useTranslation();

  const { data: siteSettings, isLoading } = useSiteSettings();
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [gender, setGender] = useState("Male");
  const [scrolling, setScrolling] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSmallPopoverOpen, setIsSmallPopoverOpen] = useState(false);
  const { mutate: logOutMutate } = useLogOut();
  const { user, token } = useAuth();
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
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

  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCheckout = () => {
    setIsCartOpen(false);
    if (user) {
      navigate("/checkout");
    } else {
      toast.error("You need to login first");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <header
      className={`fixed w-full z-[999] top-0 left-0 transition-all duration-300 ${
        scrolling ? "bg-black" : "bg-black/20"
      }`}
    >
      <nav className="flex items-center justify-between container py-3 xl:py-2">
        {/* logo */}
        <Link
          to="/"
          className="size-[50px] md:size-[65px] lg:size-[80px] 3xl:size-[100px] rounded"
        >
          <img
            className="w-full h-full object-cover rounded"
            src={`${import.meta.env.VITE_SITE_URL}/${siteSettings?.logo}`}
            alt="Logo"
          />
        </Link>

        {/* NavLinks */}
        <div className="flex items-center">
          <div className="flex items-center gap-8">
            {/* cta */}
            <div className="flex items-center gap-1.5 lg:gap-5">
              <Link
                to={"/business"}
                className="text-white px-2.5 text-[13px] lg:px-5 py-1.5 lg:py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] lg:text-xl font-medium"
              >
                For Business
              </Link>
              {user ? (
                <>
                  {user?.role === "customer" && (
                    <Popover
                      open={isPopoverOpen}
                      onOpenChange={setIsPopoverOpen}
                    >
                      <PopoverTrigger>
                        <button className="px-3 lg:px-5 py-2 lg:py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] text-sm lg:text-xl font-medium flex items-center gap-2 text-white">
                          <span>Get Started</span>
                          <DownArrowSvg />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-60 lg:w-72 mt-5">
                        <div className="!bg-white rounded-lg px-2 lg:px-7 py-3 lg:py-10">
                          <ul className="font-medium text-[#2C2C2C] lg:text-lg space-y-1 lg:space-y-4">
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
                                <p className="font-manrope lg:text-lg font-medium">
                                  {label}
                                </p>
                              </Link>
                            ))}
                            <li
                              className="cursor-pointer flex gap-2 items-center hover:bg-primary-gradient hover:text-white group text-[#2C2C2C] duration-300 transition-all rounded px-3 py-2"
                              onClick={handleLogOut}
                            >
                              <p className="font-manrope lg:text-lg font-medium">
                                Log Out
                              </p>
                            </li>
                          </ul>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                  {user?.role === "business" && (
                    <Link
                      className="px-2.5 lg:px-5 py-1.5 lg:py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] text-[13px] lg:text-xl font-medium text-white"
                      to={"/businessDashboard"}
                    >
                      Go to Dashboard
                    </Link>
                  )}
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-2.5 lg:px-5 py-1.5 lg:py-[10px] 3xl:py-3.5 border border-textColor rounded-[32px] text-[13px] lg:text-xl font-medium text-white"
                >
                  <span>Sign In</span>
                </Link>
              )}

              {/* For desktop */}
              <div className="hidden lg:block">
                <ReactFlagsSelect
                  selected={selectedCountry}
                  onSelect={countryCode => {
                    const languageMap = {
                      US: "en",
                      GB: "en",
                      FR: "fr",
                      DE: "de",
                      IT: "it",
                      SA: "ar",
                      AE: "ar",
                    };

                    const langCode = languageMap[countryCode] || "en";
                    changeLanguage(langCode);
                    setSelectedCountry(countryCode);
                  }}
                  countries={["US", "GB", "FR", "DE", "IT", "SA", "AE"]}
                  customLabels={{
                    US: "English",
                    GB: "English (UK)",
                    FR: "Français",
                    DE: "Deutsch",
                    IT: "Italiano",
                    SA: "العربية",
                    AE: "العربية",
                  }}
                  placeholder="Select Language"
                  searchable={false}
                  selectedSize={16}
                  optionsSize={14}
                  className="inline-block"
                  selectButtonClassName="p-2 border bg-[#0F1E3A] text-white !border-gray-700 rounded"
                />
              </div>

              {/* Mobile Version (icon-based dropdown) */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => setIsSmallPopoverOpen(prev => !prev)}
                  className="px-1 py-0.5 border border-gray-500 bg-[#0F1E3A] text-white rounded"
                >
                  🌐
                </button>
                {isSmallPopoverOpen && (
                  <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-2 z-50 w-40">
                    {[
                      { code: "US", label: "English" },
                      { code: "GB", label: "English (UK)" },
                      { code: "FR", label: "Français" },
                      { code: "DE", label: "Deutsch" },
                      { code: "IT", label: "Italiano" },
                      { code: "SA", label: "العربية" },
                      { code: "AE", label: "العربية" },
                    ].map(({ code, label }) => (
                      <div
                        key={code}
                        className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 rounded"
                        onClick={() => {
                          const languageMap = {
                            US: "en",
                            GB: "en",
                            FR: "fr",
                            DE: "de",
                            IT: "it",
                            SA: "العربية",
                            AE: "العربية",
                          };
                          changeLanguage(languageMap[code] || "en");
                          setSelectedCountry(code);
                          setIsSmallPopoverOpen(false);
                        }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <div
            className="relative cart w-8 h-8 rounded-full text-primary bg-white cursor-pointer flex items-center justify-center ml-2"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart className="text-sm" />
            <span className="w-4 h-4 bg-primary text-[12px] text-white rounded-full flex items-center justify-center absolute -top-1 -right-2">
              {cartItems?.length}
            </span>
          </div> */}
        </div>
      </nav>

      {/* <Drawer
        closable
        title="Your Cart"
        placement="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4 overflow-y-auto max-h-[65vh] pr-1">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b pb-3 border-gray-300 flex justify-between gap-4 items-center"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-base">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Price: {currencyFormatter(item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button
                          size="small"
                          onClick={() => dispatch(decreaseCart(item))}
                          disabled={item.cartQuantity <= 1}
                        >
                          −
                        </Button>
                        <span className="px-2">{item.cartQuantity}</span>
                        <Button
                          size="small"
                          onClick={() => dispatch(addtoCart(item))}
                        >
                          +
                        </Button>
                        <Button
                          danger
                          size="small"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <img
                      src={`${import.meta.env.VITE_SITE_URL}/${item.image_url}`}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-md border"
                    />
                  </div>
                ))
              ) : (
                <p>No items in cart.</p>
              )}
            </div>

            Subtotal & Checkout Button
            <div className="border-t pt-4 mt-4">
              <p className="text-lg font-semibold mb-3">
                Subtotal:
                {currencyFormatter(
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.cartQuantity,
                    0
                  )
                )}
              </p>
              <Button
                type="primary"
                block
                size="large"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </Drawer> */}
    </header>
  );
};

export default Navbar;
