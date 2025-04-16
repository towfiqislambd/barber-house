import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import profile from "../../../assets/images/profileImg.png";

const ProfileInfo = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-[#2C2C2C]">Profile</p>
      <p className="text-base mb-5 font-medium text-[#757575]">
        Manage your team members personal profile
      </p>
      <figure className="lg:w-[100px] w-12 lg:h-[100px] h-12 rounded-full">
        <img src={profile} className="w-full h-full" />
      </figure>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 mb-5">
        <div>
          <label className="font-medium mb-1 block w-full">First Name</label>
          <input
            type="text"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your first name"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Last Name</label>
          <input
            type="text"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your Last name"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Email *</label>
          <input
            type="text"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your email"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Phone number</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input your phone number"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Country</label>
          <Select>
            <SelectTrigger className="w-full text-base border !py-6 bg-transparent">
              <SelectValue placeholder="Input your phone number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Input your Country">
                Input your Country
              </SelectItem>
              <SelectItem value="BD">BD</SelectItem>
              <SelectItem value="Saudi Aribia">Saudi Aribia</SelectItem>
              <SelectItem value="UK">UK</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Birthday</label>
          <input
            type="date"
            className="px-3 lg:py-3 py-2 rounded-lg bg-transparent w-full block shadow outline-none border"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Job title</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input Job title"
          />
        </div>
      </div>
      <hr />

      <p className="text-xl font-semibold mt-7 text-[#2C2C2C]">Profile</p>
      <p className="text-base mb-5 font-medium text-[#757575]">
        Manage your team members personal profile
      </p>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 mb-10 md:mb-0">
        <div>
          <label className="font-medium mb-1 block w-full">Start date</label>
          <input
            type="date"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">End date</label>
          <input
            type="date"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">
            Employment type
          </label>
          <Select>
            <SelectTrigger className="w-full text-base border !py-6 bg-transparent">
              <SelectValue placeholder="Employment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Input your Country">
                Input your Country
              </SelectItem>
              <SelectItem value="BD">Full time</SelectItem>
              <SelectItem value="Saudi Aribia">Part time</SelectItem>
              <SelectItem value="UK">Intern</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">
            Team member ID
          </label>
          <input
            type="text"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Enter team member id"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Job title</label>
          <input
            type="text"
            className="px-3 lg:py-3 py-2 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input Job title"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
