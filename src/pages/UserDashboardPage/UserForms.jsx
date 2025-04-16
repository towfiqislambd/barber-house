import React from 'react'
import FromCartImg from "../../assets/images/form-card-img.png"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function UserForms() {
  return (
    <div className='px-[15px]'>
      <h3 className='text-[#2C2C2C] font-outfit pl-[50px] xl:pl-[0px] text-[24px] xl:text-[36px] font-medium mb-[40px]'>Forms</h3>
      <div className='flex flex-col xl:flex-row gap-[20px] xl:gap-[30px] '>
        <div className='flex flex-col gap-[15px] xl:gap-[56px]'>
          <div className='xl:w-[600px] flex-shrink-0'>
            <h4 className='mb-[32px] text-[#2C2C2C] font-outfit font-medium text-[24px]'>Joined membership</h4>
            <div className='flex flex-col xl:flex-row '>
              <div className='w-full xl:w-[221px] xl:rounded-tl-[16px] xl:rounded-bl-[16px] overflow-hidden flex-shrink-0'>
                <img className='w-full h-full object-cover' src={FromCartImg} alt="" />
              </div>
              <div className='p-[15px] xl:p-[30px] border xl:rounded-tr-[16px] xl:rounded-br-[16px]  w-full'>
                <h4 className='mb-[4px] text-[#1E1E1E] font-outfit text-[24px] font-semibold'>Trendy Trim</h4>
                <h5 className='mb-[16px] text-[#008A90] text-[18px] font-semibold'>Membership</h5>
                <p className='text-[#545454] font-manrope text-[18px] font-medium' >Joined in Feb 03, 2025</p>
              </div>
            </div>
          </div>
          <div className='xl:w-[600px] flex-shrink-0'>
            <h4 className='mb-[20px] xl:mb-[32px] text-[#2C2C2C] font-outfit font-medium text-[24px]'>Sent gift card</h4>
            <div className='flex flex-col xl:flex-row'>
              <div className='w-full xl:w-[211px] xl:rounded-tl-[16px] xl:rounded-bl-[16px] overflow-hidden flex-shrink-0'>
                <img className='w-full h-full object-cover' src={FromCartImg} alt="" />
              </div>
              <div className='p-[30px] border xl:rounded-tr-[16px] xl:rounded-br-[16px]  w-full'>
                <h4 className='mb-[4px] text-[#1E1E1E] font-outfit text-[24px] font-semibold'>Trendy Trim</h4>
                <h5 className='mb-[16px] text-[#008A90] text-[18px] font-semibold'>Gift card</h5>
                <p className='text-[#545454] font-manrope text-[18px] font-medium' >Sent in Feb 03, 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className='xl:w-[600px] px-[15px] xl:px-[40px] pt-[20px] xl:pt-[56px] pb-[150px]  border rounded-[16px]'>
          <div className='mb-[15px] xl:mb-[32px]'>
            <button className='flex items-center gap-[10px] text-[#FFF] font-manrope font-medium py-[6px] px-[16px] bg-[#008C4F] rounded-[24px]'><span><IoMdCheckmarkCircleOutline /></span> Membership</button>
          </div>

          <div className='mb-[20px] xl:mb-[40px]'>
            <h3 className='font-outfit text-[22px] xl:text-[32px] text-[#2C2C2C] font-medium'>Membership</h3>
            <ul className='flex flex-col xl:flex-row gap-[15px] list-disc list-inside'>
              <li className='text-[#545454] font-manrope text-[16px] font-medium list-none'>Joined on the membership Feb 3, 2025 </li>
              <li className='text-[#545454] font-manrope text-[16px] font-medium'>Trendy Trim</li>
            </ul>
          </div>
          <div className='mb-[20px] xl:mb-[32px]'>
            <h3 className='text-[#2C2C2C] font-manrope text-[20px] xl:text-[24px] font-semibold'>Membership Form</h3>
          </div>
          <div className='flex flex-col gap-[20px] xl:gap-[32px]'>
            <div>
              <h4 className='text-[#2C2C2C] font-manrope font-semibold xl:text-[18px]'>Full name</h4>
              <p className='text-[#545454] font-manrope xl:text-[18px] font-medium'>Tariqul Islam Fahim</p>
            </div>
            <div className='flex flex-col xl:flex-row justify-between gap-[15px]'>
              <div>
                <h4 className='text-[#2C2C2C] font-manrope font-semibold xl:text-[18px]'>Full name</h4>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-medium'>Tariqul Islam Fahim</p>
              </div>
              <div>
                <h4 className='text-[#2C2C2C] font-manrope font-semibold xl:text-[18px]'>Date of birth</h4>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-medium'>7 Nov, 2005</p>
              </div>
            </div>
            <div className='flex flex-col xl:flex-row justify-between gap-[15px]'>
              <div>
                <h4 className='text-[#2C2C2C] font-manrope font-semibold xl:text-[18px]'>Mobile number</h4>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-medium'>+966 14 123 4567</p>
              </div>
              <div>
                <h4 className='text-[#2C2C2C] font-manrope font-semibold xl:text-[18px]'>Gender</h4>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-medium'>Male</p>
              </div>
            </div>
            <div className=''>

              <h4 className='text-[#2C2C2C] font-manrope font-semibold xl:text-[18px]'>Address</h4>
              <p className='text-[#545454] font-manrope xl:text-[18px] font-medium'>Al Qiblatayn, Medina 42312, Saudi Arabia</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
