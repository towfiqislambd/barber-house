import React from 'react'
import BookingImg from "../../assets/images/appoirment-img.png"
import Currency from "../../assets/images/currency.png"
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function UserMembership() {


    const memberships = [
        {
            id: 1,
            duration: "4",
            title: "Wax Service package",
            session: "5",
            service: "1",
            save: "25",
            sar: "130"
        },

        {
            id: 1,
            duration: "4",
            title: "Wax Service package",
            session: "5",
            service: "1",
            save: "25",
            sar: "130"
        },

        {
            id: 1,
            duration: "4",
            title: "Wax Service package",
            session: "5",
            service: "1",
            save: "25",
            sar: "130"
        },

        {
            id: 1,
            duration: "4",
            title: "Wax Service package",
            session: "5",
            service: "1",
            save: "25",
            sar: "130"
        },

        {
            id: 1,
            duration: "4",
            title: "Wax Service package",
            session: "5",
            service: "1",
            save: "25",
            sar: "130"
        },

    ]
    return (
        <div>
            <h3 className='text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]'>Select a membership</h3>
            <div className='flex gap-[30px]'>
                <div className='flex-shrink-0 w-[814px]'>
                    <div className="border-[#B0ECEF] border rounded-[16px] py-[48px] px-[50px]">

                        <div className='flex flex-col gap-[20px]'>
                            {
                                memberships.map((member) => (
                                    <div className='flex flex-col gap-[20px]  bg-gradient-to-l from-blue-400 to-blue-500 rounded-[16px] p-[32px] cursor-pointer' key={member.id}>
                                        <div className='py-[6px]'>
                                            <p className='flex gap-[10px] items-center text-white font-manrope font-medium text-[18px]'><span className=''><FaCalendarAlt /></span>{member.duration} months membership</p>
                                        </div>
                                        <div className='flex justify-between gap-[20px]'>
                                            <div>
                                                <h3 className='font-manrope text-[24px] font-bold text-[#FFF] mb-[8px]'>{member.title}</h3>
                                                <ul className='flex gap-[15px]'>
                                                    <li className='text-[#FFF] font-manrope text-[18px] font-medium border-r border-[#FFF] pr-[10px] leading-[15px]'>{member.session} sessions</li>
                                                    <li className='text-[#FFF] font-manrope text-[18px] font-medium pr-[10px] leading-[15px] '>1 service</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className='text-[#FFF] font-manrope text-[28px] font-bold mb-[4px]'>SAR {member.sar}</h2>
                                                <button className='rounded-[4px] py-[4px] px-[16px] bg-white/80 text-[#5EA5E8]  font-manrope font-semibold text-[14px]'>Save {member.save}%</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>

                {/*Start:: Right card  */}
                <div className='flex-shrink-0 w-[400px] border border-[#B0ECEF] rounded-[16px] p-[30px] h-max'>
                    <div className='overflow-hidden rounded-tl-[8px] rounded-tr-[8px] h-[200px] mb-[20px]'>
                        <img src={BookingImg} className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='flex flex-col gap-[64px]'>
                        <div>
                            <h4 className='text-[#545454] mb-[8px] font-outfit text-[24px] font-medium'>Ghalib's Barber Salon</h4>
                            <p className='text-[#545454] text-[18px] font-medium font-manrope'>Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia. See direction</p>
                        </div>
                        <div className='border py-[30px] border-t-[#54D6DC] border-b-[#54D6DC] border-l-0 border-r-0'>
                            <p className='text-[#545454] font-manrope text-[18px] font-medium'>No membership card selected yet</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold'>Total</p>
                            <div className='flex items-center gap-[4px]'>
                                <img className='h-[20px]' src={Currency} alt="" />
                                <span className='text-[#4A4A4A] font-manrope text-[24px] font-semibold'>10</span>
                            </div>
                        </div>
                        <div>
                            <Link to="/userdashboard/usermembercheckout">
                                <button class="py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r from-teal-600 to-cyan-500 rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]">Continue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
