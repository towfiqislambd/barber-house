import React, { useEffect, useState, useRef } from 'react'
import { IoTimeOutline } from "react-icons/io5";
import Currency from "../../assets/images/currency.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

export default function UpcommingCard(props) {
    const { id, day, date, time, title, subTitle, price } = props.upcomingData;

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const openFunc = () => {
        setOpen(!open);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='mb-[20px]' key={id}>
                <div className='p-[20px] flex gap-[10px] items-center rounded-[16px] bg-[#FFF] border border-[#DFE1E6] w-[100%] '>
                    <div className='flex flex-col gap-[8px] w-[20%] border-r border-[#DFE1E6] pr-[30px] flex-shrink-0'>
                        <h4 className='text-[#2C2C2C] text-[20px] font-semibold text-center'>{day}</h4>
                        <h3 className='text-[#008A90] font-outfit text-[28px] font-medium text-center'>{date} </h3>
                    </div>
                    <div className='w-[70%] flex justify-between items-center pl-[30px]'>
                        <div>
                            <p className='text-[#008A90] font-manrope text-[18px] font-medium mb-[15px] flex items-center gap-[5px]'><span><IoTimeOutline /></span>{time}</p>
                            <h4 className='text-[#2C2C2C] font-manrope text-[20px] font-semibold leading-[30px] mb-[5px]'>{ title}</h4>
                            <p className='text-[#545454] font-manrope font-medium'>{subTitle}</p>

                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <img className='h-[20px]' src={Currency} alt="" />
                            <span className='text-[#4A4A4A] font-manrope font-semibold text-[20px]'>{ price}</span>
                        </div>
                    </div>
                    <div className='w-[10%] text-right relative '>
                        <button className='px-[10px] py-[10px]' onClick={openFunc}><BsThreeDotsVertical /></button>
                        {open && (
                            <div className='absolute w-[250px] shadow-md bg-white p-[32px] z-10'>
                                <ul className='text-start flex flex-col gap-[32px]'>
                                    <li>
                                        <Link className='text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]'><span className='text-[#008A90] text-[20px]'><MdOutlineWatchLater /></span> Reschedule Booking</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]'><span className='text-[#008A90] text-[20px]'><IoLocationOutline /></span> Edit Location</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]'><span className='text-[#008A90] text-[20px]'><FiHome /></span> Venue Details</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]'><span className='text-[#008A90] text-[20px]'><MdOutlineCancel /></span> Cancel Booking</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
