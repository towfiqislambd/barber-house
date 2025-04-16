import React from 'react'
import { Switch } from 'antd';
import { LuCircleAlert } from 'react-icons/lu';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Combinssion() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div className='xl:w-[762px]'>
            <div>
                <h3 className='text-[#1E1E1E] font-outfit text-[24px] xl:text-[28px] font-semibold mb-[9px]'>Commissions</h3>
                <p className='text-[#2C2C2C] font-manrope mb-[24px]'>Manage default global commission settings to be applied to new team members.</p>

            </div>
            <div className='p-[15px] xl:p-[32px] bg-white rounded-[16px]'>
                <div className='flex flex-col gap-[32px]'>
                    <div className='flex justify-between xl:items-center gap-[10px] xl:gap-[60px]'>
                        <div>
                            <h4 className='text-[#1E1E1E] font-manrope text-[18px] font-medium leaiding-[27px] mb-[8px]'>Deduct discounts</h4>
                            <p className='text-[#757575] font-manrope font-medium'>Deduct discounts applied to sale price of any product, service, membership and gift card, prior to calculating commission</p>
                        </div>
                        <div>
                            <Switch onChange={onChange} />
                        </div>
                    </div>
                    <div className='flex justify-between xl:items-center gap-[10px] xl:gap-[60px]'>
                        <div>
                            <h4 className='text-[#1E1E1E] font-manrope text-[18px] font-medium leaiding-[27px] mb-[8px]'>Deduct taxes</h4>
                            <p className='text-[#757575] font-manrope font-medium'>Deduct taxes from sale price prior to calculating commission</p>
                        </div>
                        <div>
                            <Switch onChange={onChange} />
                        </div>
                    </div>
                    <div className='flex justify-between xl:items-center gap-[10px] xl:gap-[60px]'>
                        <div>
                            <h4 className='text-[#1E1E1E] font-manrope text-[18px] font-medium leaiding-[27px] mb-[8px]'>Deduct service cost</h4>
                            <p className='text-[#757575] font-manrope font-medium'>Deduct service cost from sale price prior to calculating commission</p>
                        </div>
                        <div>
                            <Switch onChange={onChange} />
                        </div>
                    </div>
                    <div className='flex justify-between xl:items-center gap-[10px] xl:gap-[60px]'>
                        <div>
                            <h4 className='text-[#1E1E1E] font-manrope text-[18px] font-medium leaiding-[27px] mb-[8px]'>Deduct product cost</h4>
                            <p className='text-[#757575] font-manrope font-medium'>Deduct product cost from sale price prior to calculating commission</p>
                        </div>
                        <div>
                            <Switch onChange={onChange} />
                        </div>
                    </div>
                    <div className='flex justify-between xl:items-center gap-[10px] xl:gap-[60px]'>
                        <div>
                            <h4 className='text-[#1E1E1E] font-manrope text-[18px] font-medium leaiding-[27px] mb-[8px]'>Earn commission on services paid for with a membership</h4>
                            <p className='text-[#757575] font-manrope font-medium'>Commission is earned on services paid for with a membership</p>
                        </div>
                        <div>
                            <Switch onChange={onChange} />
                        </div>
                    </div>
                    <div className='flex justify-between xl:items-center gap-[10px] xl:gap-[60px]'>
                        <div>
                            <h4 className='text-[#1E1E1E] font-manrope text-[18px] font-medium leaiding-[27px] mb-[8px]'>Earn commissions on fully paid invoices</h4>
                            <p className='text-[#757575] font-manrope font-medium'>Commission is only applied on invoices once they are marked as fully paid</p>
                        </div>
                        <div>
                            <Switch className='' onChange={onChange} />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[9px] items-start bg-[#EBECF0] rounded-[10px] px-[16px] py-[24px] mt-[32px]'>
                    <span className='mt-[5px]'><LuCircleAlert /></span>
                    <div>
                        <p className='text-[#2C2C2C] font-manrope font-semibold font-14px mb-[8px]'>You can customise commission settings per team member</p>
                        <a href="#" className='text-[#2C2C2C] text-[14px] font-semibold flex items-center gap-[5px]'>View <span><FaLongArrowAltRight /></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
