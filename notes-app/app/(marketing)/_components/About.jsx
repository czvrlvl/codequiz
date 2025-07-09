import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white text-black min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-yellow-500 font-semibold text-sm mb-2">O CODEQUIZ</p>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ucz się,{" "}
              <span className="text-yellow-500">popełniając błędy</span>.
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-950">
              CodeQuiz to platforma, która pozwala tworzyć konto i wybierać
              spośród różnych lekcji dedykowanych popularnym technologiom. Każda
              lekcja zawiera kluczowe koncepcje, wraz z przykładami kodu i
              praktycznym omówieniem.
            </p>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">
                Dlaczego to działa
              </h3>
              <ul className="space-y-3 text-sm text-gray-950">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>
                    Nauka przez aktywne przypominanie jest skuteczniejsza niż
                    bierne czytanie
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Natychmiastowa informacja zwrotna z wyjaśnieniami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>
                    Praktyczne zadania oparte na realnych przykładach kodu
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-yellow-500">
              Dla kogo jest CodeQuiz?
            </h3>
            <p className="text-sm text-gray-950 leading-relaxed">
              CodeQuiz to idealne miejsce dla tych, którzy chcą szybko i
              wygodnie przyswoić ważne zagadnienia programistyczne, bez zbędnego
              rozpraszania. Po przeczytaniu lekcji możesz wybrać quiz na
              dowolnym poziomie trudności, aby utrwalić wiedzę.
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/manager-desk.svg"
              alt="Developer rozwiązujący zadanie kodowe"
              width={500}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Technologie, które obejmujemy
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "Tailwind", "TypeScript", "HTML", "CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
