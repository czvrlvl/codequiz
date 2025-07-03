import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white text-black min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Nagłówek sekcji */}
        <p className="text-yellow-400 font-semibold text-sm mb-2">
          ABOUT NOTIFY
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
          {/* Lewa kolumna z tekstem */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notes that stay with you — wherever you are.
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-950">
              Notify is a minimalist web app for taking notes — fast, intuitive,
              and accessible on any device. No distractions, no unnecessary
              features.
            </p>
            <p className="text-sm text-gray-950 mb-6">
              Your thoughts, to-do lists and ideas are always in sync and safe
              in the cloud. Focus on the content, let Notify take care of the
              rest.
            </p>

            {/* Dla kogo jest Notify? */}
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Who is Notify for?
            </h3>
            <p className="text-sm text-gray-950 leading-relaxed">
              Notify was created for people who value simplicity and speed. It
              is perfect for students, freelancers, or anyone who needs a tool
              to quickly jot down ideas and tasks — without unnecessary
              complexity.
            </p>
          </div>

          {/* Prawa kolumna z ilustracją */}
          <div className="flex-1">
            <Image
              src="/manager-desk.svg"
              alt="Notes illustration"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
