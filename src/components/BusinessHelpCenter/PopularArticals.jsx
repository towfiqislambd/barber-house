import React from "react";
import CommonTitle from "./CommonTitle";
import { Link } from "react-router-dom";

export default function PopularArticals({ data, data2 }) {
  return (
    <section className="lg:py-[40px] xl:py-[68px] px-[15px]">
      <div className="container">
        <div className="mb-[67px] text-center">
          <CommonTitle title={data?.title} text={data?.sub_title} />
        </div>
        <div className="flex w-full gap-[24px] flex-wrap">
          {data2?.map(article => (
            <Link
              to={`/business/article-details/${article?.id}`}
              className="w-full xl:w-[48%] flex flex-col xl:flex-row gap-[16px] border rounded-[8px] p-[15px] items-center"
              key={article.id}
            >
              <div className="w-full xl:w-[48%]">
                <div className="overflow-hidden rounded-[16px] ">
                  <img
                    className="w-full h-full object-cover transition-all ease-in-out hover:scale-[1.1]  hover:shadow-[0px_4px_8px_rgba(0,0,0,0.1)]"
                    src={`${import.meta.env.VITE_SITE_URL}/${article?.image}`}
                    alt="image"
                  />
                </div>
              </div>
              <div className="w-[100%] xl:w-[48%] flex gap-[16px] flex-col">
                <h3 className="text-[#1E1E1E] font-outfit text-[20px] xl:text-[24px] font-semibold leading-[28px]">
                  {article?.title}
                </h3>
                <p className="text-[#545454] font-manrope leading-[24px]">
                  {article?.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
