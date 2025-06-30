import { useState } from "react";
import BookingImg from "../../assets/images/appoirment-img.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import UpcommingCard from "@/components/UserDashboardComponents/UpcommingCard";
import PreviousCard from "@/components/UserDashboardComponents/PreviousCard";
import { useUserAppointmentLists } from "@/hooks/user.queries";

export default function UserAppointments() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { data } = useUserAppointmentLists();
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]">
        Appointments
      </h3>
      <div className="flex gap-[30px]">
        <div className="flex-shrink-0 w-[814px]">
          <div className="">
            <div className="flex bg-primary w-max rounded-[36px] p-[4px] mb-[28px]">
              <button
                className={`py-2 px-4 rounded-[32px] font-manrope font-semibold text-[18px] ${
                  activeTab === "tab1"
                    ? "bg-[#FFF] text-[#2C2C2C]"
                    : "text-[#FFF]"
                }`}
                onClick={() => setActiveTab("tab1")}
              >
                Upcoming
              </button>
              <button
                className={`py-2 px-4 rounded-[32px]  font-manrope font-semibold text-[18px] ${
                  activeTab === "tab2"
                    ? "bg-[#FFF] text-[#2C2C2C]"
                    : "text-[#FFF]"
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                Previous
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "tab1" && (
                <div>
                  <div className="mb-[28px]">
                    <h3 className="text-[#2C2C2C] font-outfit text-[28px] font-medium leading-[33px] flex gap-[15px]">
                      Upcoming{" "}
                      <span className="w-[30px] h-[30px] bg-primary rounded-[100%] text-center flex items-center justify-center text-[#FFF] text-[20px]">
                        {data?.upcoming_appointments?.length}
                      </span>
                    </h3>
                  </div>
                  {data?.upcoming_appointments?.map(upcomingData => (
                    <UpcommingCard
                      upcomingData={upcomingData}
                      key={upcomingData.id}
                      onSelect={setSelectedAppointment}
                      selected={
                        selectedAppointment?.store_services.id ===
                        upcomingData.id
                      }
                    />
                  ))}
                </div>
              )}
              {activeTab === "tab2" && (
                <div>
                  <div className="mb-[28px]">
                    <h3 className="text-[#2C2C2C] font-outfit text-[28px] font-medium leading-[33px] flex gap-[15px]">
                      Previous{" "}
                      <span className="w-[30px] h-[30px] bg-primary rounded-[100%] text-center flex items-center justify-center text-[#FFF] text-[20px]">
                        {data?.previous_appointments?.length}
                      </span>
                    </h3>
                  </div>
                  {data?.previous_appointments?.map(previousData => {
                    <PreviousCard
                      previousData={previousData}
                      key={previousData.id}
                      onSelect={setSelectedAppointment}
                      selected={selectedAppointment?.id === previousData.id}
                    />;
                  })}
                  {data?.previous_appointments?.length === 0 && (
                    <p className="text-black">No Previous Appointment Found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/*Start:: Right card  */}
        {selectedAppointment && (
          <div className="flex-shrink-0 w-[400px] h-[450px] border border-borderColorLight rounded-[16px] p-[30px]">
            <div className="overflow-hidden rounded-tl-[8px] rounded-tr-[8px] h-[200px]">
              <img
                src={BookingImg}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="mt-[16px] mb-[32px]">
              <button
                className={`${
                  selectedAppointment?.status.toLowerCase() === "cancelled"
                    ? " bg-red-600"
                    : "bg-primary"
                } rounded-[24px] text-white px-[12px] py-[6px] flex items-center gap-[5px]`}
              >
                <span>
                  <IoMdCheckmarkCircleOutline />
                </span>{" "}
                Booking {selectedAppointment?.status}
              </button>
            </div>

            <div className="flex flex-col gap-[64px]">
              <div>
                <h4 className="text-[#545454] mb-[8px] font-outfit text-[24px] font-medium">
                  {selectedAppointment?.online_store?.name ?? "Salon Name"}
                </h4>
                <p className="text-[#545454] text-[18px] font-medium font-manrope">
                  {selectedAppointment?.online_store?.address ??
                    "Address not available"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
