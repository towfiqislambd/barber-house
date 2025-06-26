import AppointmentsActivity from "@/components/BusinessDashboard/BusinessDashboardHome/AppointmentsActivity";
import NextAppointments from "@/components/BusinessDashboard/BusinessDashboardHome/NextAppointments";
import RecentSales from "@/components/BusinessDashboard/BusinessDashboardHome/RecentSales";
import TopServices from "@/components/BusinessDashboard/BusinessDashboardHome/TopServices";
import UpcomingAppointments from "@/components/BusinessDashboard/BusinessDashboardHome/UpcomingAppointments";
import { Loader } from "@/components/Loader/Loader";
import { useAnalytics } from "@/hooks/cms.queries";
import useAuth from "@/hooks/useAuth";

const BusinessDashboardHome = () => {
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { data: analytics, isLoading } = useAnalytics(1);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex gap-5 flex-col 3xl:flex-row">
        <RecentSales data={analytics} />
        <UpcomingAppointments data={analytics} />
      </div>
      <div className="flex gap-5 flex-col 3xl:flex-row">
        <AppointmentsActivity />
        <NextAppointments />
      </div>
      <div className="flex gap-5 flex-col 3xl:flex-row">
        <TopServices />
      </div>
    </div>
  );
};

export default BusinessDashboardHome;
