import {
  Amerik,
  MasterCartSvg,
  ProductEditSvg,
  VisaCartSvg,
  PaypalSvg,
} from "@/components/svgContainer/SvgContainer";
import hairSalon from "../../assets/images/Hair-Salon.png";
import s1 from "../../assets/images/s1.png";
import servicesBg from "../../assets/images/servicesBg.png";
import { Link } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const cartData = [
  {
    id: 1,
    thumbnail: s1,
    title: "1Skin - Foundation #300 True Natural",
    amount: 64,
    quantity: 1,
  },
  {
    id: 2,
    thumbnail: s1,
    title: "1Skin - Foundation #300 True Natural",
    amount: 30,
    quantity: 1,
  },
  {
    id: 3,
    thumbnail: s1,
    title: "1Skin - Foundation #300 True Natural",
    amount: 26,
    quantity: 1,
  },
  {
    id: 4,
    thumbnail: s1,
    title: "1Skin - Foundation #300 True Natural",
    amount: 75,
    quantity: 1,
  },
  {
    id: 5,
    thumbnail: s1,
    title: "1Skin - Foundation #300 True Natural",
    amount: 55,
    quantity: 1,
  },
  {
    id: 6,
    thumbnail: s1,
    title: "1Skin - Foundation #300 True Natural",
    amount: 35,
    quantity: 1,
  },
];

const Checkout = () => {
  return (
    <div className="xl:pb-20 pb-10 xl:pt-40 md:pt-32 pt-24 container">
      <h3 className="font-outfit font-semibold mb-3 text-2xl">Shipping From</h3>
      <div className="space-y-2">
        <img src={hairSalon} alt="" />
        <h3 className="font-semibold text-xl text-[#2C2C2C]">
          Skin Fitness Hair and Beauty Store
        </h3>
        <p className="text-[#545454] max-w-[550px] text-sm md:text-base">
          Skin Fitness Hair and Beauty pride ourselves in being skin and hair
          experts. We stock a full range of different products, so you can
          always find what you are looking for! Expert advise available!
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-5 md:mt-10">
        <div className="">
          <h3 className="font-outfit text-2xl text-[#2C2C2C] font-semibold mb-5">
            Select your shipping preference below:
          </h3>
          <div className="flex gap-3 justify-center items-center mb-5">
            <button className="px-10 text-[#2C2C2C] font-medium py-[10px] rounded border">
              Pick Up
            </button>
            <button className="px-10 !bg-primaryLight text-[#2C2C2C] font-medium py-[10px] rounded border">
              Delivery
            </button>
          </div>
          <div className="bg-[#F4F5F7] rounded-lg">
            <div className="flex justify-between items-center border-b border-[#ddd] p-5">
              <div className="flex gap-3 items-center">
                <h3 className="text-lg font-semibold text-[#2C2C2C]">
                  Contact
                </h3>
                <p className="text-[#2C2C2C]">contact@yourmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <ProductEditSvg />
                <p className="text-[#2C2C2C]">Edit</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-[#ddd] p-5">
              <div className="flex gap-3 items-center">
                <h3 className="text-lg font-semibold text-[#2C2C2C]">
                  Ship to
                </h3>
                <p className="text-[#2C2C2C]">
                  New Baneswor, Kathmandu, 44600, Nepal
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <ProductEditSvg />
                <p className="text-[#2C2C2C]">Edit</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-5">
              <div className="flex gap-3 items-center">
                <h3 className="text-lg font-semibold text-[#2C2C2C]">Method</h3>
                <p className="text-[#2C2C2C]">Cash on delivery </p>
              </div>
              <div className="flex gap-2 items-center">
                <ProductEditSvg />
                <p className="text-[#2C2C2C]">Edit</p>
              </div>
            </div>
          </div>
          <h3 className="font-outfit text-2xl text-[#2C2C2C] font-semibold mb-5 md:mt-10 mt-5">
            Payment
          </h3>
          <p className="text-[#2C2C2C] mb-5">
            All transactions are secure and encrypted.
          </p>
          <div className="bg-[#F4F5F7] rounded-lg border">
            <div className="flex justify-between items-center p-5">
              <div className="flex gap-3 items-center">
                <input
                  className="h-[30px] w-[30px]"
                  type="radio"
                  name=""
                  id="credit-card"
                />
                <p className="text-[#2C2C2C] text-lg font-semibold">
                  Credit Card
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <VisaCartSvg />
                <MasterCartSvg />
                <Amerik />
              </div>
            </div>
            <div className="p-5 bg-white space-y-5">
              <input
                type="text"
                placeholder="Card Number"
                className="block placeholder:text-[#2C2C2C] w-full px-5 py-3 border outline-none rounded-lg"
              />
              <input
                type="text"
                placeholder="Name on Card"
                className="block placeholder:text-[#2C2C2C] w-full px-5 py-3 border outline-none rounded-lg"
              />
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  placeholder="Expiration Date (YY / MM)"
                  className="block w-full px-5 py-3 placeholder:text-[#2C2C2C] border outline-none rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  className="block w-full px-5 py-3 placeholder:text-[#2C2C2C] border outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-between items-center p-5">
              <div className="flex gap-3 items-center">
                <input
                  className="h-[30px] w-[30px]"
                  type="radio"
                  name=""
                  id="credit-card"
                />
                <p className="text-[#2C2C2C] text-lg font-semibold">PayPal</p>
              </div>
              <div className="flex gap-2 items-center">
                <PaypalSvg />
              </div>
            </div>
          </div>
          <h3 className="font-outfit text-2xl text-[#2C2C2C] font-semibold mb-5 md:mt-10 mt-5">
            Billing Address
          </h3>
          <p className="text-[#2C2C2C] mb-5">
            Select the address that matches your card or payment method.
          </p>
          <div className="bg-[#F4F5F7] rounded-lg border">
            <div className="flex items-center gap-5 p-5 border-b">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="w-7 h-7" value="default" id="r1" />
                  <p className="font-semibold text-lg xl:text-xl">
                    Same as shipping Address
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className="w-7 h-7"
                    value="comfortable"
                    id="r2"
                  />
                  <p className="font-semibold text-lg xl:text-xl">
                    Use Different Billing Address
                  </p>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex gap-2 xl:gap-0 xl:justify-between items-center mt-7">
            <button className="xl:px-7 px-[10px] text-primary
             font-semibold xl:py-[10px] py-2 rounded-lg border border-primary xl:text-lg text-base">
              Back to Shipping
            </button>
            <Link to="/confirmation-with-pay">
              <button className="xl:px-7 px-[10px] text-white bg-primary font-semibold xl:py-[10px] py-2 rounded-lg border border-primary xl:text-lg text-base">
                Complete Order
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="space-y-5">
            {cartData.map((data) => (
              <div key={data.id} className="flex gap-5 items-center">
                <div className="">
                  <img src={data.thumbnail} className="" />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <div className="">
                    <h3 className="text-base lg:text-lg font-semibold pb-1">
                      {data.title}
                    </h3>
                    <div className="flex gap-5 items-center">
                      <p className="font-semibold text-[#545454] pb-2">
                        Quantity: {data.quantity}
                      </p>
                      <div className="flex items-center gap-2">
                        <button className="w-6 h-6 border rounded-full flex justify-center items-center border-gray-900">
                          -
                        </button>
                        <span>01</span>
                        <button className="w-6 h-6 rounded-full flex justify-center items-center bg-[#2C2C2C] text-white">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold text-[#545454] pb-2 flex sm:gap-2 items-center">
                    <img src={servicesBg} alt="" />
                    <span>{data.amount}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t mt-5"></div>
          <div className="flex gap-5 items-center py-5">
            <input
              type="text"
              className="py-3 border outline-none flex-grow px-3 rounded-lg w-full"
              placeholder="Discount Code"
            />
            <button className="px-5 text-white flex-shrink-0 bg-primary font-semibold py-[10px] rounded-lg border border-borderColor text-base xl:text-lg">
              Apply Coupon
            </button>
          </div>
          <div className="border-t"></div>
          <div className="flex justify-between pt-5 pb-1 items-center text-[#2C2C2C] text-base lg:text-lg font-medium">
            <p>Sub Total</p>
            <p className="font-semibold text-[#545454] pb-2 flex gap-2 items-center">
              <img src={servicesBg} alt="" />
              <span>680.00</span>
            </p>
          </div>
          <div className="flex justify-between pb-5 items-center text-[#2C2C2C] text-base lg:text-lg font-medium">
            <p>Shipping</p>
            <p className="font-semibold text-[#545454] pb-2 flex gap-2 items-center">
              <img src={servicesBg} alt="" />
              <span>20.00</span>
            </p>
          </div>
          <div className="border-t"></div>
          <div className="flex pt-5 justify-between pb-5 items-center text-[#2C2C2C] text-lg font-medium">
            <p>Total</p>
            <p className="text-[#2C2C2C] pb-2 font-semibold text-lg lg:text-xl flex gap-2 items-center">
              <img src={servicesBg} alt="" />
              <span>700.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
