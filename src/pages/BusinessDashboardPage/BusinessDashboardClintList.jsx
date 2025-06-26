import { useState } from "react";
import { Loader } from "@/components/Loader/Loader";
import { AppointmentsSearchSvg } from "@/components/svgContainer/SvgContainer";
import { useClientLists } from "@/hooks/cms.queries";
import useAuth from "@/hooks/useAuth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BusinessDashboardClientList = () => {
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { data: clientLists, isLoading } = useClientLists(online_store_id);
  const [selectedClient, setSelectedClient] = useState(null);
  const [open, setOpen] = useState(false);

  const handleRowClick = client => {
    setSelectedClient(client);
    setOpen(true);
  };

  return (
    <div className="p-5 md:p-0">
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Clients list ({clientLists?.length})
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 xl:mb-10">
        Track, analyze & grow your salon business daily
      </p>

      {/* Search Input */}
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="relative w-[300px] md:w-[350px] 4xl:w-[450px]">
          <input
            type="text"
            className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100"
            placeholder="Search by reference or client"
          />
          <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full">
            <AppointmentsSearchSvg />
          </button>
        </div>
      </div>

      <div className="border-t border-primary mt-5 md:mt-10 pb-5 md:pb-10"></div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        {isLoading ? (
          <div className="flex justify-center !w-full items-center py-10">
            <Loader />
          </div>
        ) : (
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-dashed">
                <th className="px-4 py-3">Client Name</th>
                <th className="px-4 py-3">Mobile Number</th>
                <th className="px-4 py-3">Reviews</th>
                <th className="px-4 py-3">Sales</th>
                <th className="px-4 py-3">Created at</th>
              </tr>
            </thead>
            <tbody>
              {clientLists?.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-dashed cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(row)}
                >
                  <td className="px-4 py-4 capitalize">{row?.name}</td>
                  <td className="px-4 py-4 capitalize">{row?.phone}</td>
                  <td className="px-4 py-4 capitalize">5.0</td>
                  <td className="px-4 py-4 capitalize">{row?.total_spent}</td>
                  <td className="px-4 py-4 capitalize">7 June</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[400px] rounded-2xl p-5">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold">
              Client Summary
            </DialogTitle>
          </DialogHeader>
          {selectedClient && (
            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              <div className="col-span-2 border rounded-md p-3">
                <p className="text-gray-500">Total purchased</p>
                <p className="font-semibold">
                  SAR {selectedClient.total_spent}
                </p>
              </div>

              <div className="border rounded-md p-3">
                <p className="text-gray-500">Appointment</p>
                <p className="font-semibold">
                  {selectedClient?.total_appointments}
                </p>
              </div>
              <div className="border rounded-md p-3">
                <p className="text-gray-500">Rating</p>
                <p className="font-semibold flex items-center gap-1">5 ⭐</p>
              </div>
              <div className="border rounded-md p-3">
                <p className="text-gray-500">Cancelled</p>
                <p className="font-semibold">{selectedClient?.total_canceled}</p>
              </div>
              <div className="border rounded-md p-3">
                <p className="text-gray-500">Confirmed</p>
                <p className="font-semibold">
                  {selectedClient?.total_confirmed}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BusinessDashboardClientList;
