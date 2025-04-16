const ProductOfGalibCard = ({
  imgSrc,
  title,
  price,
  currencyImgSrc,
  inStock,
}) => {
  return (
    <div className="bg-[#F8FFFF] max-w-[365px] py-5 lg:py-8 px-5 lg:px-8 border-[0.4px] border-[#01BAC2] rounded-2xl">
      {/* Image Section */}
      <div className="bg-[#E6F7F9] flex justify-center relative">
        <img src={imgSrc} alt={title} />
      </div>

      {/* Stock Status */}
      {inStock && (
        <div className="max-w-[88px] absolute top-[42px] right-[52px]">
          <h1 className="text-[#00894E] font-manrope text-base font-semibold leading-6 bg-[rgba(0,206,110,0.20)] py-[6px] px-3 flex justify-center rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[2px]">
            In Stock
          </h1>
        </div>
      )}

      {/* Product Title */}
      <div className="mt-3">
        <h1 className="text-textLight font-manrope text-lg lg:text-xl font-semibold leading-[30px]">
          {title}
        </h1>

        {/* Price Section */}
        <div className="flex gap-1 mt-1 items-center">
          <img
            className="w-[19px] h-6 object-cover"
            src={currencyImgSrc}
            alt="Currency"
          />
          <h1 className="text-[#3E3E3E] font-manrope text-lg lg:text-2xl font-medium leading-[27px]">
            {price}
          </h1>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="border border-[#00C2CB] py-2 lg:py-3 px-2 text-center lg:px-6 max-w-[150px] rounded-[40px] mt-6">
        <button className="text-textLight font-manrope text-lg font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductOfGalibCard;
