import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <section className="pt-[136px] container lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="max-w-[640px] mx-auto">
        <h1 className="text-[#2C2C2C] font-outfit text-2xl xl:text-3xl xl:text-[40px] font-medium">
          Choose Your Booking Option
        </h1>
        {/*  */}
        <div>
          <p className="text-[#000] font-manrope text-xl md:text-2xl xl:text-[28px] font-semibold">
            Booking for people
          </p>
          {/* This is the first div */}
          <Link to={"/select-service"}>
            <div className="bg-primaryLight rounded-2xl border-primary border py-5 md:py-7 xl:py-[40px] px-5 md:px-10 xl:px-[80px] mt-7">
              <h1 className="text-[#000] font-manrope text-lg md:text-xl font-semibold">
                Book a single appointment
              </h1>
              <p className="text-[#000] font-manrope text-base font-medium mt">
                Book services for yourself
              </p>
            </div>
          </Link>
          {/* This is the second div */}
          <Link to={"/select-service"}>
            <div className="bg-primaryLight rounded-2xl border-primary border py-5 md:py-7 xl:py-[40px] px-5 md:px-10 xl:px-[80px] mt-5">
              <h1 className="text-[#000] font-manrope text-lg md:text-xl font-semibold">
                Book group appointment
              </h1>
              <p className="text-[#000] font-manrope text-base font-medium mt">
                Book services for you, family, friends and others
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
