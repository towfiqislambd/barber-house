import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PercentImg from "../../assets/images/percent.png";
import HaircutImg from "../../assets/images/haircut.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Modal } from "antd";

export default function Taxrates() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState(null);
  const [expand, setExpand] = useState(false);

  const actionFunc = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const groupFunc = (index) => {
    setActiveGroupIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const expandFunc = () => {
    setExpand(!expand);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".action-container")) {
      setActiveIndex(null);
    }
    if (!event.target.closest(".action-container")) {
      setActiveGroupIndex(null);
    }
    if (!event.target.closest(".action-container")) {
      setExpand(false);
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

  const Groups = [
    {
      id: 1,
      name: "Haircut",
      percent: "Tax group . 10%, 10%",
      img: HaircutImg,
    },
  ];
  const Rates = [
    {
      id: 1,
      name: "Shihab",
      percent: "10%",
      img: PercentImg,
    },
    {
      id: 2,
      name: "Shihab",
      percent: "10%",
      img: PercentImg,
    },
  ];
  return (
    <div className="xl:w-[780px] pb-[40px] xl:pb-[100px]">
      <div className="mb-[24px] pt-[24px] flex gap-[10px] justify-between items-center">
        <div>
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
            Tax rates
          </h4>
          <p className="">
            Set the tax defaults to automatically apply them in appointments and
            sales
          </p>
        </div>

        <div className="relative action-container">
          <button
            onClick={expandFunc}
            className="text-[#fff] font-manrope font-semibold py-2 px-[12px] rounded-[8px] border border-[#757575] bg-[#000] flex items-center gap-[10px] mb-[5px] "
          >
            add{" "}
            <span className="text-[20px]">
              <MdKeyboardArrowDown />
            </span>
          </button>

          {expand && (
            <div className="bg-[#FFF] py-[14px] px-[8px] rounded-[6px] border flex flex-col w-[200px] text-start absolute z-10 right-0">
              <div className="flex flex-col">
                <Link
                  to="/businessDashboard/newtax"
                  className="text-[14px] py-[10px] px-[10px] font-semibold hover:bg-[#F6F6F6] rounded-[5px]"
                >
                  New tax
                </Link>
                <Link
                  to="/businessDashboard/grouptax"
                  className="text-[14px] py-[10px] px-[10px] font-semibold hover:bg-[#F6F6F6] rounded-[5px]"
                >
                  New tax Group
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div>
          <h3 className="mb-[15px] text-[#2C2C2C] font-manrope  text-[20px] xl:text-[24px] font-semibold leading-[36px]">
            Groups
          </h3>
          {Groups.map((card, index) => (
            <div
              key={card.id}
              className="px-[15px] xl:px-[50px] py-4 xl:py-[35px] border rounded-[8px] border-[#DFE1E6] bg-white flex items-center justify-between cursor-pointer hover:border-borderColorLight flex-shrink-0"
            >
              <div className="">
                <div className="flex gap-[10px] xl:gap-[24px] flex-col xl:flex-row items-center">
                  <div className="mb-[4px] w-full hidden xl:block">
                    <img src={card.img} alt="" />
                  </div>
                  <div className="">
                    <p className="text-[#1E1E1E] font-manrope font-semibold mb-[4px]">
                      {card.name}
                    </p>
                    <p className="font-semibold font-manrope">{card.percent}</p>
                  </div>
                </div>
              </div>

              <div className="relative action-container">
                <button
                  onClick={() => groupFunc(index)}
                  className="flex items-center justify-center gap-[10px] border border-borderColorLight rounded-[24px] text-primary w-[127px] py-[10px] xl:py-[12px] px-[16px] font-medium mb-[5px]"
                >
                  Actions
                  <span className="text-[22px]">
                    <MdKeyboardArrowDown />
                  </span>
                </button>
                {activeGroupIndex === index && (
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

        <div>
          <h3 className="mb-[15px] text-[#2C2C2C] font-manrope text-[20px] xl:text-[24px] font-semibold leading-[36px]">
            Rates
          </h3>

          <div className="flex flex-col gap-[24px]">
            {Rates.map((rate, index) => (
              <div
                key={rate.id}
                className="px-[15px] xl:px-[50px] py-4 xl:py-[35px] border rounded-[8px] border-[#DFE1E6] bg-white flex items-center justify-between cursor-pointer hover:border-primary flex-shrink-0"
              >
                <div className=" xl:w-auto">
                  <div className="flex gap-[10px] xl:gap-[24px] flex-col xl:flex-row justify-between xl:items-center">
                    <div className="mb-[4px] hidden xl:block">
                      <img src={rate.img} alt="" />
                    </div>
                    <div className="flex gap-[10px] xl:flex-none">
                      <p className="text-[#1E1E1E] font-manrope font-semibold mb-[4px]">
                        {rate.name}
                      </p>
                      <p className="font-semibold font-manrope">
                        {rate.percent}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative action-container ">
                  <button
                    onClick={() => actionFunc(index)}
                    className="flex items-center justify-center gap-[10px] border border-primary rounded-[24px] text-primary w-[127px] py-[10px] xl:py-[12px] px-[16px] font-medium mb-[5px]"
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
        </div>
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
              className="w-[50%] p-[10px] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] font-semibold border border-[#DFE1E6] hover:text-[#fff] transition-all duration-300 hover:bg-primary"
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              className="w-[50%] p-[10px] rounded-[8px] font-manrope text-[18px] font-semibold border border-[#DFE1E6] hover:text-[#fff] transition-all duration-300 bg-primary text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
