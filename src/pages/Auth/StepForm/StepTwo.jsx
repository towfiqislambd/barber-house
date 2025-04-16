import { LeftSideArrowSvg, StepTwoSvg } from "@/components/svgContainer/SvgContainer";
import { useForm } from "react-hook-form";
import { useState } from "react";

const stepTwoData = [
    { id: 1, icon: <StepTwoSvg />, desc: "Haircuts & styling" },
    { id: 2, icon: <StepTwoSvg />, desc: "Hair coloring" },
    { id: 3, icon: <StepTwoSvg />, desc: "Blowouts" },
    { id: 4, icon: <StepTwoSvg />, desc: "Braiding" },
    { id: 5, icon: <StepTwoSvg />, desc: "Extensions" },
    { id: 6, icon: <StepTwoSvg />, desc: "Perms" },
    { id: 7, icon: <StepTwoSvg />, desc: "Scalp treatments" },
    { id: 8, icon: <StepTwoSvg />, desc: "Shaving" },
    { id: 9, icon: <StepTwoSvg />, desc: "Beard grooming" }
];

const StepTwo = ({ step, setStep, setFormData }) => {
    const { handleSubmit } = useForm();
    const [selectedServices, setSelectedServices] = useState([]);

    const onSubmit = () => {
        if (selectedServices.length > 0) {
            const selectedServiceDescriptions = stepTwoData
                .filter((service) => selectedServices.includes(service.id))
                .map((service) => service.desc);

            setStep(step + 1);
            setFormData(prevData => ({ ...prevData, selectedServiceDescriptions }));
        }
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const handleSelection = (id) => {
        setSelectedServices((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            }
            if (prev.length < 3) {
                return [...prev, id];
            }
            return prev;
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Next, Prev btns */}
            <div className="flex justify-between items-center mb-5">
                <button onClick={handlePrevStep} className="cursor-pointer">
                    <LeftSideArrowSvg />
                </button>
                <button className="xl:py-4 py-[8px] px-6 font-manrope text-lg bg-[#008A90] text-white font-semibold rounded-lg mt-5">
                    Continue
                </button>
            </div>

            {/* Main form */}
            <div className="text-left">
                <h4 className="font-outfit text-lg">Account setup</h4>
                <h3 className="text-[#1E1E1E] font-outfit text-[28px] xl:text-4xl py-4 font-semibold">
                    What services do you offer?
                </h3>
                <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-10">
                    Choose your primary and up to 3 related service types
                </p>

                <div className="grid grid-cols-2 xl:grid-cols-4  gap-5">
                    {stepTwoData.map((data) => {
                        const isSelected = selectedServices.includes(data.id);
                        const isDisabled = !isSelected && selectedServices.length >= 3;
                        const selectionIndex = selectedServices.indexOf(data.id) + 1;

                        return (
                            <label key={data.id} className="relative block cursor-pointer h-[100%]">
                                <input
                                    type="checkbox"
                                    name="customCheckbox"
                                    value={data.id}
                                    className="hidden"
                                    checked={isSelected}
                                    disabled={isDisabled}
                                    onChange={() => handleSelection(data.id)}
                                />
                                <div
                                    className={`space-y-4 border rounded-lg p-4 shadow border-[#B3BAC5] 
                                    ${isSelected ? "border-blue-500 bg-blue-50" : ""} 
                                    ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                >

                                    <span className={`absolute top-2 right-2 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-semibold ${isSelected ? 'block' : 'hidden'}`}>
                                        {selectionIndex}
                                    </span>

                                    <div>{data.icon}</div>
                                    <p className="text-lg font-outfit text-[#1E1E1E]">
                                        {data.desc}
                                    </p>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>
        </form>
    );
};

export default StepTwo;
