import {
  MasterCartSvg,
  VisaCartSvg,
  PaypalSvg,
} from "@/components/svgContainer/SvgContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addtoCart,
  decreaseCart,
  removeAllFromCart,
  removeFromCart,
} from "@/redux/features/cartSlice";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { useCheckout } from "@/hooks/user.mutation";

const Checkout = () => {
  const { user } = useAuth();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const { mutate: checkout } = useCheckout(setLoading);

  const data = location.state?.data;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      number: user?.number || "",
      street: user?.addresses?.[0]?.street || "",
      city: user?.addresses?.[0]?.city || "",
      postal_code: user?.addresses?.[0]?.postal_code || "",
      country: user?.country || "",
    },
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/", { replace: true });
    }
  }, [cartItems]);

  useEffect(() => {
    if (selectedAddressIndex === -1) {
      setValue("street", "");
      setValue("city", "");
      setValue("postal_code", "");
      return;
    }
    const address = user?.addresses?.[selectedAddressIndex];
    if (address) {
      setValue("street", address.street || "");
      setValue("city", address.city || "");
      setValue("postal_code", address.postal_code || "");
    }
  }, [selectedAddressIndex, user?.addresses, setValue]);

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

  const inputStyle =
    "w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition";

  const onSubmit = (formData) => {
    const payload = {
      store_id: data?.id,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.number,
      address_id: user?.addresses?.[selectedAddressIndex]?.id,
      products: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.cartQuantity,
      })),
      success_redirect_url: `${window.location.origin}/confirmOrder`,
      cancel_redirect_url: `${window.location.origin}`,
    };

    checkout(payload, {
      onSuccess: (res) => {
        if (res?.data) {
          dispatch(removeAllFromCart());
          window.location.href = res.data;
        }
      },
    });
  };

  useEffect(() => {
    return () => {
      dispatch(removeAllFromCart());
    };
  }, [location]);

  return (
    <div className="xl:pb-20 pb-10 xl:pt-40 md:pt-32 pt-24 container">
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Info */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    {...register("first_name", { required: true })}
                    className={inputStyle}
                    placeholder="First Name"
                  />
                  <input
                    {...register("last_name", { required: true })}
                    className={inputStyle}
                    placeholder="Last Name"
                  />
                  <input
                    {...register("email", { required: true })}
                    className={inputStyle}
                    placeholder="Email Address"
                  />
                  <input
                    {...register("number", { required: true })}
                    className={inputStyle}
                    placeholder="Phone Number"
                  />

                  {/* Address Selection */}
                  <div className="col-span-2 space-y-3">
                    <p className="text-gray-700 font-medium mb-2">
                      Select a saved address:
                    </p>

                    {user?.addresses?.map((addr, index) => (
                      <label
                        key={index}
                        className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition border-2 
                        ${
                          selectedAddressIndex === index
                            ? "border-primary bg-primary/10 shadow-md"
                            : "border-gray-300 hover:border-primary hover:bg-primary/5"
                        }
                      `}
                      >
                        <input
                          type="radio"
                          name="address"
                          value={index}
                          checked={selectedAddressIndex === index}
                          onChange={() => setSelectedAddressIndex(index)}
                          className="mt-1 accent-primary"
                        />
                        <div className="text-sm text-gray-800 font-medium">
                          <p>{addr.address}</p>
                          {addr.city && (
                            <p className="text-gray-500 mt-1">
                              {addr.city}, {addr.postal_code}
                            </p>
                          )}
                        </div>
                      </label>
                    ))}

                    {/* Add New Address */}
                    <Link
                      to={"/userDashboard"}
                      className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition
                      border-2 text-sm text-gray-800 font-semibold
                      ${
                        selectedAddressIndex === -1
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-gray-300 hover:border-primary hover:bg-primary/5"
                      }
                    `}
                    >
                      Add New Address
                    </Link>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-primary hover:bg-primaryDark text-white font-semibold py-3 rounded-xl transition duration-200 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Checkout"}
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Order</h2>
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
            <div className="border-t pt-4 text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{currencyFormatter(+subtotal.toFixed(2))}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>{currencyFormatter(+total.toFixed(2))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
