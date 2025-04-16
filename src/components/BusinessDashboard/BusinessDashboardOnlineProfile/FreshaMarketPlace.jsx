import marketplace from "../../../assets/images/online-profile/marketplace.png";

const FreshaMarketPlace = () => {
  return (
    <div className="space-y-3 flex-col flex justify-center items-center mt-52 md:mt-[217px] xl:mt-[200px]">
      <figure className="md:w-[250px] w-[100px] md:h-[250px]">
        <img
          className="w-full h-full object-cover
        "
          src={marketplace}
          alt=""
        />
      </figure>
      <p className="font-outfit text-xl sm:text-2xl lg:text-3xl font-semibold">
        You are now live on Fresha Marketplace!
      </p>
    </div>
  );
};

export default FreshaMarketPlace;
