import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownSvg, PlusAddSvg } from "../svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const EditBusinessLocation = () => {
  return (
    <section className="px-6 4xl:px-0 py-5 md:py-0">
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container 3xl:mt-10">
        <button className="border border-[#0D1619] sm:py-[10px] py-[6px] sm:px-[18px] px-4 rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] sm:py-[10px] py-[6px] sm:px-[18px] px-4 rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="4xl:max-w-[778px] mx-auto 2xl:mt-9 xs:mt-5">
        <p className="text-[#000] font-outfit text-3xl sm:text-4xl font-semibold">
          Edit your location
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-lg font-medium leading-[27px]">
          Choose your business types
        </p>
        {/* Business Location */}
        <div className="xl:mt-[43px] mt-5">
          <div className="flex justify-between items-center">
            <p className="text-[#000] font-outfit text-2xl sm:text-[28px] font-semibold leading-[33.6px]">
              Business location
            </p>
            <Popover>
              <PopoverTrigger>
                <button className="lg:px-4 px-2 lg:py-[10px] py-2 flex gap-2 items-center outline-none border border-[#DFE1E6] rounded-[100px]">
                  <p className="text-textColor font-manrope text-base font-bold leading-6">
                    Action
                  </p>
                  <DropdownSvg />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[190px] p-4">
                <div className="space-y-4">
                  <button className="flex gap-2 items-center">
                    <Link
                      to={"/businessDashboard/changelocation"}
                      className="text-textColor text-base font-manrope font-medium leading-6"
                    >
                      Change Location
                    </Link>
                  </button>
                  <button className="flex gap-2 items-center">
                    <Link
                      to={"/businessDashboard/editaddressdetails"}
                      className="text-textColor text-base font-manrope font-medium leading-6"
                    >
                      Edit address details
                    </Link>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {/*  */}
          <div className="mt-4 space-y-4">
            <p className="text-[#000] font-manrope text-base font-medium leading-6">
              Bus Stand
            </p>
            <p className="text-[#000] font-manrope text-base font-medium leading-6">
              Mirpur
            </p>
            <p className="text-[#000] font-manrope text-base font-medium leading-6">
              1216, Dhaka, Dhaka Division
            </p>
            <p className="text-[#000] font-manrope text-base font-medium leading-6">
              Dhaka District
            </p>
            <p className="text-[#000] font-manrope text-base font-medium leading-6">
              Bangladesh
            </p>
          </div>
          {/* Border */}
          <div className="border my-[34px]"></div>
          {/* Address */}
          <div className="flex sm:justify-between gap-[135px] sm:gap-0 sm:max-w-[436px]">
            <div>
              <p className="text-textColor font-manrope text-base font-medium leading-6">
                Address
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                Bus Stand
              </p>
            </div>
            <div>
              <p className="text-[#000] font-manrope text-base font-medium leading-6">
                Apt./Suite etc
              </p>
              <p className="flex gap-[6px] items-center text-[#055AD9]">
                <PlusAddSvg />
                Add
              </p>
            </div>
          </div>
          {/* District */}
          <div className="flex sm:gap-[275px] gap-[160px] sm:max-w-[436px] mt-4">
            <div>
              <p className="text-textColor font-manrope text-base font-medium leading-6">
                District
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                Mirpur
              </p>
            </div>
            <div>
              <p className="text-[#000] font-manrope text-base font-medium leading-6">
                City
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                Dhaka
              </p>
            </div>
          </div>
          {/* Region */}
          <div className="flex sm:gap-[220px] gap-[110px] sm:max-w-[436px] mt-4">
            <div>
              <p className="text-textColor font-manrope text-base font-medium leading-6">
                Region
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                Dhaka Division
              </p>
            </div>
            <div>
              <p className="text-[#000] font-manrope text-base font-medium leading-6">
                Postcode
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                1216
              </p>
            </div>
          </div>
          {/* Country */}
          <div className="flex sm:max-w-[436px] sm:gap-[265px] gap-[155px] mt-4">
            <div>
              <p className="text-textColor font-manrope text-base font-medium leading-6">
                Country
              </p>
              <p className="text-[#757575] font-manrope text-base font-medium leading-6">
                BD
              </p>
            </div>
            <div>
              <p className="text-[#000] font-manrope text-base font-medium leading-6">
                Directions
              </p>
              <p className="flex gap-[6px] items-center">
                <PlusAddSvg />
                Add
              </p>
            </div>
          </div>
          {/* Border */}
          <div className="border my-[34px]"></div>
          {/*  */}
          <div>
            <p className="text-textColor font-outfit text-xl sm:text-2xl lg:text-[28px] font-semibold leading-[33.6px]">
              Map location
            </p>
            <p className="mt-[9px] text-[#757575] font-manrope text-base font-normal leading-6">
              Drag the map so the pin matches the exact location of your
              business location.
            </p>
            <div className="lg:h-[292px] h-[250px] w-full mt-[14px]">
              <iframe
                className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.205770815965!2d90.35716816220642!3d23.816769688474754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12f3c6b8c9b%3A0x6a69c4c5e229a516!2sMirpur%2011%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1742547244288!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Border */}
          <div className="border mt-[48px] mb-[34px]"></div>
          {/*  */}
          <div className="flex justify-between items-center gap-2 lg:gap-0">
            <div>
              <p className="text-[#000] font-outfit text-xl sm:text-2xl lg:text-[28px] font-semibold sm:leading-[33.6px]">
                Billing details for clients sale
              </p>
              <p className="lg:max-w-[600px] w-full text-[#757575] font-manrope text-base font-medium leading-6 lg:mt-1 mt-3">
                These details will appear on the client’s sale receipt for this
                location as well as the information you’ve configured in your
                Receipt Template settings.
              </p>
            </div>
            <button className="border border-[#A5ADBA] px-[18px] py-2 rounded-[100px] text-textColor font-manrope text-base font-bold leading-6 items-center h-10">
              Edit
            </button>
          </div>
          {/*  Company name */}
          <div className="mt-4">
            <p className="text-textColor font-manrope text-base font-medium leading-6">
              Company name
            </p>
            <p className="text-[#757575] font-manrope mt-1 font-medium leading-6">
              Bus Stand
            </p>
          </div>
          {/* Address */}
          <div className="mt-4">
            <p className="text-textColor font-manrope text-base font-medium leading-6">
              Address
            </p>
            <p className="text-[#757575] font-manrope mt-1 font-medium leading-6">
              Bus Stand, Dhaka, 1216
            </p>
          </div>
          {/* Notes */}
          <div className="mt-4">
            <p className="text-textColor font-manrope text-base font-medium leading-6">
              Notes
            </p>
            <p className="flex gap-[6px] items-center text-[#055AD9]">
              <PlusAddSvg />
              Add
            </p>
          </div>
          {/* Border */}
          <div className="border mt-[48px] mb-[50px]"></div>
        </div>
      </div>
    </section>
  );
};

export default EditBusinessLocation;
