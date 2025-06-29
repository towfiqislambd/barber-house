import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Drawer } from "antd";
import {
  addtoCart,
  removeFromCart,
  decreaseCart,
} from "@/redux/features/cartSlice";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "@/lib/currencyFormatter";

const ProductOfGalibCard = ({ currencyImgSrc, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [triggeredItemId, setTriggeredItemId] = useState(null);

  const handleAddToCart = () => {
    dispatch(addtoCart(product));
    setTriggeredItemId(product.id);
  };

  useEffect(() => {
    if (triggeredItemId === product.id) {
      setOpen(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setTriggeredItemId(null);
    }
  }, [cartItems]);

  const handleCheckout = () => {
    setOpen(false);
    if (user) {
      navigate("/checkout");
    } else {
      toast.error("You need to login first");
    }
  };

  return (
    <div className="bg-primaryLight max-w-[365px] py-5 lg:py-8 px-5 lg:px-8 border-[0.4px] border-primary rounded-2xl relative">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={`${import.meta.env.VITE_SITE_URL}/${product.image_url}`}
          alt={product.name}
          className="h-[180px] object-contain"
        />
      </div>

      {/* Stock Badge */}
      <div className="max-w-[88px] absolute top-[42px] right-[52px]">
        <h1 className="text-secondary font-manrope text-base font-semibold leading-6 bg-primary py-[6px] px-3 flex justify-center rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[2px]">
          {product.stock_quantity > 0 ? "In Stock" : "Stock Out"}
        </h1>
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <h1 className="text-textLight font-manrope text-lg lg:text-xl font-semibold leading-[30px]">
          {product.name}
        </h1>
        <div className="flex gap-1 mt-1 items-center">
          {/* <img
            className="w-[19px] h-6 object-cover"
            src={currencyImgSrc}
            alt="Currency"
          /> */}
          <h1 className="text-[#3E3E3E] font-manrope text-lg lg:text-2xl font-medium leading-[27px]">
            {currencyFormatter(+product.price)}
          </h1>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="border border-primary py-2 lg:py-3 px-2 text-center lg:px-6 max-w-[150px] rounded-[40px] mt-6">
        <button
          onClick={handleAddToCart}
          className="text-textLight font-manrope text-lg font-medium"
          disabled={product.stock_quantity === 0}
        >
          Add to cart
        </button>
      </div>

      {/* Drawer: Cart View */}
      <Drawer
        closable
        title="Your Cart"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4 overflow-y-auto max-h-[65vh] pr-1">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b pb-3 border-gray-300 flex justify-between gap-4 items-center"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-base">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Price: {currencyFormatter(item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button
                          size="small"
                          onClick={() => dispatch(decreaseCart(item))}
                          disabled={item.cartQuantity <= 1}
                        >
                          −
                        </Button>
                        <span className="px-2">{item.cartQuantity}</span>
                        <Button
                          size="small"
                          onClick={() => dispatch(addtoCart(item))}
                        >
                          +
                        </Button>
                        <Button
                          danger
                          size="small"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <img
                      src={`${import.meta.env.VITE_SITE_URL}/${item.image_url}`}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-md border"
                    />
                  </div>
                ))
              ) : (
                <p>No items in cart.</p>
              )}
            </div>

            {/* Subtotal & Checkout Button */}
            <div className="border-t pt-4 mt-4">
              <p className="text-lg font-semibold mb-3">
                Subtotal:
                {currencyFormatter(
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.cartQuantity,
                    0
                  )
                )}
              </p>
              <Button
                type="primary"
                block
                size="large"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default ProductOfGalibCard;
