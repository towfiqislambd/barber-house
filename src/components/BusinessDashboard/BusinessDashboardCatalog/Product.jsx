import {
  AddNowSvg,
  AppointmentsSearchSvg,
  AuthorSvg,
  DropdownSvg,
  ExportSvg,
  MembershipCheckSvg,
  UpsellSvg,
  ViewSoldSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import membershipBg from "../../../assets/images/membershipBg.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const isMember = false;
const tableData = [
  {
    id: 1,
    membership: {
      name: "Tariqul Fahim",
      service: "1 service",
      image: <AuthorSvg />,
    },
    validFor: "1 month",
    seasons: "5 seasons",
    price: "SAR 20.00",
  },
  {
    id: 2,
    membership: {
      name: "Tariqul Fahim",
      service: "1 service",
      image: <AuthorSvg />,
    },
    validFor: "1 month",
    seasons: "5 seasons",
    price: "SAR 20.00",
  },
  {
    id: 3,
    membership: {
      name: "Tariqul Fahim",
      service: "1 service",
      image: <AuthorSvg />,
    },
    validFor: "1 month",
    seasons: "5 seasons",
    price: "SAR 20.00",
  },
  {
    id: 4,
    membership: {
      name: "Tariqul Fahim",
      service: "1 service",
      image: <AuthorSvg />,
    },
    validFor: "1 month",
    seasons: "5 seasons",
    price: "SAR 20.00",
  },
  {
    id: 5,
    membership: {
      name: "Tariqul Fahim",
      service: "1 service",
      image: <AuthorSvg />,
    },
    validFor: "1 month",
    seasons: "5 seasons",
    price: "SAR 20.00",
  },
];
const Product = () => {
  return (
    <div>
      {isMember ? (
        <div className="">
          {/* Upper part */}
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              {/* Search */}
              <div className="relative w-[450px]">
                <input
                  type="text"
                  className="rounded-full bg-white w-full py-3 px-5 shadow outline-none border border-gray-100"
                  placeholder="Search by membership name"
                />
                <button className="absolute right-2 top-2 w-9 h-9 bg-black grid place-items-center rounded-full">
                  <AppointmentsSearchSvg />
                </button>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              {/* Export */}
              <Popover>
                <PopoverTrigger>
                  <button className="px-4 py-[10px] flex gap-2 items-center outline-none rounded-lg border border-primary">
                    <ExportSvg />
                    <p>Options</p>
                    <DropdownSvg />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[280px] px-5 py-7">
                  <div className="space-y-4">
                    <button className="flex gap-2 items-center">
                      <ViewSoldSvg />
                      <p className="text-[#545454] font-medium">
                        View sold memberships
                      </p>
                    </button>
                    <button className="flex gap-2 items-center">
                      <UpsellSvg />
                      <p className="text-[#545454] font-medium">
                        Upsell settings
                      </p>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
              <Link to="/businessDashboard/add-membership">
                <button className="px-4 py-[10px] bg-[#008A90] flex gap-2 items-center outline-none rounded-lg text-white">
                  <AddNowSvg />
                  <p>Add</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="border-t border-[#008A90] mt-10 pb-5"></div>
          {/* Table */}
          <table className="w-full border-collapse">
            <tr className="text-lg text-gray-700">
              <th className="px-4 py-6 text-left">Membership name</th>
              <th className="px-4 py-6 text-left">Valid for</th>
              <th className="px-4 py-6 text-left">Sessions</th>
              <th className="px-4 py-6 text-left">Price</th>
            </tr>
            <tbody>
              {tableData.map(data => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-200 border-t 
                    first:border-none border-dashed text-[#545454]"
                >
                  <td className="px-4 text-[#545454] font-medium py-5 flex gap-2 items-center">
                    <div className="bg-gradient-to-br from-[#3078D6] to-[#5CA3FF] p-4 rounded-lg">
                      {data?.membership?.image}
                    </div>
                    <div className="">
                      <h3 className="text-[17px] font-medium text-[#2C2C2C]">
                        {data.membership.name}
                      </h3>
                      <h3>{data.membership.service}</h3>
                    </div>
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5">
                    {data.validFor}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5">
                    {data.seasons}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5">
                    {data.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex gap-10">
          <div className="">
            <p className="text-[#008C4F] px-3 py-1 inline-block font-medium rounded-full bg-borderColorLight border mb-4 border-borderColorLight">
              Free to use
            </p>
            <h3 className="text-[#2C2C2C] max-w-[483px] font-outfit text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-5">
              Manage your inventory with Fresha product list
            </h3>
            <p className="lg:text-lg font-medium max-w-[483px] text-[#545454] mb-3 lg:mb-5">
              Manage your inventory and stock levels for easy ordering, tracking
              and selling:
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
      )}
    </div>
  );
};

export default Product;
