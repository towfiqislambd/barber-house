import React, { useState } from 'react'
import BookingImg from "../../assets/images/appoirment-img.png"
import Currency from "../../assets/images/currency.png"
import { Link } from 'react-router-dom';

export default function GiftCard() {
    const [customAmount, setCustomAmount] = useState(false);
    function CustomeAmount() {
        setCustomAmount(!customAmount)
    }
    const linkStyle = "p-[24px] bg-[#F4F4F4] rounded-[8px] text-center w-full block font-manrope text-[#000] text-[18px]"
    return (
        <div>
            <h3 className='text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]'>Choose an amount for gift cards</h3>
            <div className='flex gap-[30px]'>
                <div className='flex-shrink-0 w-[814px]'>
                    <div>
                        <ul className='flex flex-col gap-[20px] mb-[20px]'>
                            <li>
                                <Link to="/userdashboard/choosepeoplegiftcard" className={linkStyle}>
                                    SAR 100
                                </Link>
                            </li>
                            <li>
                                <Link to="/userdashboard/choosepeoplegiftcard" className={linkStyle}>
                                    SAR 150
                                </Link>
                            </li>
                            <li>
                                <Link to="/userdashboard/choosepeoplegiftcard" className={linkStyle}>
                                    SAR 200
                                </Link>
                            </li>
                            <li>
                                <Link to="/userdashboard/choosepeoplegiftcard" className={linkStyle}>
                                    SAR 250
                                </Link>
                            </li>
                            <li>
                                <Link to="/userdashboard/choosepeoplegiftcard" className={linkStyle}>
                                    SAR 300
                                </Link>
                            </li>
                            <li>
                                <Link to="/userdashboard/choosepeoplegiftcard" className={linkStyle}>
                                    SAR 400
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <button className={`mb-[20px] font-semibold ${linkStyle}`} onClick={CustomeAmount} >Or custom amount</button>
                            {
                                customAmount && <div className='p-[20px] border rounded-[8px]'>
                                    <form action="">
                                        <label htmlFor="" className='font-semibold mb-[20px] block'>Enter a custom gift card card amount between AED 50 and AED 2,000</label>
                                        <input type="text" className='border w-full rounded-[8px] py-[20px] px-[20px] focus:border-[#00B1B9] focus:outline-none' placeholder="AED : 125" />
                                    </form>
                                    <Link to="/userdashboard/choosepeoplegiftcard">
                                        <button class="mt-[48px] py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r from-teal-600 to-cyan-500 rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]">Continue</button>
                                    </Link>
                                </div>
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
                            <p className='text-[#545454] font-manrope text-[18px] font-medium'>No gift card yet</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold'>Total</p>
                            <div className='flex items-center gap-[4px]'>
                                <img className='h-[20px]' src={Currency} alt="" />
                                <span className='text-[#4A4A4A] font-manrope text-[24px] font-semibold'>00</span>
                            </div>
                        </div>
                        {/* <div>
                            <Link to="/userdashboard/usermembercheckout">
                                <button class="py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r from-teal-600 to-cyan-500 rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]">Continue</button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
