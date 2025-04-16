import { useState } from "react";
import { Drawer } from "antd";

import {
  CustomSvg,
  LunchSvg,
  NewTypeSvg,
  ThreeDotSvg,
} from "@/components/svgContainer/SvgContainer";

import CustomeInputField from "@/components/CustomeInputField/CustomeInputField";
import LunchInputField from "@/components/LunchInputField/LunchInputField";
import { useNavigate } from "react-router-dom";
const BlockedTimeModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("custom");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/businessDashboard/addblocktime");
  };

  return (
    <div>
      <p
        onClick={showDrawer}
        className="text-textColor font-medium  cursor-pointer"
      >
        Blocked Time
      </p>
      <>
        <Drawer
          width={794}
          height={"100vh"}
          onClose={onClose}
          open={open}
          className="ant-drawer-content-wrapper"
          style={{
            overflowY: "auto",
            padding: 0,
            height: "100vh",
            scrollBehavior: "smooth",
            overflowX: "hidden",
          }}
          zIndex={1000}
        >
          <div className="flex justify-between">
            <p className="text-textSecondary font-outfit text-[28px] xl:text-[32px] font-medium leading-[38.4px]">
              Add blocked time
            </p>
            <ThreeDotSvg />
          </div>
          {/* Block time type */}
          <div className="mt-[41px]">
            <p className="text-textSecondary font-manrope text-lg font-semibold leading-[27px]">
              Block time type
            </p>
            {/*  */}
            <div className="flex flex-wrap 2xl:flex-nowrap gap-5 2xl:gap-10 mt-4 justify-center">
              {/* Custom */}
              <div
                className={`border ${
                  selectedType === "custom"
                    ? "border-[#008A90]"
                    : "border-[#DFE1E6]"
                } 
          py-[29px] px-[20px] rounded-lg w-[221px] flex flex-col items-center justify-center cursor-pointer`}
                onClick={() =>
                  setSelectedType(selectedType === "custom" ? null : "custom")
                }
              >
                <CustomSvg />
                <p className="mt-[10px] text-textSecondary font-manrope text-base font-semibold leading-6">
                  Custom
                </p>
                <p className="mt-1 text-[#757575] font-manrope text-base font-semibold">
                  New blocked time
                </p>
              </div>
              {/* Lunch */}
              <div
                className={`border ${
                  selectedType === "lunch"
                    ? "border-[#008A90]"
                    : "border-[#DFE1E6]"
                } py-[29px] px-[43px] rounded-lg w-[221px] flex flex-col items-center cursor-pointer`}
                onClick={() =>
                  setSelectedType(selectedType === "lunch" ? null : "lunch")
                }
              >
                <LunchSvg />
                <p className="mt-[10px] text-textSecondary font-manrope text-base font-semibold leading-6">
                  Lunch
                </p>
                <p className="mt-1 text-[#757575] font-manrope text-base font-semibold">
                  10min. unpaid
                </p>
              </div>
              {/* New Type */}
              <div
                onClick={() => {
                  handleRedirect();
                  setSelectedType(
                    selectedType === "newType" ? null : "newType"
                  );
                }}
                className={`border ${
                  selectedType === "newType"
                    ? "border-[#008A90]"
                    : "border-[#DFE1E6]"
                } py-[29px] px-[43px] rounded-lg w-[221px] flex flex-col items-center justify-center cursor-pointer`}
              >
                <NewTypeSvg />
                <p className="mt-[10px]">New type</p>
              </div>

              {/* Input Fields (Always Below All Boxes) */}
            </div>
            {/* Keep input fields below the row */}
            <div className="mt-4 flex justify-center">
              {selectedType && (
                <div className="w-full">
                  {selectedType === "custom" && <CustomeInputField />}

                  {selectedType === "lunch" && <LunchInputField />}
                </div>
              )}
            </div>
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default BlockedTimeModal;
