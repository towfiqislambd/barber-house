import { Link } from "react-router-dom";
import marketplace from "../../../assets/images/online-profile/marketplace.png";

const AppointmentRemainderPage = () => {
  return (
    <section className="px-6 md:px-0">
      <div className="flex justify-end max-w-[1400px] mt-5 sm:mt-0">
        <Link
          to={"/businessDashboard/marketing"}
          className="text-left py-[10px] px-[18px] rounded-[10px] bg-[#0D1619] text-white"
        >
          Done
        </Link>
      </div>
      <div className="space-y-3 flex-col flex justify-center items-center sm:mt-[200px] mt-24 px-6 md:px-0">
        <figure className="lg:w-[250px] w-[100px] lg:h-[250px] h-[100px]">
          <img
            className="w-full h-full object-cover
           "
            src={marketplace}
            alt=""
          />
        </figure>
        <p className="font-outfit text-xl md:text-2xl lg:text-3xl font-semibold">
          Appointment reminder automation is enabled!
        </p>
      </div>
    </section>
  );
};

export default AppointmentRemainderPage;
