"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { Progress } from "@/components/ui/progress";
import allQuestions from "@/app/dashboard/questions";
import { Button } from "@/components/ui/button";

export default function CategoryQuizPage() {
  const { technology, difficulty } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status === "loading") return <div>Ładowanie...</div>;
  if (!session) return null;

  const questions = allQuestions[technology]?.[difficulty] || [];

  if (!questions.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl">Brak pytań w tej kategorii</h2>
        <Button onClick={() => router.push("/dashboard")}>Wróć</Button>
      </div>
    );
  }

  const total = questions.length;
  const question = questions[current];

  function handleAnswer(i) {
    setSelected(i);

    const isCorrect = i === question.answer;
    if (isCorrect) {
      setScore((s) => s + 1);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        {
          question: question.question,
          selected: question.options[i],
          correct: question.options[question.answer],
          explanation: question.explanation || "",
        },
      ]);
    }

    setTimeout(() => {
      setSelected(null);
      if (current + 1 < total) {
        setCurrent((c) => c + 1);
      } else {
        const query = new URLSearchParams({
          technology,
          difficulty,
          score: isCorrect ? score + 1 : score,
          total,
          incorrect: encodeURIComponent(JSON.stringify(incorrectAnswers)),
        });

        // dodaj ostatnią błędną odpowiedź, jeśli była zła
        if (!isCorrect) {
          const last = {
            question: question.question,
            selected: question.options[i],
            correct: question.options[question.answer],
            explanation: question.explanation || "",
          };
          query.set(
            "incorrect",
            encodeURIComponent(JSON.stringify([...incorrectAnswers, last]))
          );
        }

        router.push(`/results?${query.toString()}`);
      }
    }, 800);
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Progress value={(current / total) * 100} className="mb-6" />
      <div className="mb-4 text-lg font-semibold">
        Pytanie {current + 1} z {total}
      </div>
      <div className="text-xl font-bold mb-4">{question.question}</div>
      <div className="grid gap-4">
        {question.options.map((option, idx) => (
          <Button
            key={idx}
            variant={selected === idx ? "secondary" : "outline"}
            className="text-left w-full justify-start"
            onClick={() => handleAnswer(idx)}
            disabled={selected !== null}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
