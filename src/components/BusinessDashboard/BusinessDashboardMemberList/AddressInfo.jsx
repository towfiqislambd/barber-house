import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddressInfo = () => {
  return (
    <div>
      <p className="text-xl font-semibold text-[#2C2C2C]">Add address</p>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 mb-5">
        <div>
          <label className="font-medium mb-1 block w-full">First Name</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your first name"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Last Name</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your Last name"
          />
        </div>
        <div>
          <label className="font-medium mb-1 block w-full">Email *</label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg w-full block bg-transparent shadow outline-none border"
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
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
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
    </div>
  );
};

export default AddressInfo;
