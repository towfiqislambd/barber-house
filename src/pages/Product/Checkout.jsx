import {
  Amerik,
  MasterCartSvg,
  ProductEditSvg,
  VisaCartSvg,
  PaypalSvg,
} from "@/components/svgContainer/SvgContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  addtoCart,
  decreaseCart,
  removeFromCart,
} from "@/redux/features/cartSlice";
import useAuth from "@/hooks/useAuth";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();

  console.log(user);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/", { replace: true });
    }
  }, [cartItems]);

  const handleQuantityChange = (item, type) => {
    if (type === "inc") {
      dispatch(addtoCart(item));
    } else if (type === "dec") {
      dispatch(decreaseCart(item));
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  const total = subtotal;

  return (
    <div className="xl:pb-20 pb-10 xl:pt-40 md:pt-32 pt-24 container">
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="First Name"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Last Name"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Email Address"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Phone Number"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition md:col-span-2"
                  placeholder="Street Address"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="City"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Postal Code"
                />
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Payment Method
              </h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-primary"
                    defaultChecked
                  />
                  <span className="text-gray-700">Stripe</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Order</h2>

            {/* Cart Items */}
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <img
                    src={`${import.meta.env.VITE_SITE_URL}/${item.image_url}`}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => handleQuantityChange(item, "dec")}
                        className="bg-gray-200 px-2 rounded"
                        disabled={item.cartQuantity <= 1}
                      >
                        −
                      </button>
                      <span className="px-2">{item.cartQuantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, "inc")}
                        className="bg-gray-200 px-2 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="text-red-500 text-sm underline ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t pt-4 text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primaryDark text-white font-semibold py-3 rounded-xl transition duration-200">
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
