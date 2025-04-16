import React from 'react'
import BookingImg from "../../assets/images/appoirment-img.png"
import Currency from "../../assets/images/currency.png"
import { Link } from 'react-router-dom';

export default function ChoosePeopleGiftCard() {
    const linkStyle = "p-[24px] bg-[#F4F4F4] rounded-[8px] text-center w-full block font-manrope text-[#000] text-[18px]"
    return (
        <div>
            <h3 className='text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]'> Choose people for gift cards</h3>
            <div className='flex gap-[30px]'>
                <div className='flex-shrink-0 w-[814px]'>
                    <div>
                        <ul className='flex flex-col gap-[20px] mb-[20px]'>
                            <li>
                                <Link to="/userdashboard/sendgiftcard" className={linkStyle}>
                                    <h4 className='mb-[8px] text-[#000] font-manrope text-[20px] font-semibold'>Send as a gift</h4>
                                    <p className='text-[#545454] font-semibold font-manrope'>Send to family, friends or anyone else</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/userdashboard/sendgiftcard" className={linkStyle}>
                                    <h4 className='mb-[8px] text-[#000] font-manrope text-[20px] font-semibold'>Send to my account</h4>
                                    <p className='text-[#545454] font-semibold font-manrope'>Add to my profile for spending on me</p>
                                </Link>
                            </li>

                        </ul>

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

                        <div class="flex justify-between">
                            <div><p class="mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold">Gift card</p><p class="text-[#545454] font-manrope font-medium">Valid for 6 months</p></div><div class="flex items-center gap-[4px]">
                                <img src={Currency} className='h-[20px]' alt="" />
                                <span class="text-[#4A4A4A] font-manrope text-[24px] font-semibold">100</span></div>
                        </div>

                        <div className='flex justify-between'>
                            <p className='mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold'>Total</p>
                            <div className='flex items-center gap-[4px]'>
                                <img className='h-[20px]' src={Currency} alt="" />
                                <span className='text-[#4A4A4A] font-manrope text-[24px] font-semibold'>100</span>
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
