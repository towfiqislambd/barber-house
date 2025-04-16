import React, { useState } from 'react'
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import PaymentMethod from '@/components/SchedulingComponents/PaymentMethod';
import Taxrates from '@/components/SchedulingComponents/Taxrates';
import Receipts from '@/components/SchedulingComponents/Receipts';
import Permission from '@/components/Permissions/Permission';
import TimeOfTypes from '@/components/Permissions/TimeOfTypes';
import Combinssion from '@/components/Permissions/Combinssion';


export default function PermissionPage() {
    const [activeTab, setActiveTab] = useState("permissioncomponent");
    return (
        <>
            <div className='mb-[20px] xl:mb-[45px] mt-[40px] xl:mt-[65px] xl:pl-[100px] 3xl:pl-[300px]'>
                <div className='flex items-center'>
                    <Link to="/businessDashboard/settingsales">
                        <button className='text-[#2C2C2C] font-manrope font-medium border border-[#757575] rounded-[24px] mr-[16px]   xl:w-[100px] flex-shrink-0 flex items-center gap-[6px] py-[5px] xl:py-[8px] px-[12px]'><span><FaArrowLeftLong /></span> Back</button>
                    </Link>
                    <ul className='flex gap-[5px] xl:gap-[10px] items-center'>
                        <li className='text-[#757575] font-manrope font-medium flex-shrink-0'>Workspace settings</li>
                        <li className='text-[#757575] font-manrope font-medium flex-shrink-0'><LiaAngleRightSolid /></li>
                        <li className='text-[#2C2C2C] font-manrope font-medium flex-shrink-0'>Team</li>
                    </ul>
                </div>
            </div>

            <section className="flex flex-col xl:flex-row gap-[20px] xl:gap-10 xl:pl-[100px] 3xl:pl-[300px]">
                <div className="bg-white rounded-xl p-[10px] xl:p-6 h-full flex-shrink-0">
                    <h3 className="my-[10px] xl:my-[15px] ml-5 text-[20px] font-bold">Team</h3>
                    <div className="border-t pb-5"></div>
                    <ul className="text-lg font-medium">
                        <button
                            onClick={() => setActiveTab("permissioncomponent")}
                            className={`text-[16px] xl:text-[18px] mb-[4px] px-[10px] xl:px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${activeTab === "permissioncomponent"
                                ? "text-[#2C2C2C] bg-[#E7E8FF]"
                                : "text-[#2C2C2C]"
                                }`}
                        >
                            Permissions
                        </button>
                        <button
                            onClick={() => setActiveTab("timeoftype")}
                            className={`text-[16px] xl:text-[18px] mb-[4px] px-[10px] xl:px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${activeTab === "timeoftype"
                                ? "text-[#2C2C2C] bg-[#E7E8FF]"
                                : "text-[#2C2C2C]"
                                }`}
                        >
                            Time off types
                        </button>

                        <button
                            onClick={() => setActiveTab("combinission")}
                            className={`text-[16px] xl:text-[18px] mb-[4px] px-[10px] xl:px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${activeTab === "combinission"
                                ? "text-[#2C2C2C] bg-[#E7E8FF]"
                                : "text-[#2C2C2C]"
                                }`}
                        >
                            Commissions
                        </button>

                    </ul>
                </div>
                <div className="flex-grow">
                    {activeTab === "permissioncomponent" && <Permission />}
                    {activeTab === "timeoftype" && <TimeOfTypes />}
                    {activeTab === "combinission" && <Combinssion />}
                </div>
            </section>
        </>
    )
}
