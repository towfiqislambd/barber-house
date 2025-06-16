import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const TeamMembers = ({ allTeamMembers }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  const allSelected = selectedMembers.length === allTeamMembers.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(allTeamMembers.map(member => member.id));
    }
  };

  const toggleMember = id => {
    setSelectedMembers(prev =>
      prev.includes(id) ? prev.filter(mid => mid !== id) : [...prev, id]
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

      {/* Select All */}
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
          {allTeamMembers.length}
        </p>
      </h3>

      {/* Individual Members */}
      <div className="space-y-5 mt-5">
        {allTeamMembers.map(member => (
          <div
            key={member.id}
            className="flex gap-5 items-center py-7 border-t border-[#00c1cb5e]"
          >
            <Checkbox
              id={`team_member_${member.id}`}
              className="scale-150"
              checked={selectedMembers.includes(member.id)}
              onCheckedChange={() => toggleMember(member.id)}
            />
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              {member.image ? (
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${member.image}`}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <label
              htmlFor={`team_member_${member.id}`}
              className="font-medium text-[#1E1E1E]"
            >
              {member.first_name} {member.last_name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
