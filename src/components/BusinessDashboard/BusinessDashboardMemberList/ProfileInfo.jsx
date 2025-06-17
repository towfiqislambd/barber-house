import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ProfileInfo = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div>
      <p className="text-xl font-semibold text-[#2C2C2C]">Profile</p>
      <p className="text-base mb-5 font-medium text-[#757575]">
        Manage your team members personal profile
      </p>

      {/* Profile Image Upload */}
      <div className="relative w-fit">
        <label htmlFor="profile-upload">
          <div className="lg:w-[100px] w-16 lg:h-[100px] h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center cursor-pointer overflow-hidden border-2 border-dashed border-gray-400 hover:border-gray-600 transition-all duration-200">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl text-gray-600 font-bold">+</span>
            )}
          </div>
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5 mb-5">
        <div>
          <label className="font-medium mb-1 block w-full">First Name *</label>
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
          <label className="font-medium mb-1 block w-full">
            Phone number *
          </label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input your phone number"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Country *</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Add Country"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Birthday *</label>
          <input
            type="date"
            className="px-3 lg:py-3 py-2 rounded-lg bg-transparent w-full block shadow outline-none border"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Job title *</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input Job title"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Start date *</label>
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
                Select employment type
              </SelectItem>
              <SelectItem value="full_time">Full time</SelectItem>
              <SelectItem value="part_time">Part time</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="contract">Contractual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Employee Id</label>
          <input
            type="text"
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Enter Employee id"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
