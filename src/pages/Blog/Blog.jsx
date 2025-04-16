import BlogCard from "@/components/BlogComponents/BlogCard";
import { useState } from "react";
import Image1 from "../../assets/images/blog/blog-img-1.png";
import Image2 from "../../assets/images/blog/blog-img-2.png";
import Image3 from "../../assets/images/blog/blog-img-3.png";
import Image4 from "../../assets/images/blog/blog-img-4.png";
import Image5 from "../../assets/images/blog/blog-img-5.png";
import Image6 from "../../assets/images/blog/blog-img-6.png";
import Image7 from "../../assets/images/blog/blog-img-7.png";
import Image8 from "../../assets/images/blog/blog-img-8.png";
import Image9 from "../../assets/images/blog/blog-img-9.png";

export default function Blog() {
  const allBlogs = [
    {
      id: 1,
      status: "partners",
      image: Image1,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 2,
      status: "features",
      image: Image2,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 3,
      status: "partners",
      image: Image3,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 4,
      status: "features",
      image: Image4,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 5,
      status: "",
      image: Image5,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 6,
      status: "news",
      image: Image6,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 7,
      status: "tips",
      image: Image7,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 8,
      status: "news",
      image: Image8,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 9,
      status: "tips",
      image: Image9,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 10,
      status: "tips",
      image: Image9,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
    {
      id: 11,
      status: "tips",
      image: Image9,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly.",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section className="sm:pt-[60px] lg:pt-[100px] px-[15px] md:px-[30px] 3xl:px-[100px] ">
      <div className="container">
        <div>
          <div className="flex items-center flex-col mb-[64px]">
            <div className="mb-[40px]">
              <h4 className="font-outfit lg:text-[48px] text-center text-[28px] font-semibold leading-[57px] text-[#000]">
                Latest news on Fresha
              </h4>
            </div>
            <div className="w-[300px] md:w-[500px] lg:w-auto">
              <div className="flex gap-[10px] lg:gap-[24px] overflow-auto pb-[10px]">
                <button
                  className={`py-[1px] md:py-[8px] flex-shrink-0 px-[5px] md:px-[10px] font-manrope  lg:text-[16px] font-medium  leading-[30px] transition-all ease-in-out duration-300 ${
                    activeTab === "tab1"
                      ? "bg-[#1E1E1E] lg:rounded-[100px] rounded-[10px] text-[#FFF]"
                      : "text-[#000]"
                  }`}
                  onClick={() => setActiveTab("tab1")}
                >
                  All topics
                </button>
                <button
                  className={`py-[1px] md:py-[8px] flex-shrink-0 px-[5px] md:px-[10px] font-manrope  lg:text-[16px] font-medium  leading-[30px] transition-all ease-in-out duration-300 ${
                    activeTab === "tab2"
                      ? "bg-[#1E1E1E] lg:rounded-[100px] rounded-[10px] text-[#FFF]"
                      : "text-[#000]"
                  }`}
                  onClick={() => setActiveTab("tab2")}
                >
                  Meet the Partners
                </button>
                <button
                  className={`py-[1px] md:py-[8px] px-[5px] md:px-[10px] flex-shrink-0 font-manrope text-[14px] lg:text-[16px] font-medium  leading-[30px] transition-all ease-in-out duration-300 ${
                    activeTab === "tab3"
                      ? "bg-[#1E1E1E] lg:rounded-[100px] rounded-[10px] text-[#FFF]"
                      : "text-[#000]"
                  }`}
                  onClick={() => setActiveTab("tab3")}
                >
                  Fresha Features
                </button>
                <button
                  className={`py-[1px] md:py-[8px] px-[5px] md:px-[10px] flex-shrink-0 font-manrope text-[14px] lg:text-[16px] font-medium  leading-[30px] transition-all ease-in-out duration-300 ${
                    activeTab === "tab4"
                      ? " bg-[#1E1E1E] lg:rounded-[100px] rounded-[10px] text-[#FFF]"
                      : "text-[#000]"
                  }`}
                  onClick={() => setActiveTab("tab4")}
                >
                  Fresha News
                </button>
                <button
                  className={`py-[1px] md:py-[8px] px-[5px] md:px-[10px] font-manrope flex-shrink-0 text-[14px] lg:text-[16px] font-medium  leading-[30px] transition-all ease-in-out duration-300 ${
                    activeTab === "tab5"
                      ? "bg-[#1E1E1E] lg:rounded-[100px] rounded-[10px] text-[#FFF]"
                      : "text-[#000]"
                  }`}
                  onClick={() => setActiveTab("tab5")}
                >
                  Business Tips
                </button>
              </div>
            </div>
          </div>

          <div className="mb-[100px]">
            <div className="">
              {activeTab === "tab1" && (
                <div className="flex gap-[29px] flex-wrap justify-center">
                  {allBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              )}
              {activeTab === "tab2" && (
                <div className="flex gap-[29px] flex-wrap justify-center">
                  {allBlogs
                    .filter((blog) => blog.status === "partners")
                    .map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
              )}
              {activeTab === "tab3" && (
                <div className="flex gap-[29px] flex-wrap justify-center">
                  {allBlogs
                    .filter((blog) => blog.status === "features")
                    .map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
              )}
              {activeTab === "tab4" && (
                <div className="flex gap-[29px] flex-wrap justify-center">
                  {allBlogs
                    .filter((blog) => blog.status === "news")
                    .map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
              )}
              {activeTab === "tab5" && (
                <div className="flex gap-[29px] flex-wrap justify-center">
                  {allBlogs
                    .filter((blog) => blog.status === "tips")
                    .map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
              )}
            </div>
            <div className="mt-[40px] flex justify-center">
              <div className="flex justify-center gap-[24px]">Pagination</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
