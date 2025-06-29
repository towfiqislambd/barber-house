import { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import EditCategoryModal from "../Modals/EditCategoryModal";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteCategory, useDeleteService } from "@/hooks/cms.mutations";
import { Loader } from "@/components/Loader/Loader";

const AllCategories = ({ categoryData, isLoading, refetch }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const { mutateAsync: deleteService } = useDeleteService();
  const { mutateAsync: deleteCategory } = useDeleteCategory();

  const handleEditClick = id => {
    setSelectedId(id);
    setIsEditOpen(true);
  };

  const handleDeleteClick = id => {
    setSelectedService(id);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async id => {
    await deleteCategory(id);
  };

  const confirmDelete = async () => {
    try {
      await deleteService(selectedService);
      refetch();
      setDeleteDialogOpen(false);
      setSelectedService(null);
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  return (
    <>
      <div className="space-y-8">
        {isLoading ? (
          <div className="py-32 flex justify-center">
            <Loader />
          </div>
        ) : categoryData !== undefined ? (
          categoryData?.map(data => (
            <div key={data.id}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-outfit text-xl font-medium text-[#2C2C2C] mb-3">
                  {data?.name}
                </h3>
                <select
                  className="border outline-none border-gray-300 rounded-2xl px-2 py-1 text-sm"
                  onChange={e => {
                    if (e.target.value === "edit") handleEditClick(data.id);
                    if (e.target.value === "delete") handleDelete(data.id);
                  }}
                  defaultValue=""
                >
                  <option className="action">Action</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </div>
              <div className="space-y-4">
                {data?.filtered_services_count === 0 ? (
                  <div className="bg-white rounded-xl border-l-[5px] mb-5 border-[#BDBDBD] py-5 3xl:py-8 3xl:px-5 px-3 shadow-[0px_0px_4px_0px_rgba(4,0,116,0.10)]">
                    <p className="text-[#757575] text-lg font-medium">
                      No service
                    </p>
                  </div>
                ) : (
                  data?.catalog_services?.map((infoData, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border-l-[5px] py-5 3xl:py-8 3xl:px-5 px-3 shadow-[0px_0px_4px_0px_rgba(4,0,116,0.10)] flex justify-between items-center"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                          {infoData.name}
                        </h4>
                        <h4>{infoData.duration} min</h4>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>SAR :{infoData.price}</p>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button type="button">
                              <PiDotsThreeOutlineVerticalFill className="text-xl" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[210px] absolute right-0 py-7 px-5">
                            <div className="space-y-6 flex flex-col text-left items-start">
                              <Link
                                className="text-[#545454] font-medium hover:text-primary"
                                to={`/businessDashboard/editService/${infoData?.id}`}
                              >
                                Edit service
                              </Link>
                              <button
                                onClick={() => handleDeleteClick(infoData?.id)}
                                className="font-medium text-[#D21837]"
                              >
                                Permanently delete
                              </button>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-medium text-red-500">No data found!</p>
        )}
      </div>

      {/* Edit Category Modal */}
      <EditCategoryModal
        refetch={refetch}
        id={selectedId}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="mb-3 text-lg">
              Permanently delete service
            </DialogTitle>
            <DialogDescription>
              <p className="font-medium text-base text-[#2C2C2C]">
                Are you sure you want to delete this service?
              </p>
              <div className="flex gap-3 justify-end mt-8">
                <button
                  onClick={() => setDeleteDialogOpen(false)}
                  className="px-4 py-[5px] rounded-lg border border-[#222] font-medium text-[#2C2C2C]"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-[#D21837] text-white rounded-lg border border-[#D21837] font-medium"
                >
                  Delete
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllCategories;
