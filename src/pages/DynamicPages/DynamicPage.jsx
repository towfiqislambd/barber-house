import { Loader } from "@/components/Loader/Loader";
import { useDynamicPageDetails } from "@/hooks/cms.queries";
import React from "react";
import { useParams } from "react-router-dom";

const DynamicPage = () => {
  const { slug } = useParams();
  const { data: pageDetails, isLoading } = useDynamicPageDetails(slug);
  console.log(pageDetails);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <section className="mt-44">
      <div className="container">
        <div className="bg-white p-7 rounded-lg shadow-lg mb-16">
          <h3 className="text-2xl font-semibold mb-5">
            {pageDetails?.page_title}
          </h3>
          <p className="leading-[170%] text-gray-800">
            {pageDetails?.page_content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DynamicPage;
