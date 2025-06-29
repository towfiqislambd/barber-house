import { useArticleDetails } from "@/hooks/cms.queries";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

export default function ArticleDetails() {
  const { id } = useParams();
  const { data: articleDetails, isLoading } = useArticleDetails(id);

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
    <section className="py-20">
      <div className="container">
        {/* Single item */}
        <div className="flex h-[100%] flex-col gap-[18px] w-full rounded-[16px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)] border border-[#dfe1e6] py-[18px] px-[24px]">
          <div className="w-[100px] h-[100px] m-auto xl:m-0">
            <img
              className="w-full h-full object-cover"
              src={`${import.meta.env.VITE_SITE_URL}/${
                articleDetails?.article?.image
              }`}
            />
          </div>
          <div className="text-center xl:text-start">
            <h4 className="mb-[14px] text-[#1E1E1E] font-outfit text-[24px] font-semibold leading-[28px]">
              {articleDetails?.article?.title}
            </h4>
            {typeof articleDetails?.article?.description === "string"
              ? parse(articleDetails?.article?.description)
              : articleDetails?.article?.description}
          </div>
        </div>
      </div>
    </section>
  );
}
