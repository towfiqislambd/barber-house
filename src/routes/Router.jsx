import OnlineProfileContainer from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/OnlineProfileStepForm/OnlineProfileContainer";
import TellUsAboutYourBusiness from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/TellUsAboutYourBusiness";
import BusinessDashboardLayout from "@/layout/BusinessDashboardLayout";
import BusinessLayout from "@/layout/BusinessLayout";
import MainLayout from "@/layout/MainLayout";
import UserDashboardLayout from "@/layout/UserDashboardLayout";
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
import BusinessDashboardOnlineProfile from "@/pages/BusinessDashboardPage/BusinessDashboardOnlineProfile";
import BusinessDashboardSales from "@/pages/BusinessDashboardPage/BusinessDashboardSales";
import EditService from "@/pages/BusinessDashboardPage/EditService";
import BusinessHelpCenter from "@/pages/BusinessHelpCenter/BusinessHelpCenter";
import BusinessHelpCenterDetails from "@/pages/BusinessHelpCenter/BusinessHelpCenterDetails";
import BusinessHomePage from "@/pages/BusinessHomePage/BusinessHomePage";
import BusinessPricingPage from "@/pages/BusinessPricingPage/BusinessPricingPage";
import ContactUs from "@/pages/ContactUs/ContactUs";
import BookingConfirmationPage from "@/pages/Home/BookingConfirmationPage/BookingConfirmationPage";
import BookNow from "@/pages/Home/BookNow/BookNow";
import ChooseTimePage from "@/pages/Home/ChooseTimePage/ChooseTimePage";
import SalonCardDetailsPage from "@/pages/Home/SalonCardDetailsPage/SalonCardDetailsPage";
import SearchResultPage from "@/pages/Home/SearchResultPage/SearchResultPage";
import SelectServicesPage from "@/pages/Home/SelectServicesPage/SelectServicesPage";
import Homepage from "@/pages/Homepage/Homepage";
import Checkout from "@/pages/Product/Checkout";
import ConfirmOrder from "@/pages/Product/ConfirmOrder";
import UserAppointments from "@/pages/UserDashboardPage/UserAppointments";
import UserFavourites from "@/pages/UserDashboardPage/UserFavourites";
import UserProductOrder from "@/pages/UserDashboardPage/UserProductOrder";
import UserProfile from "@/pages/UserDashboardPage/UserProfile";
import { createBrowserRouter } from "react-router-dom";
import AddTeamMember from "@/pages/BusinessDashboardPage/AddTeamMember";
import ProfessionalTimePage from "@/pages/Home/ProfessionalTimePage/ProfessionalTimePage";
import UserLogin from "@/pages/Auth/UserLogin/UserLogin";
import VerifyAccount from "@/pages/Auth/VerifyAccount/VerifyAccount";
import VerifyOtp from "@/pages/Auth/VerifyOtp/VerifyOtp";
import CreatePass from "@/pages/Auth/CreatePass/CreatePass";
import AppointmentCompleted from "@/pages/Home/AppointmentCompleted";
import BS from "@/pages/Auth/BS/BS";
import ArticleDetails from "@/pages/BusinessHelpCenter/ArticleDetails";
import ChatApp from "@/layout/ChatLayout";
import BusinessPrivateRoute from "./BusinessPrivateRoute";
import UserPrivateRoute from "./UserPrivateRoute";
import ChatPrivateRoute from "./ChatPrivateRoute";

export const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
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
        path: "/appointment-completed",
        element: <AppointmentCompleted />,
      },
      {
        path: "/professional-time-page",
        element: <ProfessionalTimePage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/confirmOrder",
        element: <ConfirmOrder />,
      },

      // Auth Flow
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
    ],
  },

  // Business Website Layout
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
        path: "article-details/:id",
        element: <ArticleDetails />,
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

  // User Dashboard Layout
  {
    path: "/userdashboard/",
    element: (
      <UserPrivateRoute>
        <UserDashboardLayout />
      </UserPrivateRoute>
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

  // Business Dashboard Layout
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
        path: "add-team-member",
        element: <AddTeamMember />,
      },
    ],
  },

  // Chat Layout
  {
    path: "/chat",
    element: (
      <ChatPrivateRoute>
        <ChatApp />
      </ChatPrivateRoute>
    ),
  },
]);
