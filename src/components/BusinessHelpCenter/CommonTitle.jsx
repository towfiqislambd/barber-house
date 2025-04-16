import React from 'react'

export default function CommonTitle({ title, text }) {
    return (
        <>
            <h4 className='text-[#1E1E1E] font-outfit text-[32px] xl:text-[40px] font-semibold mb-[12px]'>{title}</h4>
            <p className='text-[#545454] font-manrope text-[16px] xl:text-[22px]'>{text}</p>
        </>
    )
}
