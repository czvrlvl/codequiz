"use client";

import { useParams, useRouter } from "next/navigation";
import lessonsContent from "../lessonsContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function LessonPage() {
  const { technology } = useParams();
  const router = useRouter();

  const content = lessonsContent[technology];

  if (!content) {
    return <div className="p-6">Brak danych o technologii.</div>;
  }

  return (
    <>
      <div className="mb-4">
        <Button variant="ghost" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Powrót
        </Button>
      </div>
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold">{content.title}</h1>

        <section className="prose max-w-none">
          <p>{content.introduction}</p>
        </section>

        {content.concepts && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Kluczowe koncepcje</h2>
            <div className="space-y-6">
              {content.concepts.map(({ title, code, explanation }, idx) => (
                <Card key={idx} className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded overflow-auto mb-2 whitespace-pre-wrap">
                    <code>{code}</code>
                  </pre>
                  <p>{explanation}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {content.tips && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Wskazówki</h2>
            <ul className="list-disc list-inside space-y-1">
              {content.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {content.challenge && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Wyzwanie</h2>
            <p>{content.challenge}</p>
          </section>
        )}

        {content.resources && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Zasoby</h2>
            <ul className="list-disc list-inside space-y-1">
              {content.resources.map(({ label, url }, idx) => (
                <li key={idx}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-8 space-y-2">
          <p className="font-semibold">Wybierz poziom quizu:</p>
          <div className="flex flex-wrap gap-3">
            {["easy", "medium", "hard"].map((level) => (
              <Button
                key={level}
                onClick={() => router.push(`/quiz/${technology}/${level}`)}
              >
                {level === "easy"
                  ? "Łatwy"
                  : level === "medium"
                  ? "Średni"
                  : "Trudny"}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
