import BusinessNavbar from "@/shared/Business/BusinessNavbar/BusinessNavbar";
import Footer from "@/shared/Footer";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const BusinessLayout = () => {
  const location = useLocation();
  const isSignUpPage =
    location.pathname === "/business/login" ||
    location.pathname === "/business/registration/business" ||
    location.pathname === "/business/registration/customer" ||
    location.pathname === "/business/selectaccount" ||
    location.pathname === "/business/signorlogin" ||
    location.pathname === "/business/stepContainer";

  const isSpecificPage =
    location.pathname === "/business/signorlogin" ||
    location.pathname === "/business/registration" ||
    location.pathname === "/business/stepContainer" ||
    location.pathname === "/business/selectaccount" ||
    location.pathname === "/business/login";

  return (
    <>
      <ScrollRestoration />
      {!isSignUpPage && <BusinessNavbar />}
      <div className={isSpecificPage ? "" : "pt-32"}>
        <Outlet />
      </div>
      {!isSignUpPage && <Footer />}
    </>
  );
};

export default BusinessLayout;
