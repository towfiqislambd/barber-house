import AddMembership from "@/components/BusinessDashboard/BusinessDashboardCatalog/AddMembership";
import FreshaMarketPlace from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/FreshaMarketPlace";
import OnlineProfileContainer from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/OnlineProfileStepForm/OnlineProfileContainer";
import TellUsAboutYourBusiness from "@/components/BusinessDashboard/BusinessDashboardOnlineProfile/TellUsAboutYourBusiness";
import AutomationDetailsPage from "@/components/BusinessDashboardMarketing/AutomationDetailsPage/AutomationDetailsPage";
import AppointmentRemainderPage from "@/components/BusinessDashboardMarketing/BusinessDashboardStepForm/AppointmentRemainderPage";
import BusinessDashboardStepFormContainer from "@/components/BusinessDashboardMarketing/BusinessDashboardStepForm/BusinessDashboardStepFormContainer";
import SmartPricingStepContainer from "@/components/SmartPricing/SmartPricingStepContainer";
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
import BusinessDashboardCalendar from "@/pages/BusinessDashboardPage/BusinessDashboardCalendar";
import BusinessDashboardCatalogue from "@/pages/BusinessDashboardPage/BusinessDashboardCatalogue";
import BusinessDashboardClintList from "@/pages/BusinessDashboardPage/BusinessDashboardClintList";
import BusinessDashboardHome from "@/pages/BusinessDashboardPage/BusinessDashboardHome";
import BusinessDashboardMarketing from "@/pages/BusinessDashboardPage/BusinessDashboardMarketing";
import BusinessDashboardMemberList from "@/pages/BusinessDashboardPage/BusinessDashboardMemberList";
import BusinessDashboardMessage from "@/pages/BusinessDashboardPage/BusinessDashboardMessage";
import BusinessDashboardOnlineProfile from "@/pages/BusinessDashboardPage/BusinessDashboardOnlineProfile";
import BusinessDashboardReporting from "@/pages/BusinessDashboardPage/BusinessDashboardReporting";
import BusinessDashboardSales from "@/pages/BusinessDashboardPage/BusinessDashboardSales";
import BusinessDashboardSettings from "@/pages/BusinessDashboardPage/BusinessDashboardSettings";
import EditService from "@/pages/BusinessDashboardPage/EditService";
import MembershipCreation from "@/pages/BusinessDashboardPage/MembershipCreation";
import BusinessHelpCenter from "@/pages/BusinessHelpCenter/BusinessHelpCenter";
import BusinessHelpCenterDetails from "@/pages/BusinessHelpCenter/BusinessHelpCenterDetails";
import BusinessHelpCenterDetailsSingleView from "@/pages/BusinessHelpCenter/BusinessHelpCenterDetailsSingleView";
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
import SalesPage from "@/pages/schedulingPage/SalesPage";
import Scheduling from "@/pages/schedulingPage/Scheduling";
import Sitemap from "@/pages/Sitemap/Sitemap";
import ChoosePeopleGiftCard from "@/pages/UserDashboardPage/ChoosePeopleGiftCard";
import GiftCard from "@/pages/UserDashboardPage/GiftCard";
import MembershipDone from "@/pages/UserDashboardPage/MembershipDone";
import SendGiftCard from "@/pages/UserDashboardPage/SendGiftCard";
import UserAppointments from "@/pages/UserDashboardPage/UserAppointments";
import UserFavourites from "@/pages/UserDashboardPage/UserFavourites";
import UserForms from "@/pages/UserDashboardPage/UserForms";
import UserMembership from "@/pages/UserDashboardPage/UserMembership";
import UserMembershipCheckout from "@/pages/UserDashboardPage/UserMembershipCheckout";
import UserProductOrder from "@/pages/UserDashboardPage/UserProductOrder";
import UserProfile from "@/pages/UserDashboardPage/UserProfile";
import UserSetting from "@/pages/UserDashboardPage/UserSetting";
import UserWallet from "@/pages/UserDashboardPage/UserWallet";
import { createBrowserRouter } from "react-router-dom";
import EditTimeAndCalander from "@/components/SchedulingComponents/EditTimeAndCalander";
import BlockedTimeEdit from "@/components/SchedulingComponents/BlockedTimeEdit";
import OnlineAvailability from "@/components/SchedulingComponents/OnlineAvailability";
import OptimizeOnlineBook from "@/components/SchedulingComponents/OptimizeOnlineBook";
import Notification from "@/components/SchedulingComponents/Notification";
import BusinessSetup from "@/components/BusinessDashboardSettings/BusinessSetup";
import EditBusinessDetailsPage from "@/components/BusinessDashboardSettings/EditBusinessDetailsPage";
import LocationSetUpPage from "@/components/BusinessDashboardSettings/LocationSetUpPage";
import AddPaymentMethod from "@/components/SchedulingComponents/AddPaymentMethod";
import PaymentMethod from "@/components/SchedulingComponents/PaymentMethod";
import Taxrates from "@/components/SchedulingComponents/Taxrates";
import NewTax from "@/components/SchedulingComponents/NewTax";
import GroupTax from "@/components/SchedulingComponents/GroupTax";
import Receipts from "@/components/SchedulingComponents/Receipts";
import EditReceipt from "@/components/SchedulingComponents/EditReceipt";
import ReceiptNotification from "@/components/SchedulingComponents/ReceiptNotification";
import Tipping from "@/components/SchedulingComponents/Tipping";
import EditTipping from "@/components/SchedulingComponents/EditTipping";
import GiftCardSale from "@/components/SchedulingComponents/GiftCardSale";
import EditGiftCardSale from "@/components/SchedulingComponents/EditGiftCardSale";
import AddClientSources from "@/components/BusinessDashboardSettings/AddClientSources";
import ContactDetailsPage from "@/components/BusinessDashboardSettings/ContactDetailsPage";
import EditTaxDetails from "@/components/BusinessDashboardSettings/EditTaxDetails";
import AddNewTax from "@/components/BusinessDashboardSettings/AddNewTax";
import EditReceiptSequencing from "@/components/BusinessDashboardSettings/EditReceiptSequencing";
import BusinessType from "@/components/BusinessDashboardSettings/BusinessType";
import EditBusinessLocation from "@/components/BusinessDashboardSettings/EditBusinessLocation";
import ChangeLocation from "@/components/BusinessDashboardSettings/ChangeLocation";
import EditAddressDetails from "@/components/BusinessDashboardSettings/EditAddressDetails";
import PresenceDashboard from "@/pages/BusinessDashboardPage/PresenceDashboard";
import PerformanceDashboard from "@/pages/BusinessDashboardPage/PerformanceDashboard";
import SalesSummary from "@/pages/BusinessDashboardPage/SalesSummary";
import SalesList from "@/pages/BusinessDashboardPage/SalesList";
import PaymentsSummery from "@/pages/BusinessDashboardPage/PaymentsSummery";
import PaymentTransactions from "@/pages/BusinessDashboardPage/PaymentTransactions";
import AppointmentList from "@/pages/BusinessDashboardPage/AppointmentList";
import ReportingClientList from "@/pages/BusinessDashboardPage/ReportingClientList";
import WorkingHoursSummery from "@/pages/BusinessDashboardPage/WorkingHoursSummery";
import Permission from "@/pages/schedulingPage/PermissionPage";
import PermissionPage from "@/pages/schedulingPage/PermissionPage";
import TimeOfTypes from "@/components/Permissions/TimeOfTypes";
import Combinssion from "@/components/Permissions/Combinssion";
import EditTimeOfType from "@/components/Permissions/EditTimeOfType";
import EditOpeningHours from "@/components/BusinessDashboardSettings/EditOpeningHours";
import AddTeamMember from "@/pages/BusinessDashboardPage/AddTeamMember";
import Shifts from "@/pages/BusinessDashboardPage/Shifts";
import RefundSales from "@/components/BusinessDashboard/BusinessDashboardSales/RefundSales";
import ProfessionalTimePage from "@/pages/Home/ProfessionalTimePage/ProfessionalTimePage";
import AddBlockedTime from "@/pages/BusinessDashboardPage/AddBlockedTime";
import UserLogin from "@/pages/Auth/UserLogin/UserLogin";
import VerifyAccount from "@/pages/Auth/VerifyAccount/VerifyAccount";
import VerifyOtp from "@/pages/Auth/VerifyOtp/VerifyOtp";
import CreatePass from "@/pages/Auth/CreatePass/CreatePass";
import Allsalons from "@/pages/Allsalons/Allsalons";
import ProfessionalAndTimePage from "@/pages/ProfessionalAndTimePage/ProfessionalAndTimePage";
import AppointmentCompleted from "@/pages/Home/AppointmentCompleted";
import Inventory from "@/pages/BusinessDashboardPage/Inventory";
import BS from "@/pages/Auth/BS/BS";

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
        path: "/saloncarddetails",
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
      {
        path: "message",
        element: <Message />,
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
        path: "businessdetails",
        element: <BusinessHelpCenterDetails />,
      },
      {
        path: "businesssingleview",
        element: <BusinessHelpCenterDetailsSingleView />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blogdetails",
        element: <BlogDetails />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "blogdetails",
        element: <BlogDetails />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
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
      {
        path: "sitemap",
        element: <Sitemap />,
      },
      {
        path: "stepContainer",
        element: <StepContainer />,
      },
    ],
  },
  // user profile layout
  {
    path: "/userdashboard",
    element: <UserDashboardLayout />,
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
        path: "wallet",
        element: <UserWallet />,
      },
      {
        path: "favourites",
        element: <UserFavourites />,
      },
      {
        path: "forms",
        element: <UserForms />,
      },
      {
        path: "productorder",
        element: <UserProductOrder />,
      },
      {
        path: "settings",
        element: <UserSetting />,
      },
      {
        path: "usermembership",
        element: <UserMembership />,
      },
      {
        path: "usermembercheckout",
        element: <UserMembershipCheckout />,
      },
      {
        path: "membershipdone",
        element: <MembershipDone />,
      },
      {
        path: "giftcard",
        element: <GiftCard />,
      },
      {
        path: "usermembercheckout",
        element: <UserMembershipCheckout />,
      },
      {
        path: "membershipdone",
        element: <MembershipDone />,
      },
      {
        path: "giftcard",
        element: <GiftCard />,
      },
      {
        path: "usermembercheckout",
        element: <UserMembershipCheckout />,
      },
      {
        path: "membershipdone",
        element: <MembershipDone />,
      },
      {
        path: "giftcard",
        element: <GiftCard />,
      },
      {
        path: "choosepeoplegiftcard",
        element: <ChoosePeopleGiftCard />,
      },
      {
        path: "sendgiftcard",
        element: <SendGiftCard />,
      },
      {
        path: "choosepeoplegiftcard",
        element: <ChoosePeopleGiftCard />,
      },
      {
        path: "sendgiftcard",
        element: <SendGiftCard />,
      },
    ],
  },

  {
    path: "/businessDashboard",
    element: <BusinessDashboardLayout />,
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
        path: "calendar",
        element: <BusinessDashboardCalendar />,
      },
      {
        path: "clients-list",
        element: <BusinessDashboardClintList />,
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
        path: "reporting",
        element: <BusinessDashboardReporting />,
      },
      {
        path: "settings",
        element: <BusinessDashboardSettings />,
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
        path: "freshaMarketplace",
        element: <FreshaMarketPlace />,
      },
      {
        path: "businessdashboardeditpage",
        element: <BusinessDashboardStepFormContainer />,
      },
      {
        path: "editService",
        element: <EditService />,
      },
      {
        path: "addService",
        element: <AddService />,
      },
      {
        path: "appointmentremainder",
        element: <AppointmentRemainderPage />,
      },
      {
        path: "automationdetailspage",
        element: <AutomationDetailsPage />,
      },
      {
        path: "smartpricingstepcontainer",
        element: <SmartPricingStepContainer />,
      },
      {
        path: "scheduling",
        element: <Scheduling />,
      },
      {
        path: "settingsales",
        element: <SalesPage />,
      },
      {
        path: "membership-creation",
        element: <MembershipCreation />,
      },
      {
        path: "add-membership",
        element: <AddMembership />,
      },
      {
        path: "addnew-product",
        element: <AddNewProduct />,
      },
      {
        path: "edittimeandcalander",
        element: <EditTimeAndCalander />,
      },
      {
        path: "blockedtimeedit",
        element: <BlockedTimeEdit />,
      },
      {
        path: "onlineavailability",
        element: <OnlineAvailability />,
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
        path: "businessetup",
        element: <BusinessSetup />,
      },
      {
        path: "editbusinessdetailspage",
        element: <EditBusinessDetailsPage />,
      },
      {
        path: "locationsetuppage",
        element: <LocationSetUpPage />,
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
        path: "taxrates",
        element: <Taxrates />,
      },
      {
        path: "newtax",
        element: <NewTax />,
      },
      {
        path: "grouptax",
        element: <GroupTax />,
      },
      {
        path: "receipts",
        element: <Receipts />,
      },
      {
        path: "editreceipt",
        element: <EditReceipt />,
      },
      {
        path: "receiptNotification",
        element: <ReceiptNotification />,
      },
      {
        path: "tipping",
        element: <Tipping />,
      },
      {
        path: "edittipping",
        element: <EditTipping />,
      },
      {
        path: "giftcardsale",
        element: <GiftCardSale />,
      },
      {
        path: "editgifcardsale",
        element: <EditGiftCardSale />,
      },
      {
        path: "addclientsources",
        element: <AddClientSources />,
      },
      {
        path: "contactdetailspage",
        element: <ContactDetailsPage />,
      },
      {
        path: "edittaxdetails",
        element: <EditTaxDetails />,
      },
      {
        path: "addnewtax",
        element: <AddNewTax />,
      },
      {
        path: "editreceiptsequencing",
        element: <EditReceiptSequencing />,
      },
      {
        path: "edittipping",
        element: <EditTipping />,
      },
      {
        path: "businesstype",
        element: <BusinessType />,
      },
      {
        path: "editbusinesslocation",
        element: <EditBusinessLocation />,
      },
      {
        path: "changelocation",
        element: <ChangeLocation />,
      },
      {
        path: "editaddressdetails",
        element: <EditAddressDetails />,
      },
      {
        path: "performance",
        element: <PerformanceDashboard />,
      },
      {
        path: "presence",
        element: <PresenceDashboard />,
      },
      {
        path: "sales-summary",
        element: <SalesSummary />,
      },
      {
        path: "sales-list",
        element: <SalesList />,
      },
      {
        path: "payment-summery",
        element: <PaymentsSummery />,
      },
      {
        path: "payment-transition",
        element: <PaymentTransactions />,
      },
      {
        path: "appointment-list",
        element: <AppointmentList />,
      },
      {
        path: "/businessDashboard/reporting-client-list",
        element: <ReportingClientList />,
      },
      {
        path: "/businessDashboard/inventory",
        element: <Inventory />,
      },
      {
        path: "/businessDashboard/working-hours-summery",
        element: <WorkingHoursSummery />,
      },
      {
        path: "permissions",
        element: <PermissionPage />,
      },
      {
        path: "permissioncomponent",
        element: <Permission />,
      },
      {
        path: "timeoftype",
        element: <TimeOfTypes />,
      },
      {
        path: "combinission",
        element: <Combinssion />,
      },
      {
        path: "edittimeoftype",
        element: <EditTimeOfType />,
      },
      {
        path: "editopeninghours",
        element: <EditOpeningHours />,
      },
      {
        path: "add-team-member",
        element: <AddTeamMember />,
      },
      {
        path: "shifts",
        element: <Shifts />,
      },
      {
        path: "refundsales",
        element: <RefundSales />,
      },
      {
        path: "addblocktime",
        element: <AddBlockedTime />,
      },
    ],
  },
]);
