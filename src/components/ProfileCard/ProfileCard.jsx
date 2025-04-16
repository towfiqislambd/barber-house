const ProfileCard = ({
  name,
  image,
  checkboxId,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <div>
      <div className="flex gap-[7px] items-center py-8">
        <label htmlFor={checkboxId} className="cursor-pointer">
          <input
            type="checkbox"
            id={checkboxId}
            checked={isChecked}
            onChange={onCheckboxChange}
          />
        </label>
        <figure className="md:w-[60px] w-12 md:h-[60px] h-12 rounded-[100px]">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </figure>
        <p className="text-textColor font-manrope text-base md:text-xl font-bold leading-[30px]">
          {name}
        </p>
      </div>
      <div className="border border-t-[#B3BAC5]"></div>
    </div>
  );
};

export default ProfileCard;
