import React from 'react'
import { Link } from 'react-router-dom'
import { Checkbox } from '@/components/ui/checkbox';

export default function EditReceipt() {
  const listStyle = "flex gap-[10px] items-center text-[#2C2C2C] font-manrope font-medium py-[5px] xl:py-[9px]"
  return (
    <div className='container mb-[40px] pt-[40px] xl:mb-[100px]'>
      <div className='flex gap-[20px] justify-end container mb-[50px]'>
        <Link to="/businessDashboard/settingsales">
          <button className='border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95'>Close</button>
        </Link>
        <button className='border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:scale-95 transition-all duration-300'>Save</button>
      </div>

      <div className='xl:w-[880px] mx-auto'>
        <div className='px-[0px] xl:p-[32px] rounded-[16px]'>
          <div className='flex justify-between items-center mb-[24px]'>
            <div>
              <h4 className='text-[#2C2C2C] font-outfit text-[24px] font-medium mb-[16px]'>Edit receipt settings</h4>
              <p className='text-[#545454] font-manrope font-medium'>Set the tax name and percentage rate. To apply this to your products and services, adjust your tax defaults settings.</p>
            </div>
          </div>
          <div className='mb-[20px]'>
            <ul className='flex flex-col gap-[8px]'>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Show client mobile and email
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Show client address
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Show team members on sale receipt
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-[10px] xl:gap-[32px]'>
            <div class="">
              <label for="" class="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block">Receipt title</label>
              <input placeholder="Sales" class="py-[12px] xl:py-[16px] px-[20px] border rounded-[8px] w-full focus:border-[#00B1B9] focus:outline-none" type="text" />
            </div>
            <div class="">
              <label for="" class="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block">Receipt custom line 1</label>
              <input placeholder="enter name" class="py-[12px] xl:py-[16px] px-[20px] border rounded-[8px] w-full focus:border-[#00B1B9] focus:outline-none" type="text" />
            </div>
            <div class="">
              <label for="" class="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block">Receipt custom line 2</label>
              <input placeholder="enter name" class="py-[12px] xl:py-[16px] px-[20px] border rounded-[8px] w-full focus:border-[#00B1B9] focus:outline-none" type="text" />
            </div>
            <div class="">
              <label for="" class="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block">Receipt footer</label>
              <input placeholder="enter name" class="py-[12px] xl:py-[16px] px-[20px] border rounded-[8px] w-full focus:border-[#00B1B9] focus:outline-none" type="text" />
            </div>
          </div>
          <div className='mt-[20px]'>
            <ul className='flex flex-col gap-[8px]'>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Automatically print receipts upon sale completion
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
