import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  location.pathname === "/booknow" ||
    location.pathname === "/booking-confirmation";
  const isBookNowPage = location.pathname === "/booknow";
  const isConfirmWithPayPage = location.pathname === "/confirmation-with-pay";
  const isOrderConfirmedPage = location.pathname === "/confirmOrder";
  const isCompletedPage = location.pathname === "/appointment-completed";
  const isAllSalon = location.pathname === "/all-salon";
  const isAuthPages =
    location.pathname === "/login" ||
    location.pathname === "/bs" ||
    location.pathname === "/registration/business" ||
    location.pathname === "/registration/customer" ||
    location.pathname === "/verify-account" ||
    location.pathname === "/verify-otp" ||
    location.pathname === "/create-pass";

  return (
    <>
      <ScrollRestoration />
      {!isBookNowPage &&
        !isConfirmWithPayPage &&
        !isOrderConfirmedPage &&
        !isAuthPages &&
        !isAllSalon &&
        !isCompletedPage && <Navbar />}
      <div>
        <Outlet />
      </div>
      {!isBookNowPage &&
        !isConfirmWithPayPage &&
        !isOrderConfirmedPage &&
        !isAuthPages &&
        !isAllSalon &&
        !isCompletedPage && <Footer />}
    </>
  );
};

export default MainLayout;
