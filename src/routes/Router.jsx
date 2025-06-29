import OnlineProfileContainer from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/OnlineProfileStepForm/OnlineProfileContainer";
import TellUsAboutYourBusiness from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/TellUsAboutYourBusiness";
import BusinessDashboardLayout from "@/layout/BusinessDashboardLayout";
import BusinessLayout from "@/layout/BusinessLayout";
import MainLayout from "@/layout/MainLayout";
import UserDashboardLayout from "@/layout/UserDashboardLayout";
import Login from "@/pages/Auth/Login/Login";
import Registration from "@/pages/Auth/Registration/Registration";
import SelectAccount from "@/pages/Auth/SelectAccount/SelectAccount";
import SignOrLogin from "@/pages/Auth/BS/BS";
import StepContainer from "@/pages/Auth/StepForm/StepContainer";
import Blog from "@/pages/Blog/Blog";
import BlogDetails from "@/pages/Blog/BlogDetails";
import AddNewProduct from "@/pages/BusinessDashboardPage/AddNewProduct";
import AddService from "@/pages/BusinessDashboardPage/AddService";
import BusinessDashboardCatalogue from "@/pages/BusinessDashboardPage/BusinessDashboardCatalogue";
import BusinessDashboardHome from "@/pages/BusinessDashboardPage/BusinessDashboardHome";
import BusinessDashboardMarketing from "@/pages/BusinessDashboardPage/BusinessDashboardMarketing";
import BusinessDashboardMemberList from "@/pages/BusinessDashboardPage/BusinessDashboardMemberList";
import BusinessDashboardMessage from "@/pages/BusinessDashboardPage/BusinessDashboardMessage";
import BusinessDashboardOnlineProfile from "@/pages/BusinessDashboardPage/BusinessDashboardOnlineProfile";
import BusinessDashboardSales from "@/pages/BusinessDashboardPage/BusinessDashboardSales";
import EditService from "@/pages/BusinessDashboardPage/EditService";
import BusinessHelpCenter from "@/pages/BusinessHelpCenter/BusinessHelpCenter";
import BusinessHelpCenterDetails from "@/pages/BusinessHelpCenter/BusinessHelpCenterDetails";
import BusinessHomePage from "@/pages/BusinessHomePage/BusinessHomePage";
import BusinessPricingPage from "@/pages/BusinessPricingPage/BusinessPricingPage";
import ContactUs from "@/pages/ContactUs/ContactUs";
import BookingConfirmationPage from "@/pages/Home/BookingConfirmationPage/BookingConfirmationPage";
import BookingDone from "@/pages/Home/BookingDone/BookingDone";
import BookNow from "@/pages/Home/BookNow/BookNow";
import ChooseProfessionalTimePage from "@/pages/Home/ChooseProfessionalTimePage/ChooseProfessionalTimePage";
import ChooseTimePage from "@/pages/Home/ChooseTimePage/ChooseTimePage";
import ConfirmationWithPay from "@/pages/Home/ConfirmationWithPay/ConfirmationWithPay";
import SalonCardDetailsPage from "@/pages/Home/SalonCardDetailsPage/SalonCardDetailsPage";
import SearchResultPage from "@/pages/Home/SearchResultPage/SearchResultPage";
import SelectServicesPage from "@/pages/Home/SelectServicesPage/SelectServicesPage";
import Homepage from "@/pages/Homepage/Homepage";
import Message from "@/pages/Message/Message";
import Checkout from "@/pages/Product/Checkout";
import ConfirmOrder from "@/pages/Product/ConfirmOrder";
import ProductDetails from "@/pages/Product/ProductDetails";
import ProductHome from "@/pages/Product/ProductHome";
import Review from "@/pages/Review/Review";
import UserAppointments from "@/pages/UserDashboardPage/UserAppointments";
import UserFavourites from "@/pages/UserDashboardPage/UserFavourites";
import UserProductOrder from "@/pages/UserDashboardPage/UserProductOrder";
import UserProfile from "@/pages/UserDashboardPage/UserProfile";
import { createBrowserRouter } from "react-router-dom";
import OptimizeOnlineBook from "@/components/SchedulingComponents/OptimizeOnlineBook";
import Notification from "@/components/SchedulingComponents/Notification";
import AddPaymentMethod from "@/components/SchedulingComponents/AddPaymentMethod";
import PaymentMethod from "@/components/SchedulingComponents/PaymentMethod";
import ReceiptNotification from "@/components/SchedulingComponents/ReceiptNotification";
import SalesList from "@/pages/BusinessDashboardPage/SalesList";
import AppointmentList from "@/pages/BusinessDashboardPage/AppointmentList";
import AddTeamMember from "@/pages/BusinessDashboardPage/AddTeamMember";
import ProfessionalTimePage from "@/pages/Home/ProfessionalTimePage/ProfessionalTimePage";
import UserLogin from "@/pages/Auth/UserLogin/UserLogin";
import VerifyAccount from "@/pages/Auth/VerifyAccount/VerifyAccount";
import VerifyOtp from "@/pages/Auth/VerifyOtp/VerifyOtp";
import CreatePass from "@/pages/Auth/CreatePass/CreatePass";
import Allsalons from "@/pages/Allsalons/Allsalons";
import ProfessionalAndTimePage from "@/pages/ProfessionalAndTimePage/ProfessionalAndTimePage";
import AppointmentCompleted from "@/pages/Home/AppointmentCompleted";
import BS from "@/pages/Auth/BS/BS";
import PrivateRoute from "./PrivateRoute";
import ChatLayout from "@/layout/ChatLayout";
import ChatWindow from "@/pages/chat/ChatWindow";
import BusinessPrivateRoute from "./BusinessPrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/reviews",
        element: <Review />,
      },
      {
        path: "/searchresultpage",
        element: <SearchResultPage />,
      },
      {
        path: "/booknow",
        element: <BookNow />,
      },
      {
        path: "/chooseprofessionalpage",
        element: <ChooseProfessionalTimePage />,
      },
      {
        path: "/shop-info/:id",
        element: <SalonCardDetailsPage />,
      },
      {
        path: "/select-service",
        element: <SelectServicesPage />,
      },
      {
        path: "/choose-time",
        element: <ChooseTimePage />,
      },
      {
        path: "/booking-confirmation",
        element: <BookingConfirmationPage />,
      },
      {
        path: "/confirmation-with-pay",
        element: <ConfirmationWithPay />,
      },
      {
        path: "/appointment-completed",
        element: <AppointmentCompleted />,
      },
      {
        path: "/booking-done",
        element: <BookingDone />,
      },
      {
        path: "/professional-time-page",
        element: <ProfessionalTimePage />,
      },

      // Product Pages Flow
      {
        path: "/productHome",
        element: <ProductHome />,
      },
      {
        path: "/productDetails",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/confirmOrder",
        element: <ConfirmOrder />,
      },
      // Auth Flow Start
      {
        path: "/bs",
        element: <BS />,
      },
      {
        path: "registration/:type",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/verify-account",
        element: <VerifyAccount />,
      },
      {
        path: "/verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "/create-pass",
        element: <CreatePass />,
      },
      {
        path: "stepContainer",
        element: <StepContainer />,
      },
      // Auth Flow End

      {
        path: "/all-salon",
        element: <Allsalons />,
      },
      {
        path: "/professional-and-time-page",
        element: <ProfessionalAndTimePage />,
      },
    ],
  },
  // This is the Business Route Section
  {
    path: "/business",
    element: <BusinessLayout />,
    children: [
      {
        index: true,
        element: <BusinessHomePage />,
      },
      {
        path: "pricingPage",
        element: <BusinessPricingPage />,
      },
      {
        path: "businesshelpcenter",
        element: <BusinessHelpCenter />,
      },
      {
        path: "businessdetails/:id",
        element: <BusinessHelpCenterDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "blogdetails/:slug",
        element: <BlogDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration/:type",
        element: <Registration />,
      },
      {
        path: "selectaccount",
        element: <SelectAccount />,
      },
      {
        path: "signorlogin",
        element: <SignOrLogin />,
      },
    ],
  },
  // user profile layout
  {
    path: "/userdashboard/",
    element: (
      <PrivateRoute>
        <UserDashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "appointments",
        element: <UserAppointments />,
      },
      {
        path: "favourites",
        element: <UserFavourites />,
      },
      {
        path: "productorder",
        element: <UserProductOrder />,
      },
    ],
  },

  {
    path: "/businessDashboard",
    element: (
      <BusinessPrivateRoute>
        <BusinessDashboardLayout />
      </BusinessPrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <BusinessDashboardHome />,
      },
      {
        path: "sales",
        element: <BusinessDashboardSales />,
      },
      {
        path: "catalogue",
        element: <BusinessDashboardCatalogue />,
      },
      {
        path: "online-profile",
        element: <BusinessDashboardOnlineProfile />,
      },
      {
        path: "marketing",
        element: <BusinessDashboardMarketing />,
      },
      {
        path: "message",
        element: <BusinessDashboardMessage />,
      },
      {
        path: "members-list",
        element: <BusinessDashboardMemberList />,
      },
      {
        path: "tellusaboutyourbusiness",
        element: <TellUsAboutYourBusiness />,
      },
      {
        path: "businessContainer",
        element: <OnlineProfileContainer />,
      },
      {
        path: "editService/:id",
        element: <EditService />,
      },
      {
        path: "addService",
        element: <AddService />,
      },
      {
        path: "addnew-product",
        element: <AddNewProduct />,
      },
      {
        path: "optimizeonlinebooking",
        element: <OptimizeOnlineBook />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "paymentmethod",
        element: <PaymentMethod />,
      },
      {
        path: "addpaymentmethod",
        element: <AddPaymentMethod />,
      },
      {
        path: "receiptNotification",
        element: <ReceiptNotification />,
      },
      {
        path: "sales-list",
        element: <SalesList />,
      },
      {
        path: "appointment-list",
        element: <AppointmentList />,
      },
      {
        path: "add-team-member",
        element: <AddTeamMember />,
      },
    ],
  },

  {
    path: "/",
    element: (
      <PrivateRoute>
        <ChatLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/chat",
        element: <ChatWindow />,
      },
      {
        path: "/chat/:id",
        element: <ChatWindow />,
      },
    ],
  },
]);
