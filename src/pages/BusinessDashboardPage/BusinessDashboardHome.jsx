import AppointmentsActivity from "@/components/BusinessDashboard/BusinessDashboardHome/AppointmentsActivity";
import NextAppointments from "@/components/BusinessDashboard/BusinessDashboardHome/NextAppointments";
import RecentSales from "@/components/BusinessDashboard/BusinessDashboardHome/RecentSales";
import TopServices from "@/components/BusinessDashboard/BusinessDashboardHome/TopServices";
import TopTeamMember from "@/components/BusinessDashboard/BusinessDashboardHome/TopTeamMember";
import UpcomingAppointments from "@/components/BusinessDashboard/BusinessDashboardHome/UpcomingAppointments";


const BusinessDashboardHome = () => {
    return (
        <div className="space-y-5">
            <div className="flex gap-5 flex-col 3xl:flex-row">
                <RecentSales />
                <UpcomingAppointments />
            </div>
            <div className="flex gap-5 flex-col 3xl:flex-row">
                <AppointmentsActivity />
                <NextAppointments />
            </div>
            <div className="flex gap-5 flex-col 3xl:flex-row">
                <TopServices />
                <TopTeamMember />
            </div>
        </div>
    );
};

export default BusinessDashboardHome;