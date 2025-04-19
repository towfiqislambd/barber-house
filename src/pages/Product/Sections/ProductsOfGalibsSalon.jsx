import { Link } from "react-router-dom";
import p1 from "../../../assets/images/p1.png";
import p2 from "../../../assets/images/p2.png";
import servicesBg from "../../../assets/images/servicesBg.png";

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

const ProductsOfGalibsSalon = ({ setActiveCart }) => {
  return (
    <section className="bg-[#F8F8F8] 2xl:py-20 py-10">
      <div className="container px-5 4xl:px-0">
        <h3 className="font-outfit text-3xl font-medium text-[#2C2C2C] mb-7">
          Products of Ghalibs Barber Salon
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-5">
          {productsData.map((data) => (
            <div key={data.id} className="group">
              <div className="group-hover:bg-[#F8FFFF] border border-borderColorLight rounded-xl bg-white p-6 duration-300 transition-all group-hover:border-borderColor">
                <Link to="/productDetails">
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
                </Link>
                <h3 className="py-2 font-manrope text-[#545454] text-lg font-semibold">
                  {data.title}
                </h3>
                <div className="flex gap-2 items-center pb-3">
                  <img src={servicesBg} alt="servicesBg" />
                  <p className="font-manrope font-semibold text-primary text-lg">
                    {data.count}
                  </p>
                </div>
                <button
                  onClick={() => setActiveCart(true)}
                  className="px-5 group-hover:bg-primary group-hover:text-white py-2 rounded-full border duration-300 transition-all border-primary font-manrope font-lg font-medium"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOfGalibsSalon;
