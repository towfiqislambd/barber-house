import { MembershipCrossSvg } from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useProductsBrand, useProductsCategory } from "@/hooks/cms.queries";
import { Link } from "react-router-dom";

const AddNewProduct = () => {
  const { data: productsBrand } = useProductsBrand();
  const { data: productsCategory } = useProductsCategory();

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
              <Select>
                <SelectTrigger className="w-full text-base border !py-[22px]">
                  <SelectValue placeholder="Select a brand" />
                </SelectTrigger>
                <SelectContent>
                  {productsBrand?.map(brand => (
                    <SelectItem key={brand?.id} value={brand?.id}>
                      {brand?.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Product Category
              </label>
              <Select>
                <SelectTrigger className="w-full text-base border !py-[22px]">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  {productsCategory?.map(category => (
                    <SelectItem key={category?.id} value={category?.id}>
                      {category?.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                Stock Quantity
              </label>
              <Input placeholder="Stock quantity" className="h-11 px-4" />
            </div>
            <div className="mb-7">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Add an image
              </label>
              <Input type="file" className="h-11 px-4" />
            </div>

            {/* Pricing Section */}
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
            <div className="mb-10">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Price
              </label>
              <Input placeholder="SAR" className="h-11 px-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewProduct;
