import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cash from "../../assets/images/cash.png";
import OtherImg from "../../assets/images/other.png";
import { CiLock } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Modal } from "antd";

export default function PaymentMethod() {
  const [activeIndex, setActiveIndex] = useState(null);

  const actionFunc = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".action-container")) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Delete Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const PaymentInfo = [
    {
      id: 1,
      name: "Others",
      img: OtherImg,
    },
  ];

  return (
    <div className="3xl:w-[780px] w-full pb-[40px]">
      <div className="mb-[24px] flex gap-[10px] justify-between items-center ">
        <div className="pt-[24px] xl:pt-[0px]">
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
            Payment methods
          </h4>
          <p className="">
            View and customise payment methods displayed at checkout for your
            team members
          </p>
        </div>
        <div>
          <Link to="/businessDashboard/addpaymentmethod">
            <button className="text-[#fff] font-manrope font-semibold py-2 px-[12px] rounded-[8px] border border-[#757575] bg-[#000] ">
              add
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="px-[20px] xl:px-[50px] py-[10px] xl:py-[35px] border rounded-[8px] border-[#DFE1E6] bg-white flex items-center justify-between cursor-pointer hover:border-[#00C2CB] flex-shrink-0">
          <div>
            <div className="mb-[4px]">
              <img src={Cash} alt="" />
            </div>
            <p className="text-[#1E1E1E] font-manrope font-semibold">Cash</p>
          </div>
          <div>
            <span className="text-[30px]">
              <CiLock />
            </span>
          </div>
        </div>

        {PaymentInfo.map((card, index) => (
          <div
            key={card.id}
            className="px-[20px] xl:px-[50px] py-[10px] xl:py-[35px] border rounded-[8px] border-[#DFE1E6] bg-white flex items-center justify-between cursor-pointer hover:border-[#00C2CB] flex-shrink-0"
          >
            <div>
              <div className="mb-[4px]">
                <img src={card.img} alt="" />
              </div>
              <p className="text-[#1E1E1E] font-manrope font-semibold">
                {card.name}
              </p>
            </div>
            <div className="relative action-container">
              <button
                onClick={() => actionFunc(index)}
                className="flex items-center justify-center gap-[10px] border border-[#008A90] rounded-[24px] text-[#008A90] w-[127px] py-[8px] xl:py-[12px] px-[16px] font-medium mb-[5px]"
              >
                Actions
                <span className="text-[22px]">
                  <MdKeyboardArrowDown />
                </span>
              </button>
              {activeIndex === index && (
                <div className="bg-[#FFF] py-[14px] px-[8px] rounded-[6px] border flex flex-col w-[127px] text-start absolute z-10">
                  <button className="p-[8px] text-[#2C2C2C] text-[14px] font-manrope font-medium text-start block">
                    Edit
                  </button>
                  <button
                    onClick={showModal}
                    className="p-[8px] text-[#2C2C2C] text-[14px] font-manrope font-medium text-start block"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <Modal
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="px-[15px] py-[20px]">
          <h3 className="mb-[20px] text-[#2C2C2C] font-outfit text-[24px] font-medium">
            Delete
          </h3>
          <p className="text-[#757575] font-manrope text-[18px] font-medium">
            Are you sure you want to delete
          </p>
          <div className="flex gap-[20px] mt-[40px]">
            <button
              onClick={handleCancel}
              className="w-[50%] p-[10px] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] font-semibold border border-[#DFE1E6] hover:text-[#fff] transition-all duration-300 hover:bg-[#008A90]"
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              className="w-[50%] p-[10px] rounded-[8px] font-manrope text-[18px] font-semibold border border-[#DFE1E6] hover:text-[#fff] transition-all duration-300 bg-[#008A90] text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
