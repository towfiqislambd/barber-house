import { CheckSvg } from "@/components/svgContainer/SvgContainer";
import g1 from "../../assets/images/g1.png"
import g2 from "../../assets/images/g2.png"
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
    return (
        <section className="flex justify-center items-center h-screen text-center flex-col gap-5 relative">
            <div className="z-50 flex flex-col justify-center items-center">
                <CheckSvg />
                <h3 className="font-outfit mb-5 text-2xl lg:text-3xl font-semibold text-[#2C2C2C]">Order Placed Successfully</h3>
                <Link to='/checkout'>
                    <button className="font-semibold text-lg text-primary px-3 lg:px-5 py-2 lg:py-3 rounded-lg border border-primary">Back to Shipping</button>
                </Link>
            </div>

            <img src={g1} className="absolute top-0 right-0" />
            <img src={g2} className="absolute bottom-0 left-0" />
        </section>
    );
};

export default ConfirmOrder;