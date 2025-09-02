import { usePurchaseSubscription } from "@/hooks/cms.mutations";
import useAuth from "@/hooks/useAuth";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Pricing = ({ data }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { mutate: purchaseSubscriptionMutation, isPending } =
    usePurchaseSubscription();
  const online_store_id = user?.business_profile?.online_store?.id;

  const handleClicked = () => {
    if (!user) {
      navigate("/login");
      toast.error("Please login first");
      return;
    }

    const payload = {
      online_store_id,
      success_redirect_url: `${window.location.origin}`,
      cancel_redirect_url: `${window.location.origin}/business/pricingPage`,
    };

    purchaseSubscriptionMutation(payload, {
      onSuccess: data => {
        if (data?.success) {
          window.location.href = data?.data?.redirect_url;
        }
      },
    });
  };

  return (
    <div className="container mb-10 md:mb-20">
      <h2 className="text-textSecondary font-outfit text-[26px] xl:text-[40px] font-semibold leading-normal text-center">
        From Startup to Enterprise
      </h2>
      <p className="text-[#545454] font-manrope  xl:text-xl font-medium max-w-[500px] mx-auto text-center leading-[30px] mt-3 mb-10">
        Perfectly tailored for every stage of your growth. Get started today, no
        credit card needed
      </p>

      <div className="border p-5 rounded-lg max-w-[300px] mx-auto">
        <h3 className="text-xl font-black mb-3 capitalize">{data[0]?.name}</h3>
        <p className="text-3xl xl font-black">{data[0]?.price}$</p>
        <p className="text-gray-700 mt-2 font-medium">For one month only</p>
        <h4 className="text-lg font-bold text-black mt-4 mb-2">
          Key Feathers:
        </h4>

        <p className="text-gray-700 text-base mb-7">
          Showcase Your Shop in the Subscribed List
        </p>

        <button
          onClick={handleClicked}
          className="py-3 font-semibold bg-black text-white duration-300 transition-all block w-full border-2 border-black rounded-lg cursor-pointer hover:bg-transparent hover:text-black"
        >
          {isPending ? "Starting....." : "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default Pricing;
