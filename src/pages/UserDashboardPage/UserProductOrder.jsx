import React from 'react'
import Select from 'react-select';
import { IoSearchOutline } from "react-icons/io5";
import ProductImg from "../../assets/images/form-card-img.png"
import CurrencyIcon from "../../assets/images/currency.png"
import { RiDeleteBin6Line } from "react-icons/ri";


export default function UserProductOrder() {

  const options = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'Jun', label: 'Jun' },
    { value: 'Jully', label: 'Jully' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ]

  const tdStyle = "py-[10px] text-[#5C5C5C] text-[16px] font-medium "
  const productImg = "w-[60px] h-[60px] rounded-[5px] object-cover"


  return (
    <div>
      <h3 className='text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]'>Product Order</h3>
      <div className='max-w-[1200px] mx-auto'>
        <h5 className='mb-[30px] text-[#333] font-manrope text-[18px] font-semibold leading-[29px]'>PURCHASE HISTORY</h5>
        <div className='flex  justify-between'>
          <div className='w-[400px]'>
            <form action="">
              <div className='relative'>
                <input
                  className="border py-[13px] px-[14px] rounded-[5px] focus:border-primary focus:outline-none w-full ps-[50px]"
                  type="search"
                  placeholder="Search"
                />
                <button className='absolute left-[15px] top-[50%] translate-y-[-50%] bg-[#FFF]'><IoSearchOutline /></button>
              </div>
            </form>
          </div>
          <div className='w-[200px]'>
            <Select options={options}
              placeholder="Select month"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  border: "none",
                }),
              }}
              className="w-[100%] text-[18px] text-[#2C2C2C] border-[1px] border-[#bbc2c7] rounded-[8px] py-[7px] px-[10px] font-semibold"
            />
          </div>
        </div>
        <p className='text-[#333] font-manrope text-[18px] mb-[12px] font-semibold mt-[30px]'>December, 2024</p>
        <div>
          <table class="w-full">
            <thead className='border-b border-b-[#cccbcb] '>
              <tr className=''>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Image</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Product</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Order Date</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Delivery Date</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Quantity</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Total</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Status</th>
                <th className='text-[#333] font-semibold font-manrope py-[20px] text-start'>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className='border-b text-start'>
                <td className={tdStyle}><img className={productImg} src={ProductImg} alt="" /></td>
                <td className={tdStyle}>Malcolm Lockyer</td>
                <td className={tdStyle}>12/16/2024</td>
                <td className={tdStyle}>12/29/2024</td>
                <td className={tdStyle}>08</td>
                <td className={tdStyle}><span className='flex gap-[5px]'>02 <img src={CurrencyIcon} alt="" /></span> </td>
                <td className={tdStyle}><span class="inline-flex items-center rounded-md text-[#5C5C5C] bg-[#ACFDCE] px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10">Completed</span></td>
                <td className={tdStyle}><span className='text-red-500 text-[25px]'><RiDeleteBin6Line /></span></td>
              </tr>
              <tr className='border-b text-start'>
                <td className={tdStyle}><img className={productImg} src={ProductImg} alt="" /></td>
                <td className={tdStyle}>Malcolm Lockyer</td>
                <td className={tdStyle}>12/16/2024</td>
                <td className={tdStyle}>12/29/2024</td>
                <td className={tdStyle}>05</td>
                <td className={tdStyle}><span className='flex gap-[5px]'>02 <img src={CurrencyIcon} alt="" /></span></td>
                <td className={tdStyle}><span class="inline-flex items-center rounded-md bg-[#FFAFAF] text-[#5C5C5C] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Cancle</span></td>
                <td className={tdStyle}><span className='text-red-500 text-[25px]'><RiDeleteBin6Line /></span></td>
              </tr>
              <tr className='border-b text-start'>
                <td className={tdStyle}><img className={productImg} src={ProductImg} alt="" /></td>
                <td className={tdStyle}>Malcolm Lockyer</td>
                <td className={tdStyle}>12/16/2024</td>
                <td className={tdStyle}>12/29/2024</td>
                <td className={tdStyle}>02</td>
                <td className={tdStyle}><span className='flex gap-[5px]'>02 <img src={CurrencyIcon} alt="" /></span></td>
                <td className={tdStyle}><span class="inline-flex items-center rounded-md bg-[#FFDDB7] px-2 py-1 text-xs font-medium text-[#5C5C5C] ring-1 ring-inset ring-gray-500/10">Pending</span></td>
                <td className={tdStyle}><span className='text-red-500 text-[25px]'><RiDeleteBin6Line /></span></td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className='pt-[50px] text-center'>
          <h4 className='font-semibold'>Here will be pagination</h4>
        </div>
      </div>
    </div>
  )
}
