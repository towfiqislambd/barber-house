import React, { useState } from 'react'
import BookingImg from "../../assets/images/appoirment-img.png"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Currency from "../../assets/images/currency.png";
import { FaAngleRight } from "react-icons/fa6";
import UpcommingCard from '@/components/UserDashboardComponents/UpcommingCard';
import PreviousCard from '@/components/UserDashboardComponents/PreviousCard';
import { Link } from 'react-router-dom';

const upcomingAppointments = [
  {
    id: 1,
    day: "Mon",
    date: "21 Janu",
    time: "10:00 AM - 10:30 AM",
    title: "Haircut & Styling",
    subTitle: "Basic Haircut Package",
    price: 25,
  },
  {
    id: 2,
    day: "Wed",
    date: "23 Janu",
    time: "12:00 PM - 12:45 PM",
    title: "Full Body Massage",
    subTitle: "Relaxation & Stress Relief",
    price: 50,
  },
  {
    id: 3,
    day: "Fri",
    date: "21 Janu",
    time: "3:00 PM - 3:30 PM",
    title: "Wax Services 01 (1 item)",
    subTitle: "Wax Services 01 (1 item)",
    price: 10,
  },
  {
    id: 4,
    day: "Sat",
    date: "24 Janu",
    time: "2:00 PM - 2:30 PM",
    title: "Facial Treatment",
    subTitle: "Deep Cleansing & Moisturizing",
    price: 30,
  },
  {
    id: 5,
    day: "Sun",
    date: "25 Janu",
    time: "5:00 PM - 6:00 PM",
    title: "Manicure & Pedicure",
    subTitle: "Nail Care & Polish",
    price: 40,
  },
];

const previousAppointments = [
  {
    id: 1,
    day: "Mon",
    date: "20 Feb",
    time: "10:00 AM - 10:30 AM",
    title: "Haircut & Styling",
    subTitle: "Basic Haircut Package",
    price: 25,
  },
  {
    id: 2,
    day: "Wed",
    date: "21 Feb",
    time: "12:00 PM - 12:45 PM",
    title: "Full Body Massage",
    subTitle: "Relaxation & Stress Relief",
    price: 50,
  },
  {
    id: 3,
    day: "Fri",
    date: "23 Feb",
    time: "3:00 PM - 3:30 PM",
    title: "Wax Services 01 (1 item)",
    subTitle: "Wax Services 01 (1 item)",
    price: 10,
  },
  {
    id: 4,
    day: "Sat",
    date: "24 Feb",
    time: "2:00 PM - 2:30 PM",
    title: "Facial Treatment",
    subTitle: "Deep Cleansing & Moisturizing",
    price: 30,
  },
  {
    id: 5,
    day: "Sun",
    date: "25 Feb",
    time: "5:00 PM - 6:00 PM",
    title: "Manicure & Pedicure",
    subTitle: "Nail Care & Polish",
    price: 40,
  },
];



export default function UserAppointments() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div>
      <h3 className='text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]'>Appointments</h3>
      <div className='flex gap-[30px]'>
        <div className='flex-shrink-0 w-[814px]'>
          <div className="">
            <div className="flex bg-primary w-max rounded-[36px] p-[4px] mb-[28px]">
              <button
                className={`py-2 px-4 rounded-[32px] font-manrope font-semibold text-[18px] ${activeTab === "tab1" ? "bg-[#FFF] text-[#2C2C2C]" : "text-[#FFF]"
                  }`}
                onClick={() => setActiveTab("tab1")}
              >
                Upcoming
              </button>
              <button
                className={`py-2 px-4 rounded-[32px]  font-manrope font-semibold text-[18px] ${activeTab === "tab2" ? "bg-[#FFF] text-[#2C2C2C]" : "text-[#FFF]"
                  }`}
                onClick={() => setActiveTab("tab2")}
              >
                Previous
              </button>
            </div>

            <div className="mt-4">

              {activeTab === "tab1" && <div>
                <div className='mb-[28px]'>
                  <h3 className='text-[#2C2C2C] font-outfit text-[28px] font-medium leading-[33px] flex gap-[15px]'>Upcomming <span className='w-[30px] h-[30px] bg-primary rounded-[100%] text-center flex items-center justify-center text-[#FFF] text-[20px]'>4</span></h3>
                </div>
                {
                  upcomingAppointments.map((upcomingData) => (
                    <UpcommingCard upcomingData={upcomingData} key={upcomingData.id} />
                  ))
                }


              </div>}
              {activeTab === "tab2" && <div>
                <div className='mb-[28px]'>
                  <h3 className='text-[#2C2C2C] font-outfit text-[28px] font-medium leading-[33px] flex gap-[15px]'>Previous <span className='w-[30px] h-[30px] bg-primary rounded-[100%] text-center flex items-center justify-center text-[#FFF] text-[20px]'>4</span></h3>
                </div>
                {
                  previousAppointments.map((previousData) => (
                    <PreviousCard previousData={previousData} key={previousData.id} />
                  ))
                }
              </div>}
            </div>
          </div>
        </div>



        {/*Start:: Right card  */}
        <div className='flex-shrink-0 w-[400px] border border-borderColorLight rounded-[16px] p-[30px]'>
          <div className='overflow-hidden rounded-tl-[8px] rounded-tr-[8px] h-[200px]'>
            <img src={BookingImg} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='mt-[16px] mb-[32px]'>
            <button className='bg-primary rounded-[24px] text-white px-[12px] py-[6px] flex items-center gap-[5px]'> <span><IoMdCheckmarkCircleOutline /></span> Booking Confirmed</button>
          </div>
          <div className='flex flex-col gap-[64px]'>
            <div>
              <h4 className='text-[#545454] mb-[8px] font-outfit text-[24px] font-medium'>Ghalib's Barber Salon</h4>
              <p className='text-[#545454] text-[18px] font-medium font-manrope'>Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia. See direction</p>
            </div>

            <div>
              <h3 className='text-[#2C2C2C] mb-[15px] text-[20px] font-medium font-outfit'>Overview</h3>
              <div className='flex justify-between mb-[32px]'>
                <div>
                  <p className='mb-[5px] text-[#2C2C2C] font-manrope text-[18px] font-medium'>Wax Services 01 (1 item)</p>
                  <p className='text-[#2C2C2C] font-manrope text-[16px] font-medium'>30 mins</p>
                </div>
                <div className='flex items-center gap-[4px]'>
                  <img className='h-[20px]' src={Currency} alt="" />
                  <span className='text-[#4A4A4A] font-manrope text-[20px] font-semibold'>10</span>
                </div>

              </div>
              <div className='flex justify-between'>
                <p className='mb-[5px] text-[#2C2C2C] font-manrope text-[18px] font-medium'>Total with tax</p>
                <div className='flex items-center gap-[4px]'>
                  <img className='h-[20px]' src={Currency} alt="" />
                  <span className='text-[#4A4A4A] font-manrope text-[20px] font-semibold'>10</span>
                </div>
              </div>
            </div>

            <div >
              <h4 className='text-[#2C2C2C] font-outfit text-[20px] font-medium mb-[12px]'>Forms</h4>
              <div className='flex flex-col gap-[15px]'>
                <div className='flex items-center justify-between'>
                  <p className='text-[#545454] font-manrope text-[18px] font-medium'>Gift card</p>
                  <div>
                    <Link to="/userdashboard/giftcard">
                      <button className='text-[#545454] font-manrope font-semibold rounded-[8px] border border-primary px-[16px] py-[8px] flex items-center gap-[5px]'>Buy <span><FaAngleRight /></span></button>
                    </Link>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-[#545454] font-manrope text-[18px] font-medium'>Membership</p>
                  <div>
                    <Link to="/userdashboard/usermembership">
                      <button className='text-[#545454] font-manrope font-semibold rounded-[8px] border border-primary px-[16px] py-[8px] flex items-center gap-[5px]'>
                        Buy
                        <span> <FaAngleRight /></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className='mb-[12px] text-[#2C2C2C] font-outfit text-[20px] font-medium'>Cancellation Policy</h4>
              <p className='text-[#545454] font-manrope text-[18px] font-medium'>Must cancel 24 hours in advance to avoid a SAR 25 cancellation fee.</p>
            </div>
            <div>
              <p className='text-[#545454] font-manrope text-[18px] font-medium'>Booking Ref: FD19A9D1 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
