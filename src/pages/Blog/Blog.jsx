import BlogCard from "@/components/BlogComponents/BlogCard";
import { Loader } from "@/components/Loader/Loader";
import { useBlog } from "@/hooks/cms.queries";
import { useEffect } from "react";

export default function Blog() {
  const { data: allBlog, isLoading } = useBlog();
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
    <section className="sm:pt-[60px] lg:pt-[100px] px-[15px] md:px-[30px] 3xl:px-[100px] ">
      <div className="container">
        <div>
          <div className="flex items-center flex-col mb-8 lg:mb-[64px]">
            <div className="lg:mb-[40px]">
              <h4 className="font-outfit lg:text-[48px] text-center text-[28px] font-semibold leading-[57px] text-[#000]">
                {allBlog?.blog_banner?.title}
              </h4>
            </div>
          </div>

          <div className="mb-[100px]">
            <div className="">
              <div className="flex gap-[29px] flex-wrap justify-center">
                {allBlog?.blog?.blogs?.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
