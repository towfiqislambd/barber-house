import { MembershipCheckSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import membershipBg from "../../../assets/images/membershipBg.png";
const Product = () => {
  return (
    <div className="flex gap-10">
      <div className="">
        <p className="text-[#008C4F] px-3 py-1 inline-block font-medium rounded-full bg-borderColorLight border mb-4 border-borderColorLight">
          Free to use
        </p>
        <h3 className="text-[#2C2C2C] max-w-[483px] font-outfit text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-5">
          Manage your inventory product list
        </h3>
        <p className="lg:text-lg font-medium max-w-[483px] text-[#545454] mb-3 lg:mb-5">
          Manage your inventory and stock levels for easy ordering, tracking and
          selling:
        </p>
        <ul className="text-[#2C2C2C] space-y-3 lg:space-y-4 mb-5 lg:mb-10 font-medium">
          <li className="flex gap-2 items-center">
            <MembershipCheckSvg />
            <p>Start with a single product or import many at once</p>
          </li>
          <li className="flex gap-2 items-center">
            <MembershipCheckSvg />
            <p>Organize your list by adding brands and categories</p>
          </li>
          <li className="flex gap-2 items-center">
            <MembershipCheckSvg />
            <p>Keep quantity at the right level with low stock reminders</p>
          </li>
          <li className="flex gap-2 items-center">
            <MembershipCheckSvg />
            <p>Sell products online and during checkout at Point of Sale</p>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Link to="/businessDashboard/addnew-product">
            <button className="text-white bg-primary font-medium px-4 lg:px-7 rounded-lg py-2 lg:py-3">
              Start now
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden 4xl:block">
        <figure className="w-[450px] absolute bottom-0 right-0">
          <img src={membershipBg} alt="" className="w-full object-cover" />
        </figure>
      </div>
    </div>
  );
};

export default Product;
