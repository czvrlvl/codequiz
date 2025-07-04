import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqData = [
    {
      question: "Czym jest Notify?",
      answer:
        "Notify to intuicyjna aplikacja webowa do tworzenia i zarządzania notatkami.",
    },
    {
      question: "Czy moje notatki są bezpieczne?",
      answer:
        "Tak, korzystamy z JWT i zabezpieczonej bazy danych. Twoje notatki są widoczne tylko dla Ciebie.",
    },
    {
      question: "Czy mogę edytować i usuwać notatki?",
      answer: "Tak, masz pełną kontrolę nad wszystkimi swoimi notatkami.",
    },
    {
      question: "Czy Notify jest darmowe?",
      answer: "Tak, aplikacja Notify jest w 100% darmowa do użytku osobistego.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row gap-12">
      {/* FAQ Accordion */}
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold mb-8 leading-tight">
          Najczęściej zadawane pytania
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqData.map(({ question, answer }, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/faq.svg"
          alt="Notatki ilustracja"
          width={400}
          height={400}
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
