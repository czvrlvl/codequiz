"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuestionCard({
  question,
  current,
  total,
  selected,
  onAnswer,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Pytanie {current + 1} z {total}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          {question.question}
        </p>
      </CardHeader>
      <CardContent className="grid gap-3">
        {question.options.map((option, i) => (
          <Button
            key={i}
            onClick={() => onAnswer(i)}
            disabled={selected !== null}
            className={`w-full justify-start text-left ${
              selected !== null
                ? i === question.answer
                  ? "bg-green-200"
                  : i === selected
                  ? "bg-red-200"
                  : ""
                : ""
            }`}
            variant="outline"
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
