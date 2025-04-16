const BusinessDetailsCardSection = ({ label, value }) => {
  return (
    <div className="w-[50%] mt-4">
      <p className="text-textColor font-manrope text-base md:text-lg font-semibold">
        {label}
      </p>
      <p className="text-textLight font-manrope font-medium leading-6 mt-[5px]">
        {value}
      </p>
    </div>
  );
};

export default BusinessDetailsCardSection;
