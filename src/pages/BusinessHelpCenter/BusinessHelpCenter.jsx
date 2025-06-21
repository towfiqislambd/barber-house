import KnowledgeBase from "@/components/BusinessHelpCenter/KnowledgeBase";
import PopularArticals from "@/components/BusinessHelpCenter/PopularArticals";
import SearchBoxl from "@/components/BusinessHelpCenter/SearchBoxl";
import CallToAction from "@/components/BusinessHomePageCommon/CallToAction/CallToAction";

export default function BusinessHelpCenter() {
  return (
    <>
      <SearchBoxl />
      <PopularArticals />
      <KnowledgeBase />
      <CallToAction
        title={"Here to help"}
        subtitle={
          "Can't find an answer? We've got the solution. Find more support and connect with our team."
        }
        btnText={"Contact Us"}
      />
    </>
  );
}
