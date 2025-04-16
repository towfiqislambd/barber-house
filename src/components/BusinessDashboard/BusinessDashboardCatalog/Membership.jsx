import { AddNowSvg, AppointmentsSearchSvg, AuthorSvg, DropdownSvg, ExportSvg, MembershipCheckSvg, UpsellSvg, ViewSoldSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import membershipBg from "../../../assets/images/membershipBg.png"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import MembershipModal from "../Modals/MembershipModal";
const isMember = true
const tableData = [
    {
        id: 1,
        membership: {
            name: 'Tariqul Fahim',
            service: '1 service',
            image: <AuthorSvg />
        },
        validFor: '1 month',
        seasons: '5 seasons',
        price: 'SAR 20.00',
    },
    {
        id: 2,
        membership: {
            name: 'Tariqul Fahim',
            service: '1 service',
            image: <AuthorSvg />
        },
        validFor: '1 month',
        seasons: '5 seasons',
        price: 'SAR 20.00',
    },
    {
        id: 3,
        membership: {
            name: 'Tariqul Fahim',
            service: '1 service',
            image: <AuthorSvg />
        },
        validFor: '1 month',
        seasons: '5 seasons',
        price: 'SAR 20.00',
    },
    {
        id: 4,
        membership: {
            name: 'Tariqul Fahim',
            service: '1 service',
            image: <AuthorSvg />
        },
        validFor: '1 month',
        seasons: '5 seasons',
        price: 'SAR 20.00',
    },
    {
        id: 5,
        membership: {
            name: 'Tariqul Fahim',
            service: '1 service',
            image: <AuthorSvg />
        },
        validFor: '1 month',
        seasons: '5 seasons',
        price: 'SAR 20.00',
    },
]
const Membership = () => {
    return (
        <div>
            {
                isMember ?
                    <div className="">
                        {/* Upper part */}
                        <div className="flex justify-between items-center gap-5 flex-wrap">
                            <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
                                {/* Search */}
                                <div className="relative w-[300px] 2xl:w-[350px] 3xl:w-[450px]">
                                    <input type="text" className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100" placeholder="Search by membership name" />
                                    <button className="absolute right-2 top-2 w-7 lg:w-9 h-7 lg:h-9 bg-black grid place-items-center rounded-full"><AppointmentsSearchSvg /></button>
                                </div>
                                {/* Filter */}
                                <MembershipModal />

                            </div>
                            <div className="flex gap-2 lg:gap-3 items-center">
                                {/* Export */}
                                <Popover>
                                    <PopoverTrigger>
                                        <button className="px-2 lg:px-4 py-[5px] lg:py-[10px] flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
                                            <ExportSvg />
                                            <p>Options</p>
                                            <DropdownSvg />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[280px] px-5 py-7">
                                        <div className="space-y-4">
                                            <button className="flex gap-2 items-center">
                                                <ViewSoldSvg />
                                                <p className="text-[#545454] font-medium">View sold memberships</p>
                                            </button>
                                            <button className="flex gap-2 items-center">
                                                <UpsellSvg />
                                                <p className="text-[#545454] font-medium">Upsell settings</p>
                                            </button>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <Link to='/businessDashboard/add-membership'>
                                    <button className="px-3 lg:px-4 py-[5px] lg:py-[10px] bg-[#008A90] flex gap-2 items-center outline-none rounded-lg text-white">
                                        <AddNowSvg />
                                        <p>Add</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="border-t border-[#008A90] mt-10 pb-5"></div>
                        <div className="overflow-x-auto">
                            {/* Table */}
                            <table className="w-full border-collapse lg:min-w-[800px]">
                                <tr className="lg:text-lg text-nowrap text-gray-700">
                                    <th className="px-2 lg:px-4 py-3 lg:py-6 text-left">Membership name</th>
                                    <th className="px-2 lg:px-4 py-3 lg:py-6 text-left">Valid for</th>
                                    <th className="px-2 lg:px-4 py-3 lg:py-6 text-left">Sessions</th>
                                    <th className="px-2 lg:px-4 py-3 lg:py-6 text-left">Price</th>
                                </tr>
                                <tbody>
                                    {
                                        tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap">
                                            <td className="px-4 text-[#545454] font-medium py-5 flex gap-2 items-center">
                                                <div className="bg-gradient-to-br from-[#3078D6] to-[#5CA3FF] p-2 lg:p-4 rounded-lg">
                                                    {data?.membership?.image}
                                                </div>
                                                <div className="">
                                                    <h3 className="lg:text-[17px] font-medium text-[#2C2C2C]">{data.membership.name}</h3>
                                                    <h3>{data.membership.service}</h3>
                                                </div>
                                            </td>
                                            <td className="px-2 lg:px-4 py-2 text-sm lg:text-base lg:text-[#545454] font-medium lg:py-6">{data.validFor}</td>
                                            <td className="px-2 lg:px-4 py-2 text-sm lg:text-base lg:text-[#545454] font-medium lg:py-6">{data.seasons}</td>
                                            <td className="px-2 lg:px-4 py-2 text-sm lg:text-base lg:text-[#545454] font-medium lg:py-6">{data.price}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className="flex gap-10">
                        <div className="">
                            <p className="text-[#008C4F] px-3 py-1 inline-block font-medium rounded-full bg-[#DCFEE6] border mb-4 border-[#00C2CB]">Free to use</p>
                            <h3 className="text-[#2C2C2C] max-w-[483px] font-outfit text-4xl font-semibold mb-5">Manage multi-session memberships</h3>
                            <p className="text-lg font-medium max-w-[483px] text-[#545454] mb-5">Boost your revenue by combining multiple treatments into a membership and turn your clients into regulars.</p>
                            <ul className="text-[#2C2C2C] space-y-4 mb-10 font-medium">
                                <li className="flex gap-2 items-center">
                                    <MembershipCheckSvg />
                                    <p>Ensure a steady income with recurring memberships</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <MembershipCheckSvg />
                                    <p>Encourage clients to buy an upfront course of treatments</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <MembershipCheckSvg />
                                    <p>Clients can easily book and keep track of their remaining sessions</p>
                                </li>
                            </ul>
                            <div className="flex items-center gap-2">
                                <Link to='/businessDashboard/membership-creation'>
                                    <button className="text-white bg-[#008A90] font-medium px-7 rounded-lg py-3">Start now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <figure className="w-[520px] absolute bottom-0 right-0">
                                <img src={membershipBg} alt="" className="w-full object-cover" />
                            </figure>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Membership;