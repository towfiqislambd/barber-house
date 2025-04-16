import { useState } from "react";
import { Drawer } from "antd";
import Details from "./Details";
import Activities from "./Activities";
import {
  ActivitySvg,
  DetailsSvg,
} from "@/components/svgContainer/SvgContainer";
const ViewSaleDrawer = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <p
        onClick={showDrawer}
        className="text-[#545454] font-medium pb-2 cursor-pointer"
      >
        View sale
      </p>
      <div id="viewSales">
        <Drawer width={582} onClose={onClose} open={open}>
          <div className="flex flex-col md:flex-row gap-7">
            <div className="bg-white rounded-xl h-full md:w-[150px] w-[200px]">
              <ul className="space-y-5 text-lg font-medium">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-5 py-2 w-full block text-left  rounded-lg ${
                    activeTab === "details"
                      ? "text-white bg-[#008A90]"
                      : "text-[#2C2C2C]"
                  }`}
                >
                  <button className="flex gap-2">
                    <DetailsSvg
                      color={`${activeTab === "details" ? "#fff" : "#000"}`}
                    />
                    Details
                  </button>
                </button>
                <button
                  onClick={() => setActiveTab("activities")}
                  className={`px-5 py-2 w-full block text-left rounded-lg ${
                    activeTab === "activities"
                      ? "text-white bg-[#008A90]"
                      : "text-[#2C2C2C]"
                  }`}
                >
                  <button className="flex gap-2">
                    <ActivitySvg
                      color={`${activeTab === "activities" ? "#fff" : "#000"}`}
                    />
                    Activity
                  </button>
                </button>
              </ul>
            </div>
            <div className="flex-grow">
              {activeTab === "details" && <Details />}
              {activeTab === "activities" && <Activities />}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default ViewSaleDrawer;
