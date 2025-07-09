"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const params = useSearchParams();
  const router = useRouter();

  const technology = params.get("technology");
  const difficulty = params.get("difficulty");
  const score = parseInt(params.get("score") || "0", 10);
  const total = parseInt(params.get("total") || "0", 10);
  const incorrectRaw = params.get("incorrect");

  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    if (incorrectRaw) {
      try {
        const decoded = decodeURIComponent(incorrectRaw);
        setIncorrectAnswers(JSON.parse(decoded));
      } catch (error) {
        console.error("Błąd dekodowania błędnych odpowiedzi:", error);
      }
    }
  }, [incorrectRaw]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Wynik quizu</h1>
        <div className="text-muted-foreground text-lg">
          <p>
            Technologia: <span className="font-semibold">{technology}</span>
          </p>
          <p>
            Poziom trudności:{" "}
            <span className="font-semibold capitalize">{difficulty}</span>
          </p>
          <p>
            Twój wynik:{" "}
            <span className="font-semibold">
              {score} / {total}
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => router.push("/dashboard")}>
            Wróć do dashboardu
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push(`/quiz/${technology}/${difficulty}`)}
          >
            Spróbuj ponownie
          </Button>
        </div>
      </div>

      {incorrectAnswers.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Błędne odpowiedzi
          </h2>
          <div className="space-y-6">
            {incorrectAnswers.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-muted/30">
                <p className="font-medium mb-2"> {item.question}</p>
                <p className="text-red-500">
                  ✖️ Twoja odpowiedź: <strong>{item.selected}</strong>
                </p>
                <p className="text-green-600">
                  ✔️ Poprawna odpowiedź: <strong>{item.correct}</strong>
                </p>
                {item.explanation && (
                  <p className="mt-2 text-sm text-muted-foreground italic">
                    Wyjaśnienie: {item.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
