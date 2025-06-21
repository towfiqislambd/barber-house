import KnowledgeBase from "@/components/BusinessHelpCenter/KnowledgeBase";
import PopularArticals from "@/components/BusinessHelpCenter/PopularArticals";
import SearchBoxl from "@/components/BusinessHelpCenter/SearchBoxl";
import CallToAction from "@/components/BusinessHomePageCommon/CallToAction/CallToAction";
import { Loader } from "@/components/Loader/Loader";
import { useBusinessHelp } from "@/hooks/cms.queries";
import { useEffect } from "react";

export default function BusinessHelpCenter() {
  const { data: businessHelp, isLoading } = useBusinessHelp();
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
    <>
      <SearchBoxl data={businessHelp?.banner} />
      <PopularArticals
        data={businessHelp?.popular_article_banner}
        data2={businessHelp?.popular_articles}
      />
      <KnowledgeBase
        data={businessHelp?.knowledge_base_banner}
        data2={businessHelp?.knowledge_base_items?.data}
      />
      <CallToAction
        title={businessHelp?.help_section?.title}
        subtitle={businessHelp?.help_section?.sub_title}
        btnText={businessHelp?.help_section?.button_text}
      />
    </>
  );
}
