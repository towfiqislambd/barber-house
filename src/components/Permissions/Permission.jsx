import { Checkbox } from 'antd';
import React from 'react'
import { LuCircleAlert } from "react-icons/lu";

export default function Permission() {
    const trStyle = ""
    const tdStyle = "border broder[#B3BAC5] p-[10px] text-center"
    const thStyle = "p-[12px] text-[#2C2C2C] font-manrope font-semibold"
    const checkboxStyle = ""

    const tabelData = [
        {
            id: 1,
            bookingclient: "Access own calendar"
        },
        {
            id: 2,
            bookingclient: "Access other staff calendars"
        },
        {
            id: 3,
            bookingclient: "Can book appointments"
        },
        {
            id: 4,
            bookingclient: "Can apply discounts to appointments"
        },
        {
            id: 5,
            bookingclient: "Home"
        },
        {
            id: 6,
            bookingclient: "Clients"
        },
        {
            id: 7,
            bookingclient: "Can see client contact info"
        },
        {
            id: 8,
            bookingclient: "Can download clients"
        },
        {
            id: 9,
            bookingclient: "Messages"
        },
        {
            id: 10,
            bookingclient: "Manage own blocked times"
        },
        {
            id: 11,
            bookingclient: "Manage all blocked times"
        },
        {
            id: 12,
            bookingclient: "Manage blocked time types"
        },
        {
            id: 13,
            bookingclient: "Book appointments with team members who are not set up to deliver those services"
        },
        {
            id: 14,
            bookingclient: "Book appointments with resources that are not set up to deliver those services"
        },
    ]

    return (
        <div className='xl:w-[762px]'>
            <div className='mb-[24px]'>
                <h3 className='text-[#1E1E1E] font-outfit text-[24px] xl:text-[28px] font-semibold mb-[9px]'>Permissions</h3>
                <p className='text-[#2C2C2C] font-manrope mb-[24px]'>Choose what areas are accessible to each permission level.</p>
                <div className='flex gap-[9px] items-center bg-[#EBECF0] rounded-[10px] px-[16px] py-[24px] '>
                    <span><LuCircleAlert /></span>
                    <p className='text-[#2C2C2C] font-manrope font-semibold font-14px'>All logged in staff can access the calendar, and owner accounts have full system access.</p>
                </div>
            </div>
            <div className='overflow-auto'>
                <div className='p-[15px] xl:w-full w-max xl:p-[32px] rounded-[16px] bg-white'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className={`text-start ${thStyle} w-[200px]`}>Bookings & Clients</th>
                                <th className={`${thStyle}`}>Basic</th>
                                <th className={`${thStyle}`}>Low</th>
                                <th className={`${thStyle}`}>Med</th>
                                <th className={`${thStyle}`}>High</th >
                                <th className={`${thStyle}`}>Owner</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                tabelData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className={`${tdStyle} text-start`}>{item.bookingclient}</td>

                                        {/* All checkboxes in the first row are checked and red */}
                                        <td className={`${tdStyle} ${index === 0 ? "bg-[#EBECF0]" : "bg-white"}`}>
                                            <Checkbox
                                                className={`${index === 0 ? "accent-shadow pointer-events-none checked bg-[#EBECF0]" : "accent-black"}`}
                                                defaultChecked={index === 0}
                                            />
                                        </td>
                                        <td className={`${tdStyle} ${index === 0 ? "accent-shadow pointer-events-none checked bg-[#EBECF0]" : "bg-white"}`}>
                                            <Checkbox
                                                className={`${index === 0 ? "accent-red checked" : "accent-black"}`}
                                                defaultChecked={index === 0}
                                            />
                                        </td>
                                        <td className={`${tdStyle} ${index === 0 ? "accent-shadow pointer-events-none checked bg-[#EBECF0]" : "bg-white"}`}>
                                            <Checkbox
                                                className={`${index === 0 ? "accent-red checked" : "accent-black"}`}
                                                defaultChecked={index === 0}
                                            />
                                        </td>
                                        <td className={`${tdStyle} ${index === 0 ? "accent-shadow pointer-events-none checked bg-[#EBECF0]" : "bg-white"}`}>
                                            <Checkbox
                                                className={`${index === 0 ? "accent-red checked" : "accent-black"}`}
                                                defaultChecked={index === 0}
                                            />
                                        </td>

                                        {/* Last column - Default checked and red */}
                                        <td className={`${tdStyle} bg-[#EBECF0]`}>
                                            <Checkbox className="accent-shadow pointer-events-none checked" defaultChecked />
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}
