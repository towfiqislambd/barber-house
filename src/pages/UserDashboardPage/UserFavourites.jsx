import React from 'react'
import FavoriteImg from "../../assets/images/favorite-img-1.png"
import Star from "../../assets/images/star.svg"
import Heart from "../../assets/images/heart.svg"

export default function UserFavourites() {
  return (
    <div className='px-[15px]'>
      <h3 className='text-[#2C2C2C] font-outfit text-[24px] xl:text-[36px] font-medium mb-[40px] pl-[50px] xl:pl-[0px]'>Favorites</h3>
      <div className='flex w-[100%] gap-[20px] flex-wrap justify-center'>

        <div className='w-[365px]'>
          <div className='overflow-hidden rounded-tr-[8px] rounded-tl-[8px] h-[200px] relative'>
            <img className='w-full h-full object-cover' src={FavoriteImg} alt="" />
            <div className='absolute z-10 top-[12px] left-[12px] w-[94%]'>
              <div className='flex justify-between w-full items-center'>
                <button className='rounded-[8px] text-[#1E1E1E] font-manrope font-medium py-[6px] px-[12px] opacity-60 bg-white'>Barbershop</button>
                <button className='w-[32px] h-[32px] rounded-[100%] bg-[#FFE1E1] flex justify-center items-center'>
                  <img src={Heart} width="20px" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className='py-[16px] px-[12px] border border-[#dadbdd] border-t-0 rounded-br-[8px] rounded-bl-[8px]'>
            <div className='mb-[24px]'>
              <div className='flex justify-between mb-[8px] items-center'>
                <div className='max-w-[200px]'>
                  <h4 className=' text-[#1E1E1E] font-outfit font-medium text-[20px] xl:text-[24px]'>Trendy Trim</h4>
                </div>
                <div className='flex gap-[10px]'>
                  <span className='text-[#545454] font-manrope text-[18px] font-medium'>4.8</span>
                  <span className='flex-shrink-0'> <img src={Star} alt="" /> </span>
                  <span className='text-[#545454] font-manrope text-[18px] font-medium'>(1800)</span>
                </div>
              </div>
              <p className='text-[#545454] font-manrope font-medium xl:text-[18px]'>Mirpur, Dhaka</p>
            </div>
            <button className='px-6 py-2.5 bg-gradient-to-l border border-[from-teal-600] hover:text-[#FFF] hover:from-teal-600 hover:to-cyan-500 rounded-[40px] text-[#545454]text-[18px] font-manrope font-medium'>Book Now</button>
          </div>
        </div>

        <div className='w-[365px]'>
          <div className='overflow-hidden rounded-tr-[8px] rounded-tl-[8px] h-[200px] relative'>
            <img className='w-full h-full object-cover' src={FavoriteImg} alt="" />
            <div className='absolute z-10 top-[12px] left-[12px] w-[94%]'>
              <div className='flex justify-between w-full items-center'>
                <button className='rounded-[8px] text-[#1E1E1E] font-manrope font-medium py-[6px] px-[12px] opacity-60 bg-white'>Barbershop</button>
                <button className='w-[32px] h-[32px] rounded-[100%] bg-[#FFE1E1] flex justify-center items-center'>
                  <img src={Heart} width="20px" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className='py-[16px] px-[12px] border border-[#dadbdd] border-t-0 rounded-br-[8px] rounded-bl-[8px]'>
            <div className='mb-[24px]'>
              <div className='flex justify-between mb-[8px] items-center'>
                <div className='max-w-[200px]'>
                  <h4 className=' text-[#1E1E1E] font-outfit font-medium text-[18px] xl:text-[24px]'>Trendy Trim</h4>
                </div>
                <div className='flex gap-[10px]'>
                  <span className='text-[#545454] font-manrope text-[18px] font-medium'>4.8</span>
                  <span className='flex-shrink-0'> <img src={Star} alt="" /> </span>
                  <span className='text-[#545454] font-manrope text-[18px] font-medium'>(1800)</span>
                </div>
              </div>
              <p className='text-[#545454] font-manrope font-medium xl:text-[18px]'>Mirpur, Dhaka</p>
            </div>
            <button className='px-6 py-2.5 bg-gradient-to-l border border-[from-teal-600] hover:text-[#FFF] hover:from-teal-600 hover:to-cyan-500 rounded-[40px] text-[#545454] text-[18px] font-manrope font-medium'>Book Now</button>
          </div>
        </div>

        <div className='w-[365px]'>
          <div className='overflow-hidden rounded-tr-[8px] rounded-tl-[8px] h-[200px] relative'>
            <img className='w-full h-full object-cover' src={FavoriteImg} alt="" />
            <div className='absolute z-10 top-[12px] left-[12px] w-[94%]'>
              <div className='flex justify-between w-full items-center'>
                <button className='rounded-[8px] text-[#1E1E1E] font-manrope font-medium py-[6px] px-[12px] opacity-60 bg-white'>Barbershop</button>
                <button className='w-[32px] h-[32px] rounded-[100%] bg-[#FFE1E1] flex justify-center items-center'>
                  <img src={Heart} width="20px" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className='py-[16px] px-[12px] border border-[#dadbdd] border-t-0 rounded-br-[8px] rounded-bl-[8px]'>
            <div className='mb-[24px]'>
              <div className='flex justify-between mb-[8px] items-center'>
                <div className='max-w-[200px]'>
                  <h4 className=' text-[#1E1E1E] font-outfit font-medium text-[18px] xl:text-[24px]'>Trendy Trim</h4>
                </div>
                <div className='flex gap-[10px]'>
                  <span className='text-[#545454] font-manrope text-[18px] font-medium'>4.8</span>
                  <span className='flex-shrink-0'> <img src={Star} alt="" /> </span>
                  <span className='text-[#545454] font-manrope text-[18px] font-medium'>(1800)</span>
                </div>
              </div>
              <p className='text-[#545454] font-manrope font-medium xl:text-[18px]'>Mirpur, Dhaka</p>
            </div>
            <button className='px-6 py-[12px] xl:py-2.5 bg-gradient-to-l border border-[from-teal-600] hover:text-[#FFF] hover:from-teal-600 hover:to-cyan-500 rounded-[40px] text-[#545454] xl:text-[18px] font-manrope font-medium'>Book Now</button>
          </div>
        </div>


      </div>
    </div>
  )
}
