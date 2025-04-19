import { useEffect, useState } from "react";
import BlockedImg from "../../assets/images/blocked.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Modal } from "antd";
import { Link } from "react-router-dom";

export default function BlockedTimeTypes() {
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

  const BlockedTimes = [
    {
      id: "1",
      title: "Training",
      status: "paid",
      time: "10min",
    },
    {
      id: "2",
      title: "Lunch",
      status: "un paid",
      time: "10min",
    },
    {
      id: "3",
      title: "Training",
      status: "paid",
      time: "10min",
    },
    {
      id: "4",
      title: "Lunch",
      status: "un paid",
      time: "10min",
    },
  ];

  // ddf

  return (
    <div className="3xl:w-[650px] mb-10 md:mb-0">
      <div className="mb-[24px] flex justify-between items-center">
        <div>
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
            Blocked times types
          </h4>
          <p className="">
            Create and customise blocked times that can be scheduled in the
            calendar.
          </p>
        </div>
        <div>
          <Link to="/businessDashboard/blockedtimeedit">
            <button className="text-[#fff] font-manrope font-semibold py-2 px-[12px] rounded-[8px] border border-[#757575] bg-[#000]">
              add
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[28px]">
        {BlockedTimes.map((blockedtime, index) => (
          <div
            key={blockedtime.id}
            className="flex justify-between bg-[#fff] 2xl:p-[29px] p-5 rounded-[8px] border border-[#DFE1E6] items-center"
          >
            <div className="flex flex-col sm:flex-row sm:items-center 2xl:gap-[46px] sm:gap-6 gap-2">
              <div>
                <img src={BlockedImg} alt="" />
              </div>
              <div>
                <h4 className="2xl:mb-[4px] text-[#1E1E1E] font-manrope 2xl:text-[24px] text-xl font-semibold leading-[36px]">
                  {blockedtime.title}
                </h4>
                <p className="text-[#757575] font-manrope font-semibold">
                  {blockedtime.time}. {blockedtime.status}
                </p>
              </div>
            </div>

            <div className="relative action-container">
              <button
                onClick={() => actionFunc(index)}
                className="flex items-center justify-center gap-[10px] border border-primary rounded-[24px] text-primary w-[127px] 2xl:py-3 py-2 px-4 font-medium 2xl:mb-[5px]"
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
        <div className="sm:px-[15px] sm:py-[20px]">
          <h3 className="mb-[20px] text-[#2C2C2C] font-outfit text-[24px] font-medium">
            {"Delete 'Lunch'?"}
          </h3>
          <p className="text-[#757575] font-manrope text-[18px] font-medium">
            Are you sure you want to delete this blocked time type?
          </p>
          <div className="flex gap-[20px] mt-[40px]">
            <button
              onClick={handleCancel}
              className="w-[50%] p-[10px] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] font-semibold border border-[#DFE1E6] hover:text-[#fff] transition-all duration-300 hover:bg-primary"
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              className="w-[50%] p-[10px] rounded-[8px] font-manrope text-[18px] font-semibold border border-[#DFE1E6] hover:text-[#fff] transition-all duration-300 text-[#fff] bg-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
