import React, { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useUserDataGet } from "@/hooks/user.queries";
import {
  useAddAddress,
  useDeleteAddress,
  useUpdateAddress,
  useUpdateProfileData,
} from "@/hooks/user.mutation";
import { Loader } from "@/components/Loader/Loader";

export default function UserProfile() {
  const [addressError, setAddressError] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [editAddressOpen, setEditAddressOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editAddressValue, setEditAddressValue] = useState("");

  const { data: userData, isLoading, refetch } = useUserDataGet();
  const { mutateAsync: addAddress, isPending } = useAddAddress();
  const { mutateAsync: updateAddress, isPending: updatePending } =
    useUpdateAddress();
  const { mutateAsync: deleteAddress, isPending: deletePending } =
    useDeleteAddress();
  const { mutateAsync: updateUserProfile, isPending: editPending } =
    useUpdateProfileData();
  const toggleDropdown = index => {
    setOpenDropdown(prev => (prev === index ? null : index));
  };

  const [editFormData, setEditFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    country: "",
    avatar: null,
  });

  const [addressFormData, setAddressFormData] = useState({
    address: "",
  });

  useEffect(() => {
    if (userData) {
      setEditFormData({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
        number: userData.number || "",
        country: userData.country || "Bangladesh",
        avatar: userData.avatar || null,
      });
    }
  }, [userData]);

  const handleEditProfileSave = async () => {
    const formData = new FormData();
    formData.append("first_name", editFormData.first_name);
    formData.append("last_name", editFormData.last_name);
    formData.append("email", editFormData.email);
    formData.append("number", editFormData.number);
    formData.append("country", editFormData.country);
    if (editFormData.avatar && typeof editFormData.avatar !== "string") {
      formData.append("avatar", editFormData.avatar);
    }

    await updateUserProfile(formData);
    setEditProfile(false);
  };

  const handleSaveAddress = async () => {
    if (!addressFormData.address.trim()) {
      setAddressError("Local address is required.");
      return;
    }

    try {
      await addAddress(addressFormData);
      setOpen(false);
      setAddressFormData({ address: "" });
      setAddressError("");
      refetch();
    } catch (error) {
      console.error("Add address failed:", error);
    }
  };

  const handleEditAddressSave = async () => {
    try {
      await updateAddress({
        id: selectedAddress.id,
        address: editAddressValue,
      });
      setEditAddressOpen(false);
      setSelectedAddress(null);
      refetch();
    } catch (error) {
      console.error("Edit address failed:", error);
    }
  };

  const handleDeleteAddress = async () => {
    try {
      if (selectedAddress?.id) {
        await deleteAddress({ id: selectedAddress.id });
        setOpenDelete(false);
        setSelectedAddress(null);
        refetch();
      }
    } catch (error) {
      console.error("Delete address failed:", error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setOpenDelete(false);
    setEditProfile(false);
    setEditAddressOpen(false);
    setSelectedAddress(null);
  };

  const showModal2 = () => {
    setOpenDelete(true);
  };

  return (
    <>
      {isLoading ? (
        <div className="min-h-[calc(100vh-250px)] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="px-[15px]">
          <h3 className="text-[#2C2C2C] font-outfit text-[24px] xl:text-[36px] font-medium mb-5 lg:mb-[40px]">
            Profile
          </h3>
          <div className="flex flex-col xl:flex-row gap-[20px]">
            {/* Profile Info */}
            <div className="p-[20px] bg-white rounded-[16px] border border-borderColorLight h-[400px]">
              <div className="text-end">
                <button
                  onClick={() => setEditProfile(true)}
                  className="text-primary text-[18px] font-semibold"
                >
                  Edit
                </button>
              </div>
              <div className="flex justify-center">
                {editFormData.avatar ? (
                  <img
                    src={
                      typeof editFormData.avatar === "string"
                        ? `${import.meta.env.VITE_SITE_URL}/${
                            editFormData.avatar
                          }`
                        : URL.createObjectURL(editFormData.avatar)
                    }
                    alt="Avatar"
                    className="w-[100px] h-[100px] rounded-full object-cover mt-4"
                  />
                ) : (
                  <div className="w-[100px] h-[100px] bg-[#4B58AA] rounded-full flex items-center justify-center text-white text-[32px] font-bold uppercase mt-4">
                    {userData?.first_name?.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center mt-[10px] mb-[30px]">
                <h3 className="text-[20px] font-medium">
                  {editFormData.first_name} {editFormData.last_name}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <p>
                  <strong>Email:</strong> {editFormData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {editFormData.number}
                </p>
                <p>
                  <strong>Country:</strong> {editFormData.country}
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="p-[20px] bg-white rounded-[16px] border border-borderColorLight xl:w-[600px] h-auto">
              <h3 className="text-[20px] font-medium mb-[15px]">
                My Addresses
              </h3>
              {userData?.addresses?.length === 0 && (
                <p className="text-red-500 font-medium text-lg mb-5">
                  No address found yet!
                </p>
              )}
              {userData?.addresses?.map((address, index) => (
                <div
                  className="flex flex-col gap-[20px] mb-[30px]"
                  key={address.id}
                >
                  <div className="bg-[#F4F9FA] py-[10px] xl:py-[20px] px-[10px] xl:px-[24px] flex justify-between gap-[12px] rounded-[8px]">
                    <div className="flex gap-[12px]">
                      <div className="w-[40px] h-[40px] rounded-full p-[10px] bg-white shadow-md flex-shrink-0">
                        <span className="text-primary text-[20px]">
                          <IoMdHome />
                        </span>
                      </div>
                      <div className="flex flex-col gap-[10px] xl:w-[337px]">
                        <h4 className="text-[#1E1E1E] font-manrope xl:text-[20px] font-semibold xl:leading-[30px]">
                          Address {index + 1}
                        </h4>
                        <h4 className="text-[#1E1E1E] font-manrope xl:text-[20px] font-semibold xl:leading-[30px]">
                          {address.address}
                        </h4>
                      </div>
                    </div>
                    <div className="text-end flex justify-end items-start w-[48px] relative">
                      <button onClick={() => toggleDropdown(index)}>
                        <HiDotsVertical />
                      </button>
                      {openDropdown === index && (
                        <div className="absolute py-[15px] px-[15px] bg-white shadow-sm text-start top-[20px] right-0 rounded-[8px] w-[164px] z-10">
                          <button
                            onClick={() => {
                              setSelectedAddress(address);
                              setEditAddressValue(address.address);
                              setEditAddressOpen(true);
                              setOpenDropdown(null);
                            }}
                            className="text-[#2C2C2C] font-medium text-[16px] mb-[10px] w-full text-start"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              setSelectedAddress(address);
                              showModal2();
                              setOpenDropdown(null);
                            }}
                            className="text-[#2C2C2C] font-medium text-[16px] w-full text-start"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setOpen(true)}
                className="py-[10px] px-[16px] text-[#545454] text-[18px] border rounded-[32px] border-borderColor flex gap-[10px] items-center"
              >
                <CiCirclePlus /> Add address
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      <Modal
        closable={false}
        footer={null}
        open={editProfile}
        onCancel={handleCancel}
      >
        <div className="lg:p-[15px]">
          <h3 className="text-[24px] font-medium mb-[20px]">Edit Profile</h3>
          <form className="flex flex-col gap-[20px]">
            <div>
              <label className="block font-medium mb-[6px]">
                Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={e =>
                  setEditFormData({
                    ...editFormData,
                    avatar: e.target.files[0],
                  })
                }
              />
              {editFormData.avatar &&
                typeof editFormData.avatar !== "string" && (
                  <img
                    src={URL.createObjectURL(editFormData.avatar)}
                    alt="Preview"
                    className="w-[80px] h-[80px] rounded-full mt-3 object-cover"
                  />
                )}
            </div>

            <div className="flex gap-[10px]">
              <input
                type="text"
                value={editFormData.first_name}
                onChange={e =>
                  setEditFormData({
                    ...editFormData,
                    first_name: e.target.value,
                  })
                }
                placeholder="First name"
                className="w-full border p-2 rounded-md"
              />
              <input
                type="text"
                value={editFormData.last_name}
                onChange={e =>
                  setEditFormData({
                    ...editFormData,
                    last_name: e.target.value,
                  })
                }
                placeholder="Last name"
                className="w-full border p-2 rounded-md"
              />
            </div>

            <PhoneInput
              country={"bd"}
              value={editFormData.number}
              onChange={phone =>
                setEditFormData({ ...editFormData, number: phone })
              }
            />

            <input
              type="email"
              value={editFormData.email}
              onChange={e =>
                setEditFormData({ ...editFormData, email: e.target.value })
              }
              placeholder="Email address"
              className="w-full border p-2 rounded-md"
            />

            <input
              type="text"
              value={editFormData.country}
              onChange={e =>
                setEditFormData({ ...editFormData, country: e.target.value })
              }
              placeholder="Country"
              className="w-full border p-2 rounded-md"
            />

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                className="w-full border p-2 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-full bg-primary text-white p-2 rounded-md"
                onClick={handleEditProfileSave}
              >
                {editPending ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Add Address Modal */}
      <Modal closable={false} footer={null} open={open} onCancel={handleCancel}>
        <form className="p-[15px]">
          <h3 className="text-[24px] font-medium mb-[20px]">Add Address</h3>
          <input
            type="text"
            value={addressFormData.address}
            onChange={e => {
              setAddressFormData({
                ...addressFormData,
                address: e.target.value,
              });
              if (e.target.value.trim()) setAddressError(""); // Clear error on typing
            }}
            placeholder="Write your local address"
            className="w-full border p-3 rounded-md"
          />
          {addressError && (
            <p className="text-red-500 text-sm mt-2">{addressError}</p>
          )}
          <button
            type="button"
            className="mt-[20px] w-full bg-primary text-white py-[10px] rounded-md"
            onClick={handleSaveAddress}
          >
            {isPending ? "Saving...." : "Save Address"}
          </button>
        </form>
      </Modal>

      {/* Edit Address Modal */}
      <Modal
        closable={false}
        footer={null}
        open={editAddressOpen}
        onCancel={handleCancel}
      >
        <form className="p-[15px]">
          <h3 className="text-[24px] font-medium mb-[20px]">Edit Address</h3>
          <input
            type="text"
            value={editAddressValue}
            onChange={e => setEditAddressValue(e.target.value)}
            placeholder="Edit your address"
            className="w-full border p-3 rounded-md"
          />
          <button
            type="button"
            className="mt-[20px] w-full bg-primary text-white py-[10px] rounded-md"
            onClick={handleEditAddressSave}
          >
            {updatePending ? "Updating...." : "Update Address"}
          </button>
        </form>
      </Modal>

      {/* Delete Address Modal */}
      <Modal
        open={openDelete}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className="p-[15px]">
          <h3 className="text-[20px] font-semibold mb-4">Confirm Delete</h3>
          <p>Are you sure you want to delete this address?</p>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCancel}
              className="w-full border border-gray-300 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteAddress}
              className="w-full bg-red-600 text-white py-2 rounded-md"
            >
              {deletePending ? "Deleting...." : "Delete Address"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
