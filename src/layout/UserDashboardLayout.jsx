import UserProfileNavbar from '@/shared/UserProfile/UserProfileNavbar';
import UserProfileSidebar from '@/shared/UserProfile/UserProfileSidebar';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { LiaTimesCircle } from "react-icons/lia";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

export default function UserDashboardLayout() {
    const [salesetting, setSalesetting] = useState(false);

    const saleMobileMenuActive = () => {
        setSalesetting(!salesetting)
    }


    return (
        <>
            <div className='bg-[#FCFCFC] min-h-[100vh]'>

                <div className='sticky top-0 w-full bg-[#FCFCFC] z-[999]' >
                    <UserProfileNavbar />
                </div> 

                <div>
                    <div className='relative '>
                        <div className={`fixed overflow-y-auto h-full left-0 top-[88px] w-[300px] bg-[#F4F9FA] border-r border-[#008A90] p-[30px] rounded-tr-[12px] z-10 transition-all duration-300 ${salesetting ? "translate-x-[0%]" : "translate-x-[-100%] xl:translate-x-[0%]"} `}>
                            <UserProfileSidebar />
                            <button onClick={() => setSalesetting(false)} className='absolute block xl:hidden text-red-600 top-[3px] right-[3px] text-[30px] z-10'><LiaTimesCircle />
                            </button>
                        </div>

                        {salesetting && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-5"
                                onClick={() => setSalesetting(false)}
                            ></div>
                        )}

                        <div>
                            <button onClick={saleMobileMenuActive} className='absolute top-[88px] text-[24px] z-0 bg-[#008A90] text-white py-[2px] px-[3px] rounded-tr-[5px] rounded-br-[5px] xl:hidden block'><HiMiniBars3BottomRight /></button>
                        </div>
                    </div>

                    <div className='xl:ml-[300px] pt-[60px]  xl:pl-[60px] pb-[100px]'>
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}
