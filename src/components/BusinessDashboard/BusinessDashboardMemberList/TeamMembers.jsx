import { AppointmentsSearchSvg } from "@/components/svgContainer/SvgContainer";
import { useAllTeamMembers } from "@/hooks/cms.queries";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteTeamMember } from "@/hooks/cms.mutations";
import { useState } from "react";
import { Loader } from "@/components/Loader/Loader";

const TeamMembers = () => {
  const [search, setSearch] = useState(null);
  const {
    data: allTeamMembers,
    isLoading,
    refetch,
  } = useAllTeamMembers(search);
  const { mutateAsync: DeleteMemberMutation } = useDeleteTeamMember();

  const handleDelete = async id => {
    try {
      await DeleteMemberMutation(id);
      refetch();
    } catch (error) {
      console.error("Failed to delete member:", error);
    }
  };

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-2xl font-medium mb-2">
        Team members ({allTeamMembers?.length})
      </h3>
      <p className="text-[#2C2C2C] text-lg font-medium mb-5 xl:mb-10">
        Track, analyze & grow your salon business daily
      </p>
      {/* Upper part */}
      <div className="flex justify-between items-center flex-wrap gap-3 lg:gap-5">
        <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
          {/* Search */}
          <div className="relative w-[300px] xl:w-[450px]">
            <input
              type="text"
              className="rounded-lg bg-white w-full py-2 lg:py-3 ps-10 pe-5 shadow outline-none border border-gray-100"
              placeholder="Search by team members"
              onChange={e => setSearch(e.target.value)}
            />
            <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full">
              <AppointmentsSearchSvg />
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/businessDashboard/add-team-member">
            <button className="bg-[#0D1619] text-white px-3 lg:px-5 py-2 lg:py-[10px] rounded-lg font-medium">
              Add Member
            </button>
          </Link>
        </div>
      </div>
      <div className="border-t border-borderColor mt-10 pb-10"></div>
      {/* Table */}
      {isLoading ? (
        <div className="py-20 flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <tr className="text-lg text-gray-700 text-nowrap">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Delete</th>
            </tr>
            <tbody>
              {allTeamMembers?.map(data => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap"
                >
                  <td className="px-4 text-[#545454] font-medium py-3 flex gap-2 items-center">
                    <img
                      className="w-11 h-11 rounded-full border"
                      src={`${import.meta.env.VITE_SITE_URL}/${data?.profile}`}
                      alt="img"
                    />
                    <h3 className="text-[17px] font-medium text-[#2C2C2C]">
                      {data.first_name} {data.last_name}
                    </h3>
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-3">
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-3">
                    <button onClick={() => handleDelete(data?.id)}>
                      <MdDeleteForever className="text-3xl text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
