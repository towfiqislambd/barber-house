import { useState } from "react";
import SalonCardDetailsBanner from "../Home/SalonCardDetailsPage/section/SalonCardDetailsBanner";
import ProductsOfGalibsSalon from "./Sections/ProductsOfGalibsSalon";
import ServicesOfGalibsSalon from "./Sections/ServicesOfGalibsSalon";
import { RxCross2 } from "react-icons/rx";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const cartData = [
  {
    id: 1,
    thumbnail: p1,
    title: "Valor & Co Perfume",
    amount: 64,
  },
  {
    id: 2,
    thumbnail: p2,
    title: "StriveX Message Oil",
    amount: 30,
  },
  {
    id: 3,
    thumbnail: p1,
    title: "Valor & Co Perfume",
    amount: 26,
  },
  {
    id: 4,
    thumbnail: p2,
    title: "StriveX Message Oil",
    amount: 75,
  },
  {
    id: 5,
    thumbnail: p1,
    title: "Valor & Co Perfume",
    amount: 55,
  },
  {
    id: 6,
    thumbnail: p2,
    title: "StriveX Message Oil",
    amount: 35,
  },
];

const ProductHome = () => {
  const [activeCart, setActiveCart] = useState(false);
  return (
    <div className="relative">
      <div className="lg:pt-32 pt-24">
        <SalonCardDetailsBanner setActiveCart={setActiveCart} />
      </div>
      <ServicesOfGalibsSalon setActiveCart={setActiveCart} />
      <ProductsOfGalibsSalon setActiveCart={setActiveCart} />

      {/* For cart */}
      {activeCart && (
        <div className="fixed top-20 md:top-24 lg:top-28 xl:top-32 right-0 overflow-y-auto z-50 h-[500px] xl:h-[600px] w-[320px] md:w-[350px] xl:w-[380px] border rounded-xl bg-white">
          <div className="flex justify-between items-center p-3 sticky top-0 bg-white">
            <button onClick={() => setActiveCart(false)}>
              <RxCross2 className="text-xl" />
            </button>
            <div className="text-[#2C2C2C] text-xl font-semibold">
              Cart <span>(1)</span>
            </div>
            <div className=""></div>
          </div>
          <div className="border-t pb-5"></div>
          <div className="2xl:p-3 space-y-3 2xl:space-y-5">
            {cartData.map((data) => (
              <div
                key={data.id}
                className="flex bg-[#FAFBFC] py-2 px-3 gap-3 2xl:gap-5 items-center"
              >
                <div className="w-16 2xl:w-[90px] grid py-3 place-items-center flex-shrink-0 bg-[#E6F7F9] rounded">
                  <img src={data.thumbnail} className="w-8 2xl:w-[46px] h-14 2xl:h-[70px]" />
                </div>
                <div className="flex-grow">
                  <h3 className="2xl:text-lg font-semibold pb-1">{data.title}</h3>
                  <p className="font-semibold text-sm 2xl:text-base text-[#545454] pb-2">
                    ${data.amount}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button className="w-5 h-5 2xl:w-6 2xl:h-6 border rounded-full flex justify-center items-center border-gray-900">
                        -
                      </button>
                      <span>01</span>
                      <button className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex justify-center items-center bg-[#2C2C2C] text-white">
                        +
                      </button>
                    </div>
                    <button>
                      <RiDeleteBin6Line className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center py-2 px-5">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">
              $<span>54</span>
            </p>
          </div>
          <div className="px-5 py-5">
            <Link to="/checkout">
              <button className="w-full block rounded-full text-center font-semibold text-white bg-primary py-3">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}


    </div>
  );
};

export default ProductHome;
