import React, { useState } from 'react'
import { CiCirclePlus, CiCreditCard2, } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { Modal } from 'antd';
import Payment from "../../assets/images/icon/payment.png"

export default function UserWallet() {

  const [open, setOpen] = useState(false);
  const [cardopen, setCardOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const showModal2 = () => {
    setCardOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 0);
  };


  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    setCardOpen(false);

  };

  return (
    <>
      <div>
        <h3 className='text-[#2C2C2C] font-outfit text-[24px] xl:text-[36px] font-medium xl:mb-[40px] pl-[50px]'>Wallet</h3>
        <div className='pt-[50px] py-[15px] xl:py-[48px] px-[15px] xl:px-[56px]'>
          <div className='xl:w-[556px]'>
            <div className=' py-[15px] xl:py-[24px] px-[15px] xl:px-[32px] rounded-[16px]  bg-gradient-to-l from-cyan-500 to-teal-600 mb-[20px]'>
              <h4 className='text-white text-[20px] xl:text-[24px] font-medium font-outfit xl:leading-7 xl:mb-[20px]'>Wallet Balance</h4>
              <h2 className='font-outfit text-[30px] xl:text-[48px] font-medium xl:leading-[56px] text-[#FFF] mb-[4px]'>SAR 0<span className='text-[24px]'>.00 </span></h2>
              <p className='text-[#FFF] font-manrope text-[18px] font-medium mb-[32px]'>Your wallet balance</p>
              <button onClick={showModal} className='py-[10px] px-[16px] text-[#FFF] font-manrope text-[18px] leading-[27px] font-medium border rounded-[32px] border-[#FFF] flex gap-[10px] items-center'><span><CiCirclePlus /></span> Add a gift card</button>
            </div>
            <div className='py-[24px] px-[32px] border border-[#DFE1E6] rounded-[16px]'>
              <h3 className='mb-[20px] text-[#00B1B9] font-outfit text-[24px] font-medium leading-[28px]'>Cards</h3>
              <button onClick={showModal2} className='text-[#d4d4d4] font-manrope text-[18px] font-medium flex items-center '><span className=' border border-[#B3BAC5] rounded-[100%] w-[48px] h-[48px] me-[8px] flex items-center justify-center leading-[48px]'><CiCreditCard1 /></span> Add debit/credit card </button>
            </div>
          </div>
        </div>
      </div>
      {/* Gift card modal */}
      <Modal
        closable={false}
        footer={null}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='xl:p-[20px]'>
          <h3 className='text-[#2C2C2C] text-[28px] xl:text-[36px] font-outfit font-medium mb-[16px]'>Add a gift card</h3>
          <p className='mb-[15px] xl:mb-[32px] text-[#2C2C2C] font-manrope text-[18px] font-medium leading-[27px]'>Enter the code on your gift card</p>
          <form action="">
            <input type="text" className='py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] rounded-[8px] focus:border-[#00B1B9] focus:outline-none' placeholder='Write your gift card code' />
          </form>
          <button className='mt-[20px] xl:mt-[48px] py-[12px] xl:py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r from-teal-600 to-cyan-500 rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setOpen(false)}>Confirm</button>
        </div>
      </Modal>

      {/*  */}


      <Modal
        closable={false}
        footer={null}
        open={cardopen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='xl:p-[20px]'>
          <h3 className='text-[#2C2C2C] text-[28px] xl:text-[36px] font-outfit font-medium mb-[16px]'>Add card</h3>

          <form action="">
            <div className='flex flex-col gap-[15px] xl:gap-[28px]'>
              <div>
                <label className='text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[4px] xl:mb-[8px]' htmlFor="">Card holder name*</label>
                <input type="text" className='py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Write your gift card code' />
              </div>
              <div>
                <label className='text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]' htmlFor="">Card number*</label>
                <div className='relative'>
                  <input type="number" className='py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-[#00B1B9] focus:outline-none rounded-[8px]' placeholder='Credit or debit card number' />
                  <span className='absolute right-[10px] top-[50%] translate-y-[-50%] text-[25px] bg-[#FFF]'>
                    <CiCreditCard2 />
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <label className='text-[#2C2C2C] block  text-[16px] xl:text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]' htmlFor="">Expiry date*</label>
                  <input type="text" className='py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] rounded-[8px] focus:border-[#00B1B9] focus:outline-none' placeholder='MM/YY' />
                </div>
                <div>
                  <label className='text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]' htmlFor="">Security code*</label>
                  <input type="text" className='py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] rounded-[8px] focus:border-[#00B1B9] focus:outline-none' placeholder='123' />
                </div>
              </div>
              <div className='flex gap-[32px] flex-col py-[36px] mb-[15px]'>
                <p className='text-[#2C2C2C] text-[18px] font-manrope font-medium leading-[27px]'>Pay securely with</p>
                <div className='flex gap-[16px] items-center'>
                  <img className='flex-shrink-0' src={Payment} alt="" />
                </div>
              </div>
            </div>

            <div className='flex gap-[20px]'>
              <button className='py-[10px] xl:py-[14px] px-[20px] text-[#2C2C2C] bg-gradient-to-r rounded-[8px] border-[#d4d4d4] border  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setCardOpen(false)}>Cancel</button>
              <button className='py-[10px] xl:py-[14px] px-[20px] text-[#FFF] bg-gradient-to-r from-teal-600 to-cyan-500 rounded-[8px]  w-[100%] block font-manrope font-medium text-[18px]' onClick={() => setCardOpen(false)}>Save</button>
            </div>


          </form>

        </div>
      </Modal>
    </>
  )
}
