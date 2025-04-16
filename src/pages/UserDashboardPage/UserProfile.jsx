import React, { useState } from 'react'
import { CiCirclePlus, } from "react-icons/ci";
import { IoMdHome, } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { Button, Modal } from 'antd';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const options = [
  { value: 'Male', label: 'Male', secondary: "+52" },
  { value: 'Female', label: 'Female' },
  { value: 'Non-binary', label: 'Non-binary' },
  { value: 'prefer not to say', label: 'prefer not to say' },
]


export default function UserProfile() {

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };


  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const showModal2 = () => {
    setOpenDelete(true);
  };
  const editProfileFunc = () => {
    setEditProfile(true);
  };


  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setOpenDelete(false);
      setConfirmLoading(false);
      setEditProfile(false);
    }, 0);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    setOpenDelete(false);
    setEditProfile(false);
  };

  const addresses = [
    {
      id: 1,
      title: "Address 1",
      location: "Al Qiblatayn, Medina 42312, Saudi Arabia",
    },
    {
      id: 2,
      title: "Address 2",
      location: "Masjid al-Haram, Mecca 24231, Saudi Arabia",
    },
  ];



  const [phone, setPhone] = useState(null);
  const handleInput = (e) => {
    console.log(e)
  }


  return (

    <>
      <div className='px-[15px]'>
        <h3 className='text-[#2C2C2C] font-outfit text-[24px] xl:text-[36px] font-medium mb-[40px] pl-[50px] xl:pl-[0px]'>Profile</h3>
        <div className='flex flex-col xl:flex-row gap-[20px]'>
          <div className='py-[15px] xl:py-[48px] px-[15px] xl:px-[56px] bg-[#FFF] h-max xl:h-[900px] border border-[#B0ECEF] rounded-[16px]'>
            <div className='xl:w-[300px] flex-shrink-0'>
              <div className='text-end'><button className='text-end text-[#008A90] font-manrope text-[16px] xl:text-[20px] font-semibold leading-[30px] xl:mb-[12px]' onClick={editProfileFunc} >Edit</button></div>
              <div className='xl:w-[112px] w-[60px] xl:h-[112px] h-[60px] mx-auto mb-[10px] xl:mb-[16px] rounded-[100%] bg-[#4B58AA]'>
                <h4 className='text-[#FFF] font-manrope text-[24px] xl:text-[64px] font-bold text-center leading-[64px] xl:leading-[112px]'>T</h4>
              </div>
              <div className='mb-[15px] xl:mb-[48px] pb-[15px] xl:pb-[48px] border-b border-[#000]'>
                <h3 className='text-[#050505] font-outfit xl:text-[28px] text-[18px] font-semibold xl:leading-[33px] text-center '>Tariqul Islam Fahim</h3>
              </div>
            </div>
            <div className='flex gap-[15px] xl:gap-[46px] flex-col'>
              <div>
                <h5 className='xl:mb-[4px] text-[#1E1E1E] font-manrope text-[16px] xl:text-[18px] font-semibold leading-[27px]'>Full name</h5>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-semibold leading-[27px]'>Tariqul Islam Fahim</p>
              </div>
              <div>
                <h5 className='xl:mb-[4px] text-[#1E1E1E] font-manrope xl:text-[18px] font-semibold leading-[27px]'>Phone number</h5>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-semibold leading-[27px]'>+966 14 123 4567</p>
              </div>
              <div>
                <h5 className='xl:mb-[4px] text-[#1E1E1E] font-manrope xl:text-[18px] font-semibold leading-[27px]'>Email</h5>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-semibold leading-[27px]'>tariqulfahim97@gmail.com</p>
              </div>
              <div>
                <h5 className='xl:mb-[4px] text-[#1E1E1E] font-manrope xl:text-[18px] font-semibold leading-[27px]'>Date of birth</h5>
                <p className='text-[#545454] font-manrope xl:text-[18px] font-semibold leading-[27px]'>7 Nov, 2005</p>
              </div>
              <div>
                <h5 className='xl:mb-[4px] text-[#1E1E1E] font-manrope xl:text-[18px] font-semibold leading-[27px]'>Gender</h5>
                <p className='text-[#545454] font-manrope text-[18px] font-semibold leading-[27px]'>Male</p>
              </div>
            </div>
          </div>
          <div className='py-[15px] xl:py-[48px] px-[15px] xl:px-[56px] bg-[#FFF]  border border-[#B0ECEF] rounded-[16px] mb-[100px] xl:w-[612px] h-max'>
            <h3 className='xl:mb-[32px] mb-[15px] text-[#1E1E1E] font-outfit text-[20px] xl:text-[24px] font-medium leading-[28px]'>My Addresses</h3>

            {addresses.map((address, index) => (
              <div className='flex flex-col gap-[20px] mb-[30px]' key={address.id}>
                <div className="bg-[#F4F9FA] py-[10px] xl:py-[20px] px-[10px] xl:px-[24px] flex gap-[12px] rounded-[8px]">
                  <div className="w-[40px] h-[40px] rounded-[100%] p-[10px] bg-[#FFF] flex-shrink-0 shadow-md">
                    <span className="text-[#008A90] text-[20px]">
                      <IoMdHome />
                    </span>
                  </div>
                  <div className="flex flex-col gap-[10px] xl:gap-[13px] xl:w-[337px]">
                    <h4 className="text-[#1E1E1E] font-manrope xl:text-[20px] font-semibold xl:leading-[30px]">
                      {address.title}
                    </h4>
                    <p className="text-[#545454] font-manrope  xl:text-[18px] font-medium leading-[27px]">
                      {address.location}
                    </p>
                  </div>
                  <div className="text-end flex justify-end items-start w-[48px] relative">
                    <button className="text-end" onClick={() => toggleDropdown(index)}>
                      <HiDotsVertical />
                    </button>

                    {openDropdown === index && (
                      <div className="absolute py-[15px] xl:py-[24px] px-[15px] xl:px-[32px] bg-[#FFF] shadow-sm text-start top-[20px] right-0 rounded-[8px] w-[164px]">
                        <button className="text-[#2C2C2C] font-manrope font-medium xl:text-[18px] mb-[10px] w-full text-start">
                          Edit
                        </button>
                        <button onClick={showModal2} className="text-[#2C2C2C] font-manrope font-medium xl:text-[18px] w-full text-start">
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}


            <div>
              <button onClick={showModal} className='py-[10px] px-[16px] text-[#545454] font-manrope text-[18px] leading-[27px] font-medium border rounded-[32px] border-[#00C2CB] flex gap-[10px] items-center'><span><CiCirclePlus /></span> Add address</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile modal */}
      <Modal
        closable={false}
        footer={null}
        open={editProfile}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='p-[15px]'>
          <h3 className='text-[#2C2C2C] text-[28px] font-outfit font-medium mb-[32px]'>Edit profile details</h3>
          <form action="">
            <div className='flex flex-col gap-[24px]'>
              <div className='flex flex-col xl:flex-row gap-[20px]'>
                <div className='w-full xl:w-[50%]'>
                  <label className='text-[#2C2C2C] block text-[16px] font-semibold font-manrope leading-[27px] mb-[5px]' htmlFor="">First name
                  </label>
                  <input type="text" className='py-[11px] px-[15px] font-manrope text-[16px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='First name' />
                </div>
                <div className='w-full xl:w-[50%]'>
                  <label className='text-[#2C2C2C] block text-[16px] font-semibold font-manrope leading-[27px] mb-[5px]' htmlFor="">Last name
                  </label>
                  <input type="text" className='py-[11px] px-[15px] font-manrope text-[16px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Last name' />
                </div>
              </div>

              <div className='flex-shrink-0 custom-phone'>
                <label className='text-[#2C2C2C] block text-[16px] font-semibold font-manrope leading-[27px] mb-[5px]' htmlFor="">Mobile number
                </label>

                <div>
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className=''>
                <label className='text-[#0c0a0a] block text-[16px] font-semibold font-manrope leading-[27px] mb-[5px]' htmlFor="">Email address
                </label>
                <input type="email" className='py-[11px] px-[15px] font-manrope text-[16px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Email address' />
              </div>

              <div>
                <label className='text-[#0c0a0a] block text-[16px] font-semibold font-manrope leading-[27px] mb-[5px]' htmlFor="">Date of birth
                </label>
                <div className='flex gap-[10px]'>
                  <div className='w-[33%]'>
                    <input type="text" className='py-[11px] px-[15px] font-manrope text-[16px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Day' />
                  </div>
                  <div className='w-[33%]'>
                    <input type="text" className='py-[11px] px-[15px] font-manrope text-[16px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Month' />
                  </div>
                  <div className='w-[33%]'>
                    <input type="text" className='py-[11px] px-[15px] font-manrope text-[16px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Year' />
                  </div>
                </div>
              </div>

              <div>
                <label className='text-[#2C2C2C] block text-[16px] font-semibold font-manrope leading-[27px] mb-[8px]' htmlFor="">Gender</label>
                <div>
                  <Select options={options}
                    placeholder="Select Gender"
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        border: "none",
                      }),
                    }}
                    className="w-[100%] text-[16px] text-[#2C2C2C] border-[1px] border-[#bbc2c7] rounded-[8px] py-[6px] px-[10px] font-semibold"
                  />
                </div>
              </div>

            </div>

          </form>

          <div className='flex gap-[20px] mt-[20px]'>
            <button className='py-[11px] px-[10px] text-[#2C2C2C] bg-gradient-to-r rounded-[8px] border-[#d4d4d4] border  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setEditProfile(false)}>Cancel</button>
            <button className='py-[11px] px-[10px] text-[#FFF] bg-gradient-to-r bg-[#00B1B9] rounded-[8px]  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setEditProfile(false)}>Save</button>
          </div>

        </div>
      </Modal>


      {/* Gift card modal */}
      <Modal
        closable={false}
        footer={null}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='p-[15px] xl:p-[20px]'>
          <h3 className='text-[#2C2C2C] text-[36px] font-outfit font-medium mb-[32px]'>Add custom address </h3>
          <form action="">
            <div className='flex flex-col gap-[28px]'>
              <div>
                <label className='text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]' htmlFor="">Address 01</label>
                <div>
                  <Select options={options}
                    placeholder="Select your country"
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
              <div>
                <label className='text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]' htmlFor="">Address 02</label>
                <input type="text" className='py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Write your local address' />
              </div>
            </div>

          </form>
          <button className='mt-[48px] py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r from-teal-600 to-cyan-500 rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setOpen(false)}>Save Address</button>
        </div>
      </Modal>


      {/* Delete modal */}
      <Modal
        closable={false}
        footer={null}
        open={openDelete}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='p-[20px]'>
          <h3 className='text-[#2C2C2C] text-[24px] xl:text-[36px] font-outfit font-medium mb-[16px]'>Delete Address</h3>
          <p className='mb-[32px] text-[#2C2C2C] font-manrope text-[18px] font-medium leading-[27px]'>Are you sure you want to delete this address?</p>
          <form action="">
            <div className='flex gap-[20px]'>
              <button className='xl:py-[14px] px-[20px] text-[#2C2C2C] bg-gradient-to-r rounded-[8px] border-[#d4d4d4] border  w-[100%] block font-manrope font-medium  xl:text-[18px]' onClick={() => setOpenDelete(false)}>Cancel</button>
              <button className='py-[10px] xl:py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r bg-[#D21837] rounded-[8px]  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setOpenDelete(false)}>Delete</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}
