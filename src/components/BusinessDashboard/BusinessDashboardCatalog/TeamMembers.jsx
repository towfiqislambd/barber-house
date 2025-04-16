import { useState } from "react";
import { ProfileImgSvg } from "@/components/svgContainer/SvgContainer";
import { Checkbox } from "@/components/ui/checkbox";

const teamData = [
  { id: 1, name: "M. R. Shihab", image: <ProfileImgSvg /> },
  { id: 2, name: "John Doe", image: <ProfileImgSvg /> },
  { id: 3, name: "Jane Smith", image: <ProfileImgSvg /> },
];

const TeamMembers = () => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  // Check if all team members are selected
  const allSelected = selectedMembers.length === teamData.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedMembers([]); // Uncheck all
    } else {
      setSelectedMembers(teamData.map((member) => member.id));
    }
  };

  const toggleMember = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((memberId) => memberId !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h3 className="font-outfit text-2xl mb-1 font-medium">
        Team members required
      </h3>
      <p className="text-[#545454] text-lg mb-5 font-medium">
        Choose which team members will perform this service
      </p>

      <h3 className="flex gap-3 items-center">
        <Checkbox
          id="all_team_members"
          className="scale-150"
          checked={allSelected}
          onCheckedChange={toggleAll}
        />
        <label
          htmlFor="all_team_members"
          className="font-medium text-[#1E1E1E] text-lg"
        >
          All team members
        </label>
        <p className="font-bold text-[#545454] w-6 h-6 rounded-full border border-[#008A90] grid place-items-center text-sm">
          {teamData.length}
        </p>
      </h3>

      {/* Individual Members */}
      <div className="space-y- mt-5">
        {teamData.map((data) => (
          <div
            key={data.id}
            className="flex gap-5 items-center py-7 border-t border-[#00c1cb5e]"
          >
            <Checkbox
              id={`team_member_${data.id}`}
              className="scale-150"
              checked={selectedMembers.includes(data.id)}
              onCheckedChange={() => toggleMember(data.id)}
            />
            <div>{data.image}</div>
            <label
              htmlFor={`team_member_${data.id}`}
              className="font-medium text-[#1E1E1E]"
            >
              {data.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
