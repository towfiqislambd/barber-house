import RegularShifts from "@/components/BusinessDashboard/BusinessDashboardMemberList/RegularShifts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shifts = () => {
    const initialDaysState = [
        { day: "Monday", isChecked: false, isVisible: true },
        { day: "Tuesday", isChecked: false, isVisible: true },
        { day: "Wednesday", isChecked: false, isVisible: true },
        { day: "Thursday", isChecked: false, isVisible: true },
        { day: "Friday", isChecked: false, isVisible: true },
        { day: "Saturday", isChecked: false, isVisible: true },
        { day: "Sunday", isChecked: false, isVisible: true },
    ];

    // State that holds the days' data
    const [daysState, setDaysState] = useState(initialDaysState);

    // Handle the delete function for each day
    const handleDelete = (day) => {
        setDaysState((prevState) =>
            prevState.map((item) =>
                item.day === day
                    ? { ...item, isVisible: false, isChecked: false }
                    : item
            )
        );
    };

    // Handle the checkbox change for each day
    const handleCheckboxChange = (day) => {
        setDaysState((prevState) =>
            prevState.map((item) =>
                item.day === day
                    ? { ...item, isChecked: !item.isChecked, isVisible: true }
                    : item
            )
        );
    };
    return (
        <div className="px-40 py-10">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-outfit text-3xl font-semibold">Set Shawal’s regular shifts</h3>
                    <p className="text-black mt-1 font-medium text-base">Set weekly, biweekly or custom shifts. Changes saved will apply to all upcoming shifts for the selected period.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <Link to='/businessDashboard/members-list'>
                        <button className="text-[#545454] border font-medium border-[#00C2CB] rounded-lg px-8 py-2">Close</button>
                    </Link>
                    <button className="text-[#fff] bg-[#008A90] font-medium rounded-lg px-8 py-2">Save</button>
                </div>
            </div>

            {/* Lower part */}
            <section className="flex gap-20 mt-10">
                <div className="px-8 py-14 bg-white rounded-lg shadow h-full">
                    <div className="bg-white rounded-lg border-gray-300 h-full w-[250px]">
                        <ul className="space-y-5 text-lg font-medium">
                            <div>
                                <h3 className="text-lg font-semibold  mb-2">Schedule type</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="Every Weeks" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Every week">Every week</SelectItem>
                                        <SelectItem value="Every 2 weeks">Every 2 weeks</SelectItem>
                                        <SelectItem value="Every 3 weeks">Every 3 weeks</SelectItem>
                                        <SelectItem value="Every 4 weeks">Every 4 weeks</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold  mb-2">Start date</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="Every Weeks" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Every week">Every week</SelectItem>
                                        <SelectItem value="Every 2 weeks">Every 2 weeks</SelectItem>
                                        <SelectItem value="Every 3 weeks">Every 3 weeks</SelectItem>
                                        <SelectItem value="Every 4 weeks">Every 4 weeks</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Ends date</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="Every Weeks" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Every week">Every week</SelectItem>
                                        <SelectItem value="Every 2 weeks">Every 2 weeks</SelectItem>
                                        <SelectItem value="Every 3 weeks">Every 3 weeks</SelectItem>
                                        <SelectItem value="Every 4 weeks">Every 4 weeks</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="mt-12">
                        {/* Checkbox for Monday */}
                        {daysState.map((dayObj, index) => (
                            <RegularShifts
                                key={index}
                                isChecked={dayObj.isChecked}
                                isVisible={dayObj.isVisible}
                                handleDelete={() => handleDelete(dayObj.day)}
                                handleCheckboxChange={() => handleCheckboxChange(dayObj.day)}
                                days={dayObj.day}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shifts;