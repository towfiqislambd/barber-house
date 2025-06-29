import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlog, useBlogDetails } from "@/hooks/cms.queries";
import { Loader } from "@/components/Loader/Loader";
import parse from "html-react-parser";
import BlogCard from "@/components/BlogComponents/BlogCard";

export default function BlogDetails() {
  const { slug } = useParams();
  const { data: allBlog, isLoading: blogLoading } = useBlog();
  const { data: detailData, isLoading: detailsLoading } = useBlogDetails(slug);
  const isLoading = blogLoading || detailsLoading;

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <section className="py-[40px] xl:py-[100px] px-[15px]">
      <div className="container">
        <div className="max-w-[900px] mx-auto">
          <div className="overflow-hidden rounded-tl-[16px] rounded-tr-[16px]">
            <img
              className="w-full h-[300px] object-cover hover:scale-[1.1] cursor-pointer transition-all"
              src={`${import.meta.env.VITE_SITE_URL}/${
                detailData?.blog?.image
              }`}
              alt="img"
            />
          </div>
          <div className="lg:p-[16px] p-[15px] md:p-[24px] border-[#DFE1E6] md:pt-[48px] border-t-0 border-[1px] rounded-bl-[16px] rounded-br-[16px]">
            <h4 className="text-[#2C2C2C] font-outfit text-[20px] 2xl:text-[24px] font-semibold leading-[28px] mb-[8px]">
              {detailData?.blog?.title}
            </h4>
            <p className="text-[#545454] font-manrope font-medium">
              {typeof detailData?.blog?.description === "string"
                ? parse(detailData?.blog?.description)
                : detailData?.blog?.description}
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold mt-10 mb-10">Related Blogs</h3>
        <div className="flex gap-[29px] flex-wrap justify-center">
          {allBlog?.blog?.blogs?.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
