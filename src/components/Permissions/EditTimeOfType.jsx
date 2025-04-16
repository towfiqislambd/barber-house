import React from 'react'
import { Link } from 'react-router-dom'

export default function EditTimeOfType() {

    return (
        <div className='pt-[40px]'>
            <div className='flex gap-[20px] justify-end container mb-[40px]'>
                <Link to="/businessDashboard/permissions">
                    <button className='border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95'>Close</button>
                </Link>
                <button className='border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:scale-95 transition-all duration-300'>Save</button>
            </div>

            <div className='xl:w-[700px] mx-auto'>
                <h3 className='mb-[10px] text-[#1E1E1E] font-outfit text-[28px] xl:text-[36px] font-semibold xl:leading-[43px]'>Add time off type</h3>
                <p className='mb-[32px]'>Choose the name of the time off type</p>
                <form action="">
                    <div className=''>
                        <label htmlFor="" className='mb-[10px] text-[#2C2C2C] font-manrope font-semibold block'>Reason</label>
                        <input type="text" placeholder='e.g. Parental leave' className='py-[16px] px-[20px] border rounded-[8px] w-full focus:border-[#00B1B9] focus:outline-none' />
                    </div>
                </form>
            </div>
        </div>
    )
}
