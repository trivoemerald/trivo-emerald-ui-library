import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface BaseAccordionProps {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
  className?: string;
}

export const BaseAccordion: React.FC<BaseAccordionProps> = ({
  items,
  type = "single",
  defaultValue,
  collapsible = true,
  className,
}) => {
  if (type === "single") {
    return (
      <Accordion
        type="single"
        defaultValue={defaultValue as string}
        collapsible={collapsible}
        className={className}
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <Accordion
      type="multiple"
      defaultValue={defaultValue as string[]}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
