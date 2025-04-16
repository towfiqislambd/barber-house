import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BusinessAccordion = () => {
  const accordionData = [
    {
      id: 1,
      question: "Which pricing plan is right for me?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 2,
      question: "How does our pricing work?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 3,
      question: "What if I change my mind?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 4,
      question: "Do you offer any discounted plans?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 7,
      question: "Does Venture offer plans to nonprofits and NGOs?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 8,
      question: "How can I manage my billing?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
    {
      id: 9,
      question: "Can I change my plan?",
      answer:
        "We understand that each organization is unique, requiring specific features to support its workflows and projects. Above you can see the features included in the different plans to support your needs. If you need help in choosing the right plan for you, reach out to our sales team.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {accordionData?.map((item) => (
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
