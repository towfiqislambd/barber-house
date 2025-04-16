const SettingCard = ({ icon: Icon, title, description, link }) => {
  return (
    <a
      href={link}
      className="hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer rounded-2xl"
    >
      <div className="border border-[#DFE1E6] rounded-2xl lg:max-w-[344px] lg:h-[244px] py-10 px-6">
        {Icon && <Icon />}
        <div className="space-y-[6px] mt-3">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            {title}
          </p>
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SettingCard;
