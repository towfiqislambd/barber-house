import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BusinessAccordion = ({ data }) => {

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {data?.map(item => (
        <AccordionItem
          className="rounded-lg py-[0px] xl:py-6 px-[15px] xl:px-8 border-[#050505]"
          key={item.id}
          value={`item-${item.id}`}
        >
          <AccordionTrigger className="text-textSecondary font-outfit text-[18px] xl:text-2xl font-semibold leading-[28.8px]">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent className="text-textLight font-manrope text-lg leading-[27px]">
            {item?.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default BusinessAccordion;
