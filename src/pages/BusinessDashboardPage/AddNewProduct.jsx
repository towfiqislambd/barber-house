import SelectCategoryModal from "@/components/BusinessDashboard/Modals/SelectCategoryModal";
import SelectSupplierModal from "@/components/BusinessDashboard/Modals/SelectSupplierModal";
import { MembershipCrossSvg } from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddNewProduct = () => {
  const [isRetailEnabled, setIsRetailEnabled] = useState(false);
  const [isStockOpen, setIsStockOpen] = useState(false);
  return (
    <section className="4xl:max-w-[1095px] mx-auto py-5 px-3 sm:px-6 lg:px-6 4xl:px-0">
      <div className="flex justify-between items-center mb-5">
        <Link to="/businessDashboard/catalogue">
          <MembershipCrossSvg />
        </Link>
        <button className="bg-[#008A90] text-white px-5 md:py-[10px] py-2 font-medium rounded-lg">
          Save Product
        </button>
      </div>
      <div className="rounded-xl">
        <div className="border rounded-t-xl border-[#00C2CB] px-6 py-4">
          <h3 className="font-outfit text-xl md:text-2xl font-medium text-[#1E1E1E]">
            Add new product
          </h3>
        </div>
        <div className="border rounded-b-xl xl:px-20 lg:px-10 px-5 py-5">
          <h3 className="font-outfit md:text-2xl text-xl font-medium mb-1">
            Basic information
          </h3>
          <p className="md:text-lg text-base text-[#545454] font-medium mb-5">
            How this form will appear to clients
          </p>
          <div className="shadow border rounded-lg lg:p-10 p-5">
            <div className="mb-7">
              <label
                htmlFor="membership"
                className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]"
              >
                Product name
              </label>
              <Input placeholder="Add product name" className="h-11 px-4" />
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Product barcode{" "}
                <span className="text-[#545454]">(optional)</span>
              </label>
              <Input placeholder="UPC, EAN, GTIN" className="h-11 px-4" />
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Product brand
              </label>
              <button className="font-semibold text-[#008A90]">
                Select a brand
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center mb-7">
              <div className="lg:flex-1 w-full">
                <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                  Measure
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-[22px]">
                    <SelectValue placeholder="Milliliters (ml)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Milliliters (ml)">
                      Milliliters (ml)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:flex-1 w-full">
                <div className="lg:flex-1 w-full">
                  <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                    Amount
                  </label>
                  <Input placeholder="ml 0.00" className="h-11 px-4" />
                </div>
              </div>
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Short description
              </label>
              <Input placeholder="UPC, EAN, GTIN" className="h-11 px-4" />
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Product description
              </label>
              <Textarea
                placeholder="Add product description"
                rows={6}
                className="px-4"
              />
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Product category
              </label>

              <SelectCategoryModal />
            </div>
            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="text-xl mb-3 text-[#2C2C2C] font-medium font-outfit">
              Pricing
            </h3>
            <div className="mb-10">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Supply price
              </label>
              <Input placeholder=" 0.00" className="h-11 px-4" />
            </div>
            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="text-xl mb-1 text-[#2C2C2C] font-medium font-outfit">
              Pricing & payment
            </h3>
            <p className="font-medium text-[#545454] text-base mb-5">
              Choose how you&apos;d like your clients to pay
            </p>
            <div className="flex flex-col lg:flex-row gap-5 items-center mb-7">
              <div className="lg:flex-1 w-full">
                <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                  Valid for
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-[22px]">
                    <SelectValue placeholder="7 days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7 days">7 days</SelectItem>
                    <SelectItem value="14 days">14 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:flex-1 w-full">
                <div className="lg:flex-1 w-full">
                  <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                    Price
                  </label>
                  <Input placeholder="SAR" className="h-11 px-4" />
                </div>
              </div>
            </div>
            <h3 className="text-xl mb-1 text-[#2C2C2C] font-medium font-outfit">
              Retail sales
            </h3>

            <p className="font-medium text-[#545454] text-base mb-5">
              Allow sales of this product at checkout.
            </p>
            {/* Toggle switch */}
            <div className="flex gap-4 mb-8 items-center">
              <Switch
                checked={isRetailEnabled}
                onCheckedChange={setIsRetailEnabled}
              />
              <p>Enable retail sales</p>
            </div>

            {/* Conditionally rendered fields */}
            {isRetailEnabled && (
              <>
                <div className="flex flex-col lg:flex-row gap-5 items-center mb-7">
                  <div className="lg:flex-1 w-full">
                    <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                      Retail price
                    </label>
                    <Input placeholder="0.00" className="h-11 px-4" />
                  </div>
                  <div className="lg:flex-1 w-full">
                    <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                      Markup
                    </label>
                    <Input placeholder="0.00" className="h-11 px-4" />
                  </div>
                </div>
                <div className="mb-7">
                  <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                    Tax
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-[22px]">
                      <SelectValue placeholder="Default: No tax" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Default: No tax">
                        Default: No tax
                      </SelectItem>
                      <SelectItem value="No tax">No tax</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <div className="flex gap-4 mb-8 items-center">
              <Switch />
              <p>Enable team member commission</p>
            </div>

            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="text-xl mb-1 text-[#2C2C2C] font-medium font-outfit">
              Inventory
            </h3>
            <p className="font-medium text-[#545454] text-base mb-5">
              Manage stock levels of this product through Fresha.
            </p>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                SKU (Stock Keeping Unit)
              </label>
              <Select>
                <SelectTrigger className="w-full text-base border !py-[22px]">
                  <SelectValue placeholder="PIP-31070" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PIP-31070">PIP-31070</SelectItem>
                  <SelectItem value="PIP-31070">PIP-31070</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-7 flex flex-col gap-4 items-start">
              <button className="font-semibold text-[#008A90]">
                Generate SKU automatically
              </button>
              <button className="font-semibold text-[#008A90]">
                Add another SKU code
              </button>
              <label className="text-[#2C2C2C] font-semibold block text-[17px]">
                Supplier
              </label>
              <SelectSupplierModal />
            </div>
            <h3 className="text-xl mb-1 text-[#2C2C2C] font-medium font-outfit">
              Stock quantity
            </h3>

            <div className="flex gap-4 mb-8 items-center">
              <Switch checked={isStockOpen} onCheckedChange={setIsStockOpen} />
              <p>Track stock quantity</p>
            </div>
            {isStockOpen && (
              <>
                <div className="mb-7">
                  <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                    Current stock quantity
                  </label>
                  <Input placeholder="0" className="h-11 px-4" />
                </div>
                <div className="flex flex-col lg:flex-row gap-5 items-center mb-7">
                  <div className="lg:flex-1 w-full">
                    <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                      Low stock level
                    </label>
                    <Input placeholder="0.00" className="h-11 px-4" />
                  </div>
                  <div className="lg:flex-1 w-full">
                    <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                      Reorder quantity
                    </label>
                    <Input placeholder="0.00" className="h-11 px-4" />
                  </div>
                </div>
              </>
            )}
            <div className="flex gap-4 mb-8 items-center">
              <Switch />
              <p>Receive low stock notifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewProduct;
