import { IoSearchOutline } from "react-icons/io5";

export default function SearchBoxl() {
  const buttonStyle =
    "border py-[10px] xl:py-[4px] px-[4px] text-[13px] font-manrope font-semibold rounded-[8px] text-[#2C2C2C] w-full xl:w-max";
  return (
    <section className="sm:py-[40px] xl:py-[86px]">
      <div className="container">
        <div className="flex gap-[30px] flex-col xl:flex-row items-center px-[15px]">
          <div className=" xl:w-[470px] flex-shrink-0">
            <h2 className="text-[24px] xl:text-[72px] font-semibold xl:leading-[86px] font-outfit">
              Explore. Learn. Grow.
            </h2>
          </div>
          <div className="w-full flex gap-[30px] flex-col">
            <div className="w-full shrink-0">
              <form action="">
                <div className="relative">
                  <input
                    className="w-full text-[14px] font-manrope font-semibold text-[#545454] py-[8px] xl:py-[10px] pl-[40px] border rounded-[16px] focus:border-primary focus:outline-none leading-[40px]"
                    type="text"
                    placeholder="Search our help center"
                  />
                  <button className="absolute left-[16px] top-[50%] translate-y-[-50%]">
                    <IoSearchOutline />
                  </button>
                  <button className="absolute right-[16px] top-[50%] translate-y-[-50%] font-manrope font-semibold text-[12px] xl:text[16px] xl:leading-[24px] text-white bg-black py-[8px] px-[12px] rounded-[8px]">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
