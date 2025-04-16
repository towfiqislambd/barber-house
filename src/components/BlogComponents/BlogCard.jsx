import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <>
      {
        <div className="2xl:w-[30%] 3xl:w-[31%] 4xl:w-[32%] lg:w-[46%] xl:w-[45%] " key={blog.id}>
          <Link to={"/business/blogdetails"} className="w-full">
            <div className="overflow-hidden rounded-tl-[16px] rounded-tr-[16px]">
              <img
                className="w-full h-full object-cover hover:scale-[1.1] cursor-pointer transition-all"
                src={blog.image}
                alt="img"
              />
            </div>
            <div className="lg:p-[16px] p-[15px] md:p-[24px] border-[#DFE1E6] md:pt-[48px] border-t-0 border-[1px] rounded-bl-[16px] rounded-br-[16px]">
              <h4 className="text-[#2C2C2C] font-outfit text-[20px] 2xl:text-[24px] font-semibold leading-[28px] mb-[8px]">
                {blog.title}
              </h4>
              <h5 className="text-[#757575]  font-manrope font-medium leading-[24px] mb-[24px]">
                {blog.date}
              </h5>
              <p className="text-[#545454] font-manrope font-medium">
                {blog.text}
              </p>
            </div>
          </Link>
        </div>
      }
    </>
  );
}
