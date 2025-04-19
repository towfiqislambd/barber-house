import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import PermanentlyDeleteModal from "../Modals/PermanentlyDeleteModal";
import EditCategoryModal from "../Modals/EditCategoryModal";

const HairAndStyle = ({ categoryData }) => {
    return (
        <div className="space-y-8">
            {
                <div>
                    <h3 className="font-outfit text-xl font-medium text-[#2C2C2C] mb-3">{categoryData[0].category}</h3>
                    <div className="space-y-4">
                        {
                            categoryData[0].info.map((infoData, idx) => <div key={idx} className="bg-white rounded-xl border-l-[5px] border-borderColorLight py-5 3xl:py-8 3xl:px-5 px-3 shadow-[0px_0px_4px_0px_rgba(4,0,116,0.10)] flex justify-between items-center">
                                <div className="">
                                    <h4 className="text-lg font-semibold text-[#1E1E1E] mb-2">{infoData.service}</h4>
                                    <h4>{infoData.duration}</h4>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <p>{infoData.price}</p>
                                    <Popover>
                                        <PopoverTrigger>
                                            <button><PiDotsThreeOutlineVerticalFill className="text-xl" />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[210px] absolute right-0 py-7 px-5">
                                            <div className="space-y-5 flex flex-col text-left items-start">
                                                <EditCategoryModal />
                                                <Link to='/businessDashboard/editService'>
                                                    <button className="text-[#545454] font-medium hover:text-primary">Edit service</button>
                                                </Link>
                                                <Link to='/businessDashboard/addService'>
                                                    <button className="text-[#545454] font-medium hover:text-primary">Add service</button>
                                                </Link>
                                                <PermanentlyDeleteModal />
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default HairAndStyle;