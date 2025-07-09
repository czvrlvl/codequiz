const lessonsContent = {
  react: {
    title: "React",
    introduction:
      "React to biblioteka JavaScript do budowy interfejsów użytkownika (UI). Umożliwia tworzenie komponentów, które są wielokrotnie wykorzystywane i zarządzają własnym stanem.",
    concepts: [
      {
        title: "Komponenty funkcyjne",
        code: `function Hello() {
  return <h1>Hello World</h1>;
}`,
        explanation: "Komponenty w React to funkcje zwracające JSX.",
      },
      {
        title: "useState – zarządzanie stanem",
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Kliknięto {count} razy
    </button>
  );
}`,
        explanation:
          "Hook useState pozwala na lokalne zarządzanie stanem komponentu.",
      },
      {
        title: "useEffect – efekt uboczny",
        code: `import { useEffect } from 'react';

useEffect(() => {
  console.log("Komponent został zamontowany");
}, []);`,
        explanation:
          "useEffect pozwala wykonać efekt uboczny (np. fetch danych). Pusty array oznacza, że efekt wykona się raz po montażu.",
      },
    ],
    tips: [
      "Nie zapomnij o dependency array w useEffect – wpływa na to, kiedy efekt się uruchomi.",
      "Komponenty muszą zaczynać się wielką literą.",
      "Unikaj bezpośredniej mutacji stanu, zawsze używaj setState.",
    ],
    challenge:
      "Napisz komponent, który wyświetla listę elementów i pozwala dodać nowy element do listy.",
    resources: [
      { label: "Oficjalna dokumentacja React", url: "https://react.dev" },
      {
        label: "Hooki React",
        url: "https://react.dev/learn/hooks-intro",
      },
    ],
  },

  next: {
    title: "Next.js",
    introduction:
      "Next.js to framework oparty na React, który oferuje renderowanie po stronie serwera (SSR), generowanie statycznych stron (SSG) oraz routing oparty o pliki.",
    concepts: [
      {
        title: "Routing oparty na plikach",
        code: `// pages/index.js
export default function Home() {
  return <h1>Strona główna</h1>;
}

// pages/about.js
export default function About() {
  return <h1>O nas</h1>;
}`,
        explanation:
          "Każdy plik w folderze pages to osobna ścieżka URL w aplikacji.",
      },
      {
        title: "SSG (Static Site Generation)",
        code: `export async function getStaticProps() {
  // pobierz dane podczas builda
  return { props: { message: "Witaj!" } };
}

export default function Page({ message }) {
  return <p>{message}</p>;
}`,
        explanation:
          "Strona generowana statycznie podczas budowania aplikacji, szybka i SEO-friendly.",
      },
      {
        title: "API Routes",
        code: `// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API!' });
}`,
        explanation: "Tworzenie backendu bezpośrednio w Next.js.",
      },
    ],
    tips: [
      "Pliki w folderze 'pages/api' to API routes.",
      "getStaticProps i getServerSideProps służą do pobierania danych.",
      "Korzystaj z Image Optimization dla lepszej wydajności.",
    ],
    challenge: "Stwórz prostą stronę z dynamicznym routingiem, np. /post/[id].",
    resources: [
      { label: "Oficjalna dokumentacja Next.js", url: "https://nextjs.org" },
      {
        label: "Routing w Next.js",
        url: "https://nextjs.org/docs/routing/introduction",
      },
    ],
  },

  tailwind: {
    title: "Tailwind CSS",
    introduction:
      "Tailwind CSS to framework CSS bazujący na klasach użytkowych, umożliwiający szybkie i responsywne stylowanie.",
    concepts: [
      {
        title: "Klasy użytkowe",
        code: `<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Kliknij mnie
</button>`,
        explanation:
          "Styling bez pisania CSS – wszystko za pomocą klas w HTML/JSX.",
      },
      {
        title: "Responsywność",
        code: `<div className="text-sm md:text-lg lg:text-xl">
  Tekst zmienia rozmiar w zależności od ekranu
</div>`,
        explanation:
          "Tailwind umożliwia łatwe tworzenie responsywnych layoutów przez prefiksy jak md:, lg:.",
      },
      {
        title: "Flexbox i Grid",
        code: `<div className="flex space-x-4">
  <div className="flex-1 bg-gray-200">Kolumna 1</div>
  <div className="flex-1 bg-gray-400">Kolumna 2</div>
</div>`,
        explanation:
          "Tailwind ułatwia korzystanie z Flexbox i Grid przez utility classes.",
      },
    ],
    tips: [
      "Używaj narzędzi jak Tailwind Play do szybkiego prototypowania.",
      "Możesz konfigurować Tailwind przez tailwind.config.js.",
      "Pamiętaj o purging – usuwaj nieużywane klasy w produkcji.",
    ],
    challenge: "Zbuduj prosty navbar z Tailwind, który będzie responsywny.",
    resources: [
      {
        label: "Oficjalna dokumentacja Tailwind",
        url: "https://tailwindcss.com/docs",
      },
      {
        label: "Tailwind Play",
        url: "https://play.tailwindcss.com/",
      },
    ],
  },

  typescript: {
    title: "TypeScript",
    introduction:
      "TypeScript to nadzbiór JavaScriptu dodający typowanie statyczne, co pomaga wcześniej wykrywać błędy.",
    concepts: [
      {
        title: "Typowanie zmiennych",
        code: `let name: string = "Jan";
let age: number = 25;`,
        explanation: "Definiowanie typów dla zmiennych.",
      },
      {
        title: "Interfejsy",
        code: `interface User {
  name: string;
  age: number;
}

const user: User = { name: "Anna", age: 30 };`,
        explanation: "Definiowanie struktur danych i ich typów.",
      },
      {
        title: "Typy złożone",
        code: `type ID = string | number;

function printId(id: ID) {
  console.log(id);
}`,
        explanation:
          "Union types pozwalają definiować zmienne, które mogą mieć kilka typów.",
      },
    ],
    tips: [
      "Korzystaj z edytorów wspierających IntelliSense (np. VSCode).",
      "Dodawaj typy do funkcji, aby kod był czytelniejszy i bezpieczniejszy.",
      "Nie bój się typów złożonych i generyków.",
    ],
    challenge: "Napisz funkcję, która przyjmuje obiekt User i zwraca imię.",
    resources: [
      {
        label: "Oficjalna dokumentacja TypeScript",
        url: "https://www.typescriptlang.org/docs/",
      },
    ],
  },

  html: {
    title: "HTML",
    introduction:
      "HTML to podstawowy język do tworzenia struktury stron internetowych, definiujący elementy i ich znaczenie.",
    concepts: [
      {
        title: "Podstawowe tagi",
        code: `<div>
  <h1>Witaj</h1>
  <p>To jest paragraf</p>
  <a href="https://example.com">Link</a>
</div>`,
        explanation:
          "Struktura HTML składa się z elementów takich jak div, h1, p i a.",
      },
      {
        title: "Formularze",
        code: `<form>
  <input type="text" name="username" placeholder="Nazwa użytkownika" />
  <button type="submit">Wyślij</button>
</form>`,
        explanation: "Formularze umożliwiają interakcję z użytkownikiem.",
      },
      {
        title: "Semantyka",
        code: `<section>
  <header><h2>Nagłówek sekcji</h2></header>
  <article>
    <p>Treść artykułu</p>
  </article>
</section>`,
        explanation: "Tagi semantyczne poprawiają strukturę i SEO strony.",
      },
    ],
    tips: [
      "Zawsze dodawaj atrybut alt do obrazków.",
      "Używaj semantycznych tagów zamiast divów, gdy to możliwe.",
      "Struktura dokumentu powinna być logiczna i czytelna.",
    ],
    challenge: "Zbuduj prostą stronę z nagłówkiem, sekcją i stopką.",
    resources: [
      {
        label: "MDN HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
    ],
  },

  css: {
    title: "CSS",
    introduction:
      "CSS pozwala stylizować strony internetowe, kontrolując wygląd elementów, layout i responsywność.",
    concepts: [
      {
        title: "Selektory",
        code: `.btn {
  background-color: blue;
  color: white;
}`,
        explanation: "Selektory definiują, które elementy będą stylizowane.",
      },
      {
        title: "Box model",
        code: `div {
  margin: 10px;
  border: 2px solid black;
  padding: 5px;
  width: 100px;
}`,
        explanation:
          "Box model definiuje przestrzeń wokół i wewnątrz elementu.",
      },
      {
        title: "Flexbox",
        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
        explanation: "Flexbox ułatwia układanie elementów w elastyczny sposób.",
      },
      {
        title: "Media queries",
        code: `@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}`,
        explanation:
          "Media queries pozwalają stosować różne style w zależności od rozmiaru ekranu.",
      },
    ],
    tips: [
      "Staraj się unikać !important – to znak, że coś jest źle zaprojektowane.",
      "Korzystaj z narzędzi developerskich w przeglądarce.",
      "Używaj preprocesorów (np. Sass), jeśli projekt jest rozbudowany.",
    ],
    challenge:
      "Napisz styl, który wyśrodkowuje div zarówno pionowo, jak i poziomo.",
    resources: [
      {
        label: "MDN CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
};

export default lessonsContent;
