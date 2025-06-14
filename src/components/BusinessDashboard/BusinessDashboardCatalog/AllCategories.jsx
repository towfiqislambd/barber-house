import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import PermanentlyDeleteModal from "../Modals/PermanentlyDeleteModal";
import EditCategoryModal from "../Modals/EditCategoryModal";

const AllCategories = ({ categoryData }) => {
  return (
    <>
      <div className="space-y-8">
        {categoryData?.map(data => (
          <div key={data.id}>
            <h3 className="font-outfit text-xl font-medium text-[#2C2C2C] mb-3">
              {data?.name}
            </h3>
            <div className="space-y-4">
              {data?.catalog_services_count === 0 ? (
                <div className="bg-white rounded-xl border-l-[5px] mb-5 border-[#BDBDBD] py-5 3xl:py-8 3xl:px-5 px-3 shadow-[0px_0px_4px_0px_rgba(4,0,116,0.10)]">
                  <p className="text-[#757575] text-lg font-medium">
                    No service
                  </p>
                </div>
              ) : (
                data?.catalog_services?.map((infoData, idx) => (
                  <div
                    key={idx}
                    className={`${
                      data?.catalog_services_count > 0
                        ? "border-borderColorLight"
                        : "border-[#BDBDBD]"
                    } bg-white rounded-xl border-l-[5px] py-5 3xl:py-8 3xl:px-5 px-3 shadow-[0px_0px_4px_0px_rgba(4,0,116,0.10)] flex justify-between items-center`}
                  >
                    <div className="">
                      <h4 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                        {infoData.name}
                      </h4>
                      <h4>{infoData.duration} min</h4>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p>SAR :{infoData.price}</p>
                      <Popover>
                        <PopoverTrigger>
                          <button>
                            <PiDotsThreeOutlineVerticalFill className="text-xl" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[210px] absolute right-0 py-7 px-5">
                          <div className="space-y-6 flex flex-col text-left items-start">
                            <EditCategoryModal />
                            <Link to="/businessDashboard/editService">
                              <button className="text-[#545454] font-medium hover:text-primary">
                                Edit service
                              </button>
                            </Link>
                            <PermanentlyDeleteModal />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllCategories;
