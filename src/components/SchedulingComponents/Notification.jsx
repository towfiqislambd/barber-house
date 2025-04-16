import React from 'react'
import { Link } from 'react-router-dom'

export default function Notification() {
    return (
        <div>
            <div className='flex gap-[20px] justify-end container'>
                <Link to="/businessDashboard/scheduling">
                    <button className='border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-[20px] font-semibold p-[14px] min-w-[218px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95'>Close</button>
                </Link>
                <button className='border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-[20px] font-semibold p-[14px] min-w-[218px] hover:scale-95 transition-all duration-300'>Save</button>
            </div>
            <div className='w-[700px] mx-auto'>

            </div>


        </div>
    )
}
