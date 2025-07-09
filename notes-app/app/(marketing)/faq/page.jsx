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
      question: "Jak mogę zacząć korzystać z CodeQuiz?",
      answer:
        "To proste - wystarczy, że założysz konto oraz wybierzesz technologię, którą chcesz ćwiczyć i rozpoczniesz quiz.",
    },
    {
      question: "Jakie technologie są dostępne?",
      answer:
        "Oferujemy quizy z: React, Next.js, TypeScript, JavaScript, HTML i CSS. Regularnie dodajemy nowe tematy.",
    },
    {
      question: "Co znajdę w lekcjach?",
      answer:
        "Lekcje to krótkie, praktyczne podsumowania najważniejszych aspektów każdej technologii, które pomogą Ci szybko odświeżyć wiedzę i przygotować się do quizu.",
    },

    {
      question: "Czy quizy są dostosowane do poziomu zaawansowania?",
      answer:
        "Tak, oznaczyliśmy pytania jako podstawowe/średniozaawansowane/zaawansowane.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row gap-12">
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
