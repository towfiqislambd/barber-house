import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  ProductDetailsOne,
  ProductDetailsTwo,
} from "@/components/svgContainer/SvgContainer";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import servicesBg from "../../assets/images/servicesBg.png";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: 1,
    thumbnail: p1,
    status: "In Stock",
    title: "Valor & Co Perfume",
    count: 10,
  },
  {
    id: 2,
    thumbnail: p2,
    status: "Stock Out",
    title: "StriveX Message Oil",
    count: 10,
  },
  {
    id: 3,
    thumbnail: p1,
    status: "In Stock",
    title: "Valor & Co Perfume",
    count: 10,
  },
  {
    id: 4,
    thumbnail: p2,
    status: "In Stock",
    title: "StriveX Message Oil",
    count: 10,
  },
  {
    id: 5,
    thumbnail: p1,
    status: "Stock Out",
    title: "Valor & Co Perfume",
    count: 10,
  },
  {
    id: 6,
    thumbnail: p2,
    status: "In Stock",
    title: "StriveX Message Oil",
    count: 10,
  },
];
const ProductDetails = () => {
  return (
    <div className="container sm:pb-20 pb-10 md:pt-32 pt-24 px-5">
      {/* Breadcrumb */}
      <div className="flex gap-4 items-center mb-10">
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Make Up", href: "#" },
            { label: "1Skin - Foundation #300 True Natural" },
          ]}
        />
      </div>

      <h2 className="font-outfit text-3xl font-semibold mb-7">
        1Skin - Foundation #300 True Natural
      </h2>
      <div className="grid xl:grid-cols-12 lg:gap-10 gap-5">
        <div className="xl:col-span-5 col-span-10 bg-[#E6F7F9] rounded-lg flex justify-center items-center">
          <img
            src={p1}
            className="xl:w-[182px] w-full h-[300px] xl:h-full object-contain"
          />
        </div>
        <div className="lg:col-span-7 col-span-10">
          <h3 className="mb-3 font-manrope text-2xl font-semibold">A $64</h3>
          <div className="flex gap-3 items-center">
            <Link to="/checkout">
              <button className="sm:px-5 px-3 text-white bg-primary sm:py-3 py-1.5 rounded-lg border duration-300 transition-all border-primary font-manrope font-lg font-medium">
                Buy now
              </button>
            </Link>
            <button className="sm:px-5 px-3 text-primary sm:py-3 py-1.5 rounded-lg border duration-300 transition-all border-primary font-manrope font-lg font-medium">
              Add to cart
            </button>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 font-bold border rounded-full flex justify-center items-center border-gray-900">
                -
              </button>
              <span className="text-lg font-medium">01</span>
              <button className="w-8 h-8 font-bold rounded-full flex justify-center items-center bg-[#2C2C2C] text-white">
                +
              </button>
            </div>
          </div>
          <ul className="space-y-3 mb-7">
            <li className="flex gap-2 items-center font-medium font-manrope">
              <ProductDetailsOne />
              <p>Brand: O Cosmedics</p>
            </li>
            <li className="flex gap-2 items-center font-medium font-manrope">
              <ProductDetailsOne />
              <p>Volume: 30 ml</p>
            </li>
            <li className="flex gap-2 items-center font-medium font-manrope">
              <ProductDetailsTwo />
              <p>Availability: In Stock</p>
            </li>
          </ul>
          <div className="space-y-3 text-[#545454] font-medium">
            <p>
              A high performing natural foundation where silicones have been
              replaced by natural texturisers, designed to hydrate and protect
              the skin with a velvety finish.
            </p>
            <p>
              The formulation is enhanced by desert date oil, known for its
              hydrating, nourishing and purifying benefits. 20% of the formula
              is made by an organic fruit extract, to help fight environmental
              stress as well as repair skin and support firmness and elasticity,
              collagen and elastin synthesis.
            </p>
            <p>
              True Natural is the middle point of 5 shades that extend the O
              Cosmedics corrective skin care offer to ensure a multifaceted skin
              health approach.
            </p>
            <p>FINISH Natural Lightweight, comfortable and smoothing</p>
          </div>
        </div>
      </div>

      <h3 className="font-outfit text-3xl font-medium md:mt-14 mt-7 text-[#2C2C2C] mb-7">
        Other products in this category
      </h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-5">
        {productsData.map((data) => (
          <div key={data.id} className="group">
            <div className="group-hover:bg-[#F8FFFF] border border-primary rounded-xl bg-white p-6 duration-300 transition-all group-hover:border-borderColorLight">
              <figure className="bg-[#E6F7F9] rounded-lg flex items-center justify-center relative">
                <img src={data.thumbnail} alt="" />
                <span
                  className={`absolute top-3 text-sm font-medium right-3 px-3 py-2 rounded ${
                    data.status === "In Stock"
                      ? "bg-[#00CE6E33] text-[#00894E]"
                      : "bg-[#FF000033] text-[#A10000]"
                  }`}
                >
                  {data.status}
                </span>
              </figure>
              <h3 className="py-2 font-manrope text-[#545454] text-lg font-semibold">
                {data.title}
              </h3>
              <div className="flex gap-2 items-center pb-3">
                <img src={servicesBg} alt="servicesBg" />
                <p className="font-manrope font-semibold text-[#008A90] text-lg">
                  {data.count}
                </p>
              </div>
              <button className="px-5 group-hover:bg-primary group-hover:text-white py-2 rounded-full border duration-300 transition-all border-primary font-manrope font-lg font-medium">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
