const allQuestions = {
  react: {
    easy: [
      {
        question: "Czym jest useEffect?",
        options: ["Hook", "Komponent", "Biblioteka", "Funkcja CSS"],
        answer: 0,
        explanation:
          "useEffect to hook służący do wykonywania efektów ubocznych w komponentach funkcyjnych.",
      },
      {
        question: "Który hook służy do zarządzania stanem?",
        options: ["useFetch", "useState", "useData", "useRouter"],
        answer: 1,
        explanation:
          "useState to podstawowy hook do zarządzania stanem lokalnym w komponencie.",
      },
      {
        question: "Co zwraca hook useState?",
        options: [
          "Tylko wartość stanu",
          "Tablicę z wartością i funkcją aktualizującą",
          "Tylko funkcję aktualizującą",
          "Obiekt z metodami",
        ],
        answer: 1,
        explanation:
          "useState zwraca tablicę, gdzie pierwszy element to wartość stanu, a drugi to funkcja do jego aktualizacji.",
      },
      {
        question: "Czym jest JSX?",
        options: [
          "Nowy język programowania",
          "Szablon HTML w JavaScript",
          "Ekstensja przeglądarki",
          "Preprocesor CSS",
        ],
        answer: 1,
        explanation:
          "JSX to składnia rozszerzająca JavaScript, pozwalająca pisać kod podobny do HTML w plikach JavaScript.",
      },
      {
        question: "Co to jest Virtual DOM?",
        options: [
          "Nowy typ komponentu",
          "Alternatywa dla JSX",
          "Lekka kopia rzeczywistego DOM",
          "Narzędzie debugujące",
        ],
        answer: 2,
        explanation:
          "Virtual DOM to abstrakcja pozwalająca Reactowi na efektywne aktualizowanie interfejsu.",
      },
    ],
    medium: [
      {
        question: "Jak przekazać dane do komponentu potomnego?",
        options: [
          "Przez zmienne globalne",
          "Przez context API",
          "Wszystkie odpowiedzi są poprawne",
          "Za pomocą propsów",
        ],
        answer: 2,
        explanation:
          "W React dane można przekazywać na wszystkie wymienione sposoby.",
      },
      {
        question: "Jakie są główne cechy komponentów klasowych?",
        options: [
          "Metody cyklu życia",
          "Posiadanie stanu",
          "Dziedziczenie",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 3,
        explanation: "Komponenty klasowe posiadają wszystkie wymienione cechy.",
      },
      {
        question: "Jakie są korzyści z używania React?",
        options: [
          "Komponentowa architektura",
          "Wydajność dzięki Virtual DOM",
          "Wszystkie odpowiedzi są poprawne",
          "Bogaty ekosystem",
        ],
        answer: 2,
        explanation: "React oferuje wszystkie wymienione korzyści.",
      },
      {
        question: "Czym jest Context API?",
        options: [
          "Metoda routingu",
          "Sposób na zarządzanie stanem globalnym",
          "Narzędzie do testowania",
          "Typ komponentu",
        ],
        answer: 1,
        explanation:
          "Context API pozwala na współdzielenie stanu między komponentami bez konieczności przekazywania propsów przez każdy poziom.",
      },
      {
        question: "Jak działa React Router?",
        options: [
          "Zarządza stanem aplikacji",
          "Renderuje różne komponenty w zależności od URL",
          "Obsługuje zapytania HTTP",
          "Generuje statyczne strony",
        ],
        answer: 1,
        explanation:
          "React Router synchronizuje UI z URL i pozwala na renderowanie różnych komponentów w zależności od ścieżki.",
      },
      {
        question: "Jak działa React.memo?",
        options: [
          "Cache'uje zapytania",
          "Zapamiętuje wynik renderowania komponentu",
          "Optymalizuje hooki",
          "Zarządza stanem globalnym",
        ],
        answer: 1,
        explanation:
          "React.memo to HOC, który zapobiega niepotrzebnym renderowaniom, gdy propsy się nie zmieniają.",
      },
      {
        question: "Czym jest klucz (key) w liście elementów?",
        options: [
          "Metodą sortowania",
          "Unikalnym identyfikatorem elementu",
          "Wartością stanu",
          "Typem propsów",
        ],
        answer: 1,
        explanation:
          "Klucze pomagają Reactowi identyfikować, które elementy uległy zmianie i wymagają ponownego renderowania.",
      },
      {
        question: "Jakie są fazy cyklu życia komponentu klasowego?",
        options: [
          "Tworzenie, Używanie, Usuwanie",
          "Montowanie, Aktualizowanie, Odmontowywanie",
          "Inicjalizacja, Renderowanie, Destrukcja",
          "Start, Stop, Pause",
        ],
        answer: 1,
        explanation:
          "Komponenty klasowe przechodzą przez trzy główne fazy: montowanie, aktualizowanie i odmontowywanie.",
      },
      {
        question: "Co to jest renderowanie warunkowe?",
        options: [
          "Specjalna metoda render()",
          "Renderowanie komponentów w zależności od warunków",
          "Typ komponentu",
          "Technika optymalizacji",
        ],
        answer: 1,
        explanation:
          "Renderowanie warunkowe to technika pokazywania różnych komponentów w zależności od spełnienia określonych warunków.",
      },
      {
        question: "Jak działa useReducer?",
        options: [
          "Do zarządzania stanem globalnym",
          "Do obsługi formularzy",
          "Jako alternatywa dla useState w przypadku złożonej logiki stanu",
          "Do cache'owania danych",
        ],
        answer: 2,
        explanation:
          "useReducer jest podobny do useState, ale lepiej nadaje się do zarządzania złożonym stanem, który obejmuje wiele pod-wartości.",
      },
      {
        question: "Jak działa useCallback?",
        options: [
          "Obsługuje zdarzenia",
          "Zapamiętuje funkcję między renderowaniami",
          "Tworzy nową funkcję przy każdym renderowaniu",
          "Zarządza stanem",
        ],
        answer: 1,
        explanation:
          "useCallback zapamiętuje funkcję między renderowaniami i zwraca tę samą instancję funkcji, jeśli zależności się nie zmieniły.",
      },
      {
        question: "Co to jest useRef?",
        options: [
          "Hook do zarządzania stanem",
          "Hook do przechowywania mutowalnej wartości między renderowaniami",
          "Hook do obsługi efektów ubocznych",
          "Hook do cache'owania danych",
        ],
        answer: 1,
        explanation:
          "useRef tworzy mutowalny obiekt, którego wartość jest zachowywana między renderowaniami i może być używana do przechowywania referencji do elementów DOM.",
      },
      {
        question: "Jak działa useMemo?",
        options: [
          "Zarządza stanem globalnym",
          "Zapamiętuje wynik obliczeń między renderowaniami",
          "Tworzy nowe obliczenia przy każdym renderowaniu",
          "Obsługuje zdarzenia",
        ],
        answer: 1,
        explanation:
          "useMemo zapamiętuje wynik kosztownych obliczeń i zwraca zcache'owaną wartość, gdy zależności się nie zmieniają.",
      },
      {
        question: "Co to jest Error Boundary?",
        options: [
          "Hook do obsługi błędów",
          "Komponent przechwytujący błędy JavaScript w swoim poddrzewie",
          "Metoda debugowania",
          "Typ stanu",
        ],
        answer: 1,
        explanation:
          "Error Boundary to komponenty, które przechwytują błędy JavaScript w swoim poddrzewie komponentów i wyświetlają UI rezerwowy.",
      },
    ],
    hard: [
      {
        question: "Co to są HOC (Higher-Order Components)?",
        options: [
          "Komponenty renderujące inne komponenty",
          "Funkcje przyjmujące komponent i zwracające nowy komponent",
          "Specjalne hooki",
          "Komponenty stanowe",
        ],
        answer: 1,
        explanation:
          "HOC to wzorzec w React, gdzie funkcja przyjmuje komponent i zwraca nowy, wzbogacony komponent.",
      },
      {
        question: "Co to jest Portal w React?",
        options: [
          "Nowy typ routingu",
          "Sposób renderowania dzieci do węzła DOM poza hierarchią komponentu",
          "Metoda komunikacji między komponentami",
          "Narzędzie debugujące",
        ],
        answer: 1,
        explanation:
          "Portale pozwalają renderować dzieci do węzła DOM, który istnieje poza hierarchią DOM komponentu nadrzędnego.",
      },
      {
        question: "Jak działa React.lazy?",
        options: [
          "Optymalizuje renderowanie",
          "Pozwala na ładowanie komponentów leniwie",
          "Cache'uje komponenty",
          "Zarządza stanem",
        ],
        answer: 1,
        explanation:
          "React.lazy pozwala na ładowanie komponentów dopiero wtedy, gdy są rzeczywiście potrzebne (code-splitting).",
      },
      {
        question: "Co to jest Suspense?",
        options: [
          "Nowy typ stanu",
          "Mechanizm pozwalający komponentom 'czekać' na coś przed renderowaniem",
          "Metoda walidacji propsów",
          "Hook do zarządzania efektami",
        ],
        answer: 1,
        explanation:
          "Suspense pozwala komponentom wyrażać, że 'czekają' na dane, a React może w tym czasie pokazać fallback UI.",
      },
      {
        question: "Jak działa React Fiber?",
        options: [
          "To narzędzie do debugowania",
          "To nowy algorytm reconcilizacji w React",
          "To typ komponentu",
          "To metoda renderowania",
        ],
        answer: 1,
        explanation:
          "React Fiber to nowy silnik reconcilizacji w React, który umożliwia inkrementacyjne renderowanie i lepszą kontrolę nad priorytetami aktualizacji.",
      },
      {
        question: "Co to jest Server Components w React?",
        options: [
          "Nowy typ hooków",
          "Komponenty renderowane po stronie serwera",
          "Metoda cache'owania",
          "Technika optymalizacji",
        ],
        answer: 1,
        explanation:
          "Server Components to eksperymentalna funkcja Reacta, która pozwala na renderowanie niektórych komponentów po stronie serwera, redukując rozmiar bundle'a klienta.",
      },
    ],
  },
  next: {
    easy: [
      {
        question: "Jaka funkcja służy do SSR w Next.js?",
        options: ["getServerSideProps", "useEffect", "getData", "fetchSSR"],
        answer: 0,
        explanation:
          "getServerSideProps to specjalna funkcja w Next.js, która pozwala na renderowanie strony na serwerze przy każdym żądaniu.",
      },
      {
        question: "Jak stworzyć dynamiczną ścieżkę w Next.js?",
        options: [
          "Tworząc plik w pages/[id].js",
          "Używając router.push()",
          "Konfigurując next.config.js",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 3,
        explanation:
          "Dynamiczne ścieżki w Next.js tworzy się poprzez pliki w katalogu pages z nazwami w nawiasach kwadratowych, np. pages/[id].js.",
      },
      {
        question: "Co to jest ISR w Next.js?",
        options: [
          "Incremental Static Regeneration",
          "Internal State Reducer",
          "Integrated Style Renderer",
          "Interactive Server Response",
        ],
        answer: 0,
        explanation:
          "ISR (Incremental Static Regeneration) pozwala na aktualizację statycznych stron po ich wygenerowaniu, bez konieczności przebudowy całej strony.",
      },
      {
        question: "Jak zaimplementować API w Next.js?",
        options: [
          "Tworząc pliki w katalogu pages/api",
          "Używając getServerSideProps",
          "Konfigurując next.config.js",
          "Importując express",
        ],
        answer: 0,
        explanation:
          "Next.js ma wbudowaną obsługę API routes poprzez pliki umieszczone w katalogu pages/api.",
      },
      {
        question: "Jak działa next/link?",
        options: [
          "Optymalizuje nawigację między stronami",
          "Ładuje wszystkie linki z góry",
          "Zastępuje znacznik <a>",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 3,
        explanation:
          "Komponent Link z next/link optymalizuje nawigację w aplikacji Next.js poprzez prefetching i zachowanie stanu aplikacji.",
      },
    ],
    medium: [
      {
        question: "Co to jest next/image?",
        options: [
          "Zoptymalizowany komponent do wyświetlania obrazów",
          "Narzędzie do edycji obrazów",
          "Biblioteka do przetwarzania obrazów",
          "Hook do ładowania obrazów",
        ],
        answer: 0,
        explanation:
          "Komponent Image z next/image automatycznie optymalizuje obrazy pod kątem wydajności (resizing, lazy loading, formaty nowej generacji).",
      },
      {
        question: "Jak skonfigurować środowiska w Next.js?",
        options: [
          "Poprzez pliki .env.local, .env.development, .env.production",
          "Tylko w next.config.js",
          "Tylko w package.json",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Next.js obsługuje zmienne środowiskowe poprzez pliki .env.local, .env.development i .env.production.",
      },
      {
        question: "Jak działa getStaticPaths?",
        options: [
          "Określa które ścieżki powinny być pre-renderowane statycznie",
          "Konfiguruje routing",
          "Definiuje API endpoints",
          "Zarządza stanem",
        ],
        answer: 0,
        explanation:
          "getStaticPaths używamy z getStaticProps do pre-renderowania statycznych stron z dynamicznymi ścieżkami.",
      },
      {
        question: "Co to jest middleware w Next.js?",
        options: [
          "Kod uruchamiany przed zakończeniem żądania",
          "Plugin do babel",
          "Typ komponentu",
          "Metoda walidacji",
        ],
        answer: 0,
        explanation:
          "Middleware w Next.js pozwala uruchomić kod przed zakończeniem żądania, np. do autoryzacji, przekierowań czy modyfikacji odpowiedzi.",
      },
      {
        question: "Jak zaimplementować internationalization (i18n) w Next.js?",
        options: [
          "Konfigurując i18n w next.config.js",
          "Używając bibliotek zewnętrznych",
          "Wszystkie odpowiedzi są poprawne",
          "Next.js nie obsługuje i18n",
        ],
        answer: 2,
        explanation:
          "Next.js ma wbudowaną obsługę i18n, ale można też używać bibliotek zewnętrznych w zależności od potrzeb.",
      },
      {
        question: "Jak działa next/head?",
        options: [
          "Pozwala modyfikować nagłówek HTML strony",
          "Zarządza stanem globalnym",
          "Optymalizuje ładowanie czcionek",
          "Konfiguruje API",
        ],
        answer: 0,
        explanation:
          "Komponent Head z next/head pozwala dodawać elementy do sekcji <head> dokumentu HTML.",
      },
      {
        question: "Co to jest next/script?",
        options: [
          "Zoptymalizowany sposób ładowania skryptów zewnętrznych",
          "Narzędzie do testowania",
          "Hook do zarządzania stanem",
          "Metoda renderowania",
        ],
        answer: 0,
        explanation:
          "Komponent Script z next/script zapewnia optymalne ładowanie skryptów stron trzecich z różnymi strategiami (afterInteractive, lazyOnload, beforeInteractive).",
      },
      {
        question: "Jak działa next/dynamic?",
        options: [
          "Pozwala na ładowanie komponentów dynamicznie",
          "Optymalizuje routing",
          "Zarządza stanem",
          "Konfiguruje API",
        ],
        answer: 0,
        explanation:
          "next/dynamic to implementacja React.lazy dla Next.js, pozwalająca na ładowanie komponentów dynamicznie z obsługą SSR.",
      },
      {
        question: "Jak skonfigurować redirects w Next.js?",
        options: [
          "W next.config.js",
          "Używając next/router",
          "W plikach .env",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Przekierowania w Next.js konfiguruje się w next.config.js w sekcji redirects.",
      },
      {
        question: "Co to jest next/amp?",
        options: [
          "Obsługa stron AMP w Next.js",
          "Narzędzie do analizy wydajności",
          "Plugin do optymalizacji obrazów",
          "Typ komponentu",
        ],
        answer: 0,
        explanation:
          "Next.js posiada wbudowaną obsługę stron AMP (Accelerated Mobile Pages) poprzez next/amp.",
      },
    ],
    hard: [
      {
        question: "Jak zaimplementować custom server w Next.js?",
        options: [
          "Tworząc plik server.js i modyfikując skrypty w package.json",
          "Next.js nie obsługuje custom server",
          "Tylko poprzez next.config.js",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Chociaż Next.js ma wbudowany serwer, można go zastąpić własną implementacją poprzez plik server.js i modyfikację skryptów w package.json.",
      },
      {
        question: "Jak działa next/error?",
        options: [
          "Dostarcza wbudowany komponent do wyświetlania błędów",
          "Zarządza błędami API",
          "Loguje błędy automatycznie",
          "Optymalizuje renderowanie",
        ],
        answer: 0,
        explanation:
          "next/error dostarcza komponent Error do wyświetlania stron błędów ze statusem HTTP.",
      },
      {
        question: "Jak skonfigurować aliasy ścieżek w Next.js?",
        options: [
          "W next.config.js",
          "W tsconfig.json/jsconfig.json",
          "W plikach .env",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 1,
        explanation:
          "Aliasy ścieżek w Next.js konfiguruje się w tsconfig.json lub jsconfig.json w sekcji compilerOptions.paths.",
      },
      {
        question: "Co to jest next/analytics?",
        options: [
          "Wbudowana obsługa analityki w Next.js",
          "Narzędzie do testowania",
          "Plugin do optymalizacji",
          "Next.js nie ma takiej funkcji",
        ],
        answer: 3,
        explanation:
          "Next.js nie ma wbudowanego next/analytics, ale można łatwo zintegrować narzędzia analityczne jak Google Analytics.",
      },
      {
        question: "Jak zaimplementować theming w Next.js?",
        options: [
          "Używając CSS Variables i Context API",
          "Tylko poprzez biblioteki zewnętrzne",
          "W next.config.js",
          "Next.js nie obsługuje themingu",
        ],
        answer: 0,
        explanation:
          "Theming w Next.js można zaimplementować na wiele sposobów, np. łącząc CSS Variables z React Context do zarządzania stanem motywu.",
      },
      {
        question: "Jak działa next/amp?",
        options: [
          "Pozwala na tworzenie stron zgodnych z AMP",
          "Optymalizuje ładowanie zasobów",
          "Zarządza stanem",
          "Konfiguruje API",
        ],
        answer: 0,
        explanation:
          "next/amp to wsparcie dla tworzenia stron AMP (Accelerated Mobile Pages) w Next.js.",
      },
      {
        question: "Jak zaimplementować authentication w Next.js?",
        options: [
          "Używając NextAuth.js",
          "Implementując własne rozwiązanie",
          "Wszystkie odpowiedzi są poprawne",
          "Next.js nie obsługuje authentication",
        ],
        answer: 2,
        explanation:
          "Next.js oferuje elastyczność w implementacji autentykacji - można użyć NextAuth.js lub własnego rozwiązania.",
      },
      {
        question: "Co to jest next/experimental?",
        options: [
          "Dostęp do eksperymentalnych funkcji Next.js",
          "Narzędzie do testowania",
          "Plugin do optymalizacji",
          "Typ komponentu",
        ],
        answer: 0,
        explanation:
          "next/experimental zapewnia dostęp do eksperymentalnych funkcji Next.js, które nie są jeszcze stabilne.",
      },
      {
        question: "Jak skonfigurować PWA w Next.js?",
        options: [
          "Używając next-pwa",
          "Konfigurując next.config.js",
          "Wszystkie odpowiedzi są poprawne",
          "Next.js nie obsługuje PWA",
        ],
        answer: 2,
        explanation:
          "Next.js można skonfigurować jako PWA, np. używając next-pwa i odpowiedniej konfiguracji w next.config.js.",
      },
      {
        question: "Jak działa next/legacy/image?",
        options: [
          "To starsza wersja komponentu Image",
          "Obsługuje tylko podstawowe funkcje",
          "Jest dostępna dla kompatybilności wstecznej",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 3,
        explanation:
          "next/legacy/image to starsza wersja komponentu Image, zachowana dla kompatybilności wstecznej.",
      },
    ],
  },
  tailwind: {
    easy: [
      {
        question: "Jak dodać padding w Tailwind?",
        options: ["padding-4", "p-4", "pd-4", "pl-4"],
        answer: 1,
        explanation:
          "W Tailwind, padding dodajemy za pomocą klasy 'p-[size]', gdzie size to wartość z skali (np. p-4 dla 1rem).",
      },
      {
        question: "Jak ustawić kolor tekstu na czerwony w Tailwind?",
        options: [
          "color-red-500",
          "text-red-500",
          "font-color-red-500",
          "txt-red-500",
        ],
        answer: 1,
        explanation:
          "Klasy kolorów tekstu w Tailwind zaczynają się od 'text-', np. text-red-500.",
      },
      {
        question: "Jak zrobić flexbox w Tailwind?",
        options: ["flex", "display-flex", "flexbox", "dflex"],
        answer: 0,
        explanation:
          "Podstawowa klasa 'flex' w Tailwind ustawia display: flex.",
      },
      {
        question: "Jak ustawić szerokość 100% w Tailwind?",
        options: ["w-100", "width-full", "w-full", "width-100"],
        answer: 2,
        explanation: "W Tailwind, 'w-full' ustawia width: 100%.",
      },
      {
        question: "Jak dodać cień do elementu w Tailwind?",
        options: ["shadow", "box-shadow", "effect-shadow", "drop-shadow"],
        answer: 0,
        explanation:
          "Podstawowa klasa 'shadow' dodaje umiarkowany cień do elementu.",
      },
    ],
    medium: [
      {
        question: "Jak ustawić zaokrąglone rogi w Tailwind?",
        options: ["rounded", "border-radius", "round", "corner-round"],
        answer: 0,
        explanation:
          "Klasa 'rounded' w Tailwind ustawia border-radius: 0.25rem.",
      },
      {
        question: "Jak ustawić element jako absolutnie pozycjonowany?",
        options: ["absolute", "pos-absolute", "position-absolute", "abs"],
        answer: 0,
        explanation: "Klasa 'absolute' w Tailwind ustawia position: absolute.",
      },
      {
        question: "Jak ukryć element na małych ekranach w Tailwind?",
        options: [
          "hidden sm:block",
          "sm:hidden",
          "hide-on-mobile",
          "mobile-hidden",
        ],
        answer: 1,
        explanation:
          "'sm:hidden' ukrywa element na ekranach small (sm) i większych, podczas gdy 'hidden sm:block' ukrywa domyślnie i pokazuje od sm w górę.",
      },
      {
        question: "Jak ustawić hover w Tailwind?",
        options: [
          "hover:bg-blue-500",
          "bg-blue-500:hover",
          "on-hover-bg-blue-500",
          "bg-hover-blue-500",
        ],
        answer: 0,
        explanation:
          "W Tailwind, stany jak hover poprzedza się przedrostkiem 'hover:', np. hover:bg-blue-500.",
      },
      {
        question: "Jak zrobić kontener w Tailwind?",
        options: ["container", "wrapper", "box", "div"],
        answer: 0,
        explanation:
          "Klasa 'container' w Tailwind tworzy kontener z responsywnymi max-width.",
      },
      {
        question: "Jak ustawić animację w Tailwind?",
        options: [
          "Używając klas animate-",
          "Tylko poprzez custom CSS",
          "Tailwind nie obsługuje animacji",
          "Używając transition",
        ],
        answer: 0,
        explanation:
          "Tailwind ma wbudowane klasy animacji zaczynające się od 'animate-', np. animate-spin.",
      },
      {
        question: "Jak ustawić gradient w Tailwind?",
        options: [
          "bg-gradient-to-r",
          "gradient",
          "linear-gradient",
          "bg-gradient",
        ],
        answer: 0,
        explanation:
          "Tailwind używa klas jak 'bg-gradient-to-r' dla gradientów (r - right, l - left, t - top, b - bottom).",
      },
      {
        question: "Jak ustawić przejście (transition) w Tailwind?",
        options: ["transition", "trans", "animate", "effect-transition"],
        answer: 0,
        explanation:
          "Podstawowa klasa 'transition' w Tailwind ustawia transition-property: all, duration-200, ease-in-out.",
      },
      {
        question: "Jak ustawić grid w Tailwind?",
        options: [
          "grid",
          "display-grid",
          "grid-cols-3",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 3,
        explanation:
          "Tailwind obsługuje CSS Grid poprzez klasy jak 'grid', 'grid-cols-3', 'gap-4' itp.",
      },
    ],
    hard: [
      {
        question: "Jak ustawić wysokość ekranu w Tailwind?",
        options: ["h-screen", "height-screen", "full-height", "vh-100"],
        answer: 0,
        explanation: "'h-screen' w Tailwind ustawia height: 100vh.",
      },
      {
        question: "Jak ustawić customową wartość w Tailwind?",
        options: [
          "Używając nawiasów kwadratowych, np. w-[200px]",
          "Tylko poprzez rozszerzenie konfiguracji",
          "Tailwind nie pozwala na customowe wartości",
          "Używając !important",
        ],
        answer: 0,
        explanation:
          "Tailwind pozwala na customowe wartości poprzez składnię [wartość], np. w-[200px] lub text-[#ff0000].",
      },
      {
        question: "Jak zrobić dark mode w Tailwind?",
        options: [
          "Używając dark: prefix",
          "Tylko poprzez custom CSS",
          "Tailwind nie obsługuje dark mode",
          "Używając klasy dark-mode",
        ],
        answer: 0,
        explanation:
          "W Tailwind, dark mode obsługuje się poprzez prefix 'dark:', np. dark:bg-gray-800.",
      },
      {
        question: "Jak ustawić overflow w Tailwind?",
        options: ["overflow-auto", "overflow", "flow-auto", "scroll-auto"],
        answer: 0,
        explanation:
          "Tailwind używa klas 'overflow-{type}', np. overflow-auto, overflow-hidden.",
      },
      {
        question: "Jak ustawić transformacje w Tailwind?",
        options: [
          "transform",
          "translate-x-4",
          "Wszystkie odpowiedzi są poprawne",
          "rotate-45",
        ],
        answer: 2,
        explanation:
          "Tailwind ma wiele klas transformacji, włączając 'transform', 'translate-x-4', 'rotate-45' itp.",
      },
      {
        question: "Jak ustawić cursor pointer w Tailwind?",
        options: ["cursor-pointer", "pointer", "cursor", "clickable"],
        answer: 0,
        explanation:
          "Klasa 'cursor-pointer' w Tailwind ustawia cursor: pointer.",
      },
      {
        question: "Jak ustawić border w Tailwind?",
        options: [
          "border",
          "border-1",
          "border-solid",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Podstawowa klasa 'border' w Tailwind ustawia 1px solid border z domyślnym kolorem.",
      },
      {
        question: "Jak ustawić pozycjonowanie względne w Tailwind?",
        options: ["relative", "position-relative", "pos-rel", "rel"],
        answer: 0,
        explanation: "Klasa 'relative' w Tailwind ustawia position: relative.",
      },
      {
        question: "Jak ustawić text-align center w Tailwind?",
        options: ["text-center", "align-center", "text-middle", "center"],
        answer: 0,
        explanation:
          "Klasa 'text-center' w Tailwind ustawia text-align: center.",
      },
      {
        question: "Jak ustawić z-index w Tailwind?",
        options: ["z-10", "z-index-10", "layer-10", "depth-10"],
        answer: 0,
        explanation: "Tailwind używa klas 'z-{index}' dla z-index, np. z-10.",
      },
      {
        question: "Jak ustawić opacity w Tailwind?",
        options: ["opacity-50", "o-50", "transparency-50", "alpha-50"],
        answer: 0,
        explanation:
          "Tailwind używa klas 'opacity-{value}' gdzie value to liczba od 0 do 100.",
      },
    ],
  },
  typescript: {
    easy: [
      {
        question: "Do czego służy operator `?` w TypeScript?",
        options: [
          "Tworzy typ warunkowy",
          "Oznacza pole jako opcjonalne",
          "Rzuca wyjątek",
          "Sprawdza typ runtime",
        ],
        answer: 1,
        explanation:
          "Operator `?` w TypeScript oznacza, że pole w obiekcie lub parametr funkcji jest opcjonalne.",
      },
      {
        question: "Jak zdefiniować typ dla tablicy stringów w TypeScript?",
        options: ["Array<string>", "string[]", "Oba powyższe", "List<string>"],
        answer: 2,
        explanation:
          "W TypeScript, tablicę stringów można zdefiniować jako 'Array<string>' lub 'string[]' - obie formy są poprawne.",
      },
      {
        question: "Co to jest enum w TypeScript?",
        options: [
          "Zbiór nazwanych stałych",
          "Typ danych",
          "Nowy operator",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Enum w TypeScript to sposób na zdefiniowanie zbioru nazwanych stałych, które mogą być numeryczne lub stringowe.",
      },
      {
        question: "Co to jest interface w TypeScript?",
        options: [
          "Sposób definiowania kształtu obiektu",
          "Typ funkcji",
          "Nowy typ danych",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Interface w TypeScript służy głównie do definiowania kształtu (shape) obiektów - jakie właściwości mają i jakich typów są ich wartości.",
      },
      {
        question: "Jak zdefiniować typ dla funkcji w TypeScript?",
        options: [
          "(param: type) => returnType",
          "Function<param, returnType>",
          "func(param: type): returnType",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Typ funkcji w TypeScript definiuje się poprzez '(param: type) => returnType', np. '(x: number) => string'.",
      },
    ],
    medium: [
      {
        question: "Co to jest type assertion w TypeScript?",
        options: [
          "Sposób na powiedzenie kompilatorowi, jaki jest typ wartości",
          "Nowy typ danych",
          "Metoda walidacji",
          "Typ funkcji",
        ],
        answer: 0,
        explanation:
          "Type assertion to sposób na powiedzenie kompilatorowi TypeScript 'traktuj tę wartość jako ten typ', np. poprzez składnię 'as' lub '<>'.",
      },
      {
        question: "Jak rozszerzyć interface w TypeScript?",
        options: [
          "interface NewInterface extends OldInterface",
          "interface NewInterface implements OldInterface",
          "interface NewInterface : OldInterface",
          "interface NewInterface with OldInterface",
        ],
        answer: 0,
        explanation:
          "Interfejsy w TypeScript rozszerza się poprzez słowo kluczowe 'extends'.",
      },
      {
        question: "Co to jest 'never' w TypeScript?",
        options: [
          "Typ reprezentujący wartość, która nigdy nie wystąpi",
          "Typ dla funkcji, które nie zwracają wartości",
          "Typ dla wartości null",
          "Typ dla błędów",
        ],
        answer: 0,
        explanation:
          "Typ never reprezentuje wartość, która nigdy nie wystąpi, np. funkcja, która zawsze rzuca wyjątek lub nieskończona pętla.",
      },
      {
        question: "Co to jest type alias w TypeScript?",
        options: [
          "Nazwa dla typu lub kombinacji typów",
          "Nowy typ danych",
          "Alternatywa dla interface",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Type alias w TypeScript tworzy nową nazwę dla istniejącego typu lub kombinacji typów, np. 'type Point = { x: number, y: number }'.",
      },
      {
        question: "Jak zdefiniować typ dla Promise w TypeScript?",
        options: ["Promise<type>", "Async<type>", "Future<type>", "Task<type>"],
        answer: 0,
        explanation:
          "Typ dla Promise w TypeScript definiuje się jako Promise<type>, gdzie type to typ wartości, którą Promise rozwiązuje.",
      },
    ],
    hard: [
      {
        question: "Co to jest 'satisfies' w TypeScript?",
        options: [
          "Nowy operator sprawdzający zgodność typu bez zmiany inferencji",
          "Typ dla asercji",
          "Alternatywa dla 'as'",
          "TypeScript nie ma takiego operatora",
        ],
        answer: 0,
        explanation:
          "Operator satisfies (od TS 4.9) sprawdza, czy wyrażenie spełnia typ, bez zmiany inferencji typu.",
      },
      {
        question: "Jak zaimplementować overload funkcji w TypeScript?",
        options: [
          "Przez wielokrotne deklaracje tej samej funkcji z różnymi typami",
          "Używając operatora overload",
          "TypeScript nie obsługuje overload",
          "Przez dziedziczenie",
        ],
        answer: 0,
        explanation:
          "Overload funkcji w TypeScript implementuje się przez wielokrotne deklaracje tej samej funkcji z różnymi typami parametrów i zwracanymi wartościami.",
      },
      {
        question: "Co to jest 'unknown' w TypeScript?",
        options: [
          "Typ bezpieczniejszy odpowiednik 'any' wymagający sprawdzenia typu",
          "Typ dla nieznanych wartości",
          "Nowy typ danych",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 3,
        explanation:
          "Typ unknown to bezpieczniejsza alternatywa dla any, która wymaga sprawdzenia typu przed operacjami.",
      },
      {
        question: "Co to jest 'declare' w TypeScript?",
        options: [
          "Sposób na deklarowanie typów bez implementacji",
          "Nowy typ danych",
          "Operator rzutowania",
          "Składnia dla stałych",
        ],
        answer: 0,
        explanation:
          "Słowo kluczowe declare pozwala na deklarowanie typów bez dostarczania ich implementacji, często używane z bibliotekami JS.",
      },
      {
        question: "Jak zdefiniować typ dla komponentu z children w React?",
        options: [
          "React.FC<Props & { children: React.ReactNode }>",
          "React.ComponentWithChildren<Props>",
          "React.ParentComponent<Props>",
          "Wszystkie odpowiedzi są poprawne",
        ],
        answer: 0,
        explanation:
          "Typ React.FC domyślnie zawiera children, ale można go jawnie zdefiniować jako React.ReactNode.",
      },
    ],
  },
  html: {
    easy: [
      {
        question: "Co oznacza skrót HTML?",
        options: [
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Text Markup Language",
          "Hyperlinking Text Marking Language",
        ],
        answer: 2,
        explanation:
          "HTML to Hyper Text Markup Language, język znaczników do tworzenia stron WWW.",
      },
      {
        question:
          "Który znacznik służy do tworzenia nagłówka największego poziomu?",
        options: ["<head>", "<h1>", "<header>", "<h6>"],
        answer: 1,
        explanation: "<h1> to nagłówek najwyższego poziomu w HTML.",
      },
      {
        question: "Jak w HTML oznacza się komentarz?",
        options: [
          "// komentarz",
          "<!-- komentarz -->",
          "# komentarz",
          "/* komentarz */",
        ],
        answer: 1,
        explanation:
          "Komentarze w HTML zapisujemy w formacie <!-- komentarz -->.",
      },
      {
        question: "Co oznacza atrybut href w tagu <a>?",
        options: [
          "Określa adres URL linku",
          "Ustawia tytuł strony",
          "Definiuje styl linku",
          "Dodaje obrazek do linku",
        ],
        answer: 0,
        explanation:
          "Atrybut href określa adres URL, do którego prowadzi link.",
      },
      {
        question: "Który tag służy do tworzenia listy numerowanej?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: 1,
        explanation:
          "<ol> tworzy listę numerowaną, natomiast <ul> listę punktowaną.",
      },
    ],
    medium: [
      {
        question: "Do czego służy atrybut alt w tagu <img>?",
        options: [
          "Do ustawiania rozmiaru obrazka",
          "Do podania tekstu alternatywnego dla obrazka",
          "Do linkowania do innej strony",
          "Do ustawiania tła obrazka",
        ],
        answer: 1,
        explanation:
          "Atrybut alt dostarcza tekst alternatywny wyświetlany, gdy obrazek nie może zostać załadowany.",
      },
      {
        question: "Jakie są główne sekcje dokumentu HTML5?",
        options: [
          "<head> i <body>",
          "<header> i <footer>",
          "<section> i <article>",
          "Wszystkie powyższe",
        ],
        answer: 3,
        explanation:
          "Dokument HTML5 składa się z wielu sekcji, w tym <head>, <body>, <header>, <footer>, <section>, <article> i innych.",
      },
      {
        question: "Co robi atrybut lang w tagu <html>?",
        options: [
          "Ustawia język dokumentu",
          "Definiuje styl tekstu",
          "Określa typ dokumentu",
          "Ustawia kodowanie znaków",
        ],
        answer: 0,
        explanation:
          "Atrybut lang określa język naturalny zawartości dokumentu HTML.",
      },
      {
        question: "Jakie jest domyślne zachowanie tagu <form> po submit?",
        options: [
          "Wysyła dane i przeładowuje stronę",
          "Wysyła dane bez przeładowania",
          "Nie robi nic",
          "Wyświetla alert",
        ],
        answer: 0,
        explanation:
          "Domyślnie po submit formularza strona jest przeładowywana, a dane wysyłane są na określony adres.",
      },
      {
        question: "Co oznacza atrybut target='_blank' w linku?",
        options: [
          "Otwiera link w nowej karcie",
          "Otwiera link w tej samej karcie",
          "Blokuje link",
          "Otwiera link w nowym oknie bez paska adresu",
        ],
        answer: 0,
        explanation:
          "Atrybut target='_blank' powoduje, że link otwiera się w nowej karcie lub oknie przeglądarki.",
      },
    ],
    hard: [
      {
        question: "Jaka jest różnica między tagiem <div> a <span>?",
        options: [
          "<div> jest blokowy, <span> jest liniowy",
          "<span> jest blokowy, <div> jest liniowy",
          "Oba są blokowe",
          "Oba są liniowe",
        ],
        answer: 0,
        explanation:
          "<div> to element blokowy, który zajmuje całą szerokość dostępnego miejsca, natomiast <span> to element liniowy, który zajmuje tylko tyle miejsca, ile potrzebuje.",
      },
      {
        question: "Co oznacza atrybut 'lang' w tagu <html>?",
        options: [
          "Ustawia język dokumentu",
          "Definiuje styl tekstu",
          "Określa typ dokumentu",
          "Ustawia kodowanie znaków",
        ],
        answer: 0,
        explanation:
          "Atrybut lang określa język naturalny zawartości dokumentu HTML.",
      },
      {
        question: "Jakie znaczenie ma doctype w HTML?",
        options: [
          "Informuje przeglądarkę o wersji HTML",
          "Definiuje tytuł strony",
          "Ustawia styl CSS",
          "Dodaje skrypt JavaScript",
        ],
        answer: 0,
        explanation:
          "Deklaracja doctype informuje przeglądarkę, jaką wersję HTML ma interpretować.",
      },
      {
        question: "Jakie są różnice między atrybutami id i class?",
        options: [
          "id jest unikalne, class może być współdzielona",
          "class jest unikalne, id może być współdzielone",
          "Oba są unikalne",
          "Oba mogą być współdzielone",
        ],
        answer: 0,
        explanation:
          "Atrybut id powinien być unikalny w dokumencie, natomiast class może być nadawana wielu elementom.",
      },
      {
        question: "Co oznacza atrybut 'defer' w tagu <script>?",
        options: [
          "Opóźnia wykonanie skryptu do załadowania strony",
          "Blokuje ładowanie strony do wykonania skryptu",
          "Ładuje skrypt asynchronicznie",
          "Nie ma znaczenia",
        ],
        answer: 0,
        explanation:
          "Atrybut defer powoduje, że skrypt jest pobierany równolegle, ale wykonywany dopiero po parsowaniu dokumentu.",
      },
    ],
  },
  css: {
    easy: [
      {
        question: "Co oznacza skrót CSS?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style System",
          "Colorful Style Sheets",
        ],
        answer: 0,
        explanation:
          "CSS to Cascading Style Sheets, język służący do stylizacji stron internetowych.",
      },
      {
        question: "Jak ustawić kolor tekstu na czerwony w CSS?",
        options: [
          "color: red;",
          "text-color: red;",
          "font-color: red;",
          "background-color: red;",
        ],
        answer: 0,
        explanation: "W CSS kolor tekstu ustawia się właściwością color.",
      },
      {
        question: "Jakie jednostki długości są dostępne w CSS?",
        options: ["px, em, rem, %", "kg, cm, mm", "sec, ms", "dpi, ppi"],
        answer: 0,
        explanation:
          "W CSS używa się jednostek takich jak px, em, rem, %, vw, vh itd.",
      },
      {
        question: "Jakie jest domyślne zachowanie elementu <div> w CSS?",
        options: [
          "Element blokowy",
          "Element liniowy",
          "Element absolutny",
          "Element stały",
        ],
        answer: 0,
        explanation: "<div> jest elementem blokowym (block-level element).",
      },
      {
        question: "Jak ustawić margines zewnętrzny w CSS?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 0,
        explanation: "Margines zewnętrzny ustawia się właściwością margin.",
      },
    ],
    medium: [
      {
        question: "Co oznacza zasada kaskadowości w CSS?",
        options: [
          "Styl najbliższy elementowi ma pierwszeństwo",
          "Styl zdefiniowany później nadpisuje wcześniejszy",
          "Styl inline jest ignorowany",
          "Styl globalny zawsze ma pierwszeństwo",
        ],
        answer: 1,
        explanation:
          "W CSS styl zdefiniowany później (lub o wyższej specyficzności) nadpisuje wcześniejszy.",
      },
      {
        question: "Jak działa selektor potomka w CSS?",
        options: [
          "Wybiera bezpośrednie dzieci",
          "Wybiera wszystkie potomki na dowolnym poziomie",
          "Wybiera elementy o określonym id",
          "Wybiera elementy o określonej klasie",
        ],
        answer: 1,
        explanation:
          "Selektor potomka (np. div p) wybiera wszystkie elementy p będące potomkami div, niezależnie od poziomu.",
      },
      {
        question: "Co robi właściwość 'z-index' w CSS?",
        options: [
          "Ustawia przezroczystość elementu",
          "Ustawia kolejność nakładania elementów",
          "Ustawia rozmiar elementu",
          "Ustawia margines elementu",
        ],
        answer: 1,
        explanation:
          "z-index kontroluje kolejność nakładania się elementów na osi Z.",
      },
      {
        question: "Jakie wartości może przyjmować właściwość 'position' w CSS?",
        options: [
          "static, relative, absolute, fixed, sticky",
          "top, bottom, left, right",
          "block, inline, flex",
          "center, left, right",
        ],
        answer: 0,
        explanation:
          "Właściwość position może przyjmować wartości: static, relative, absolute, fixed, sticky.",
      },
      {
        question: "Co oznacza jednostka 'em' w CSS?",
        options: [
          "Wielkość w pikselach",
          "Wielkość względna względem font-size rodzica",
          "Wielkość względna względem viewportu",
          "Wielkość stała",
        ],
        answer: 1,
        explanation:
          "1em to wielkość równa aktualnej wielkości fontu elementu nadrzędnego.",
      },
    ],
    hard: [
      {
        question: "Jak działa model pudełkowy (box model) w CSS?",
        options: [
          "Elementy mają tylko szerokość i wysokość",
          "Elementy mają margines, obramowanie, padding i zawartość",
          "Elementy mają tylko padding i zawartość",
          "Elementy mają tylko margines i obramowanie",
        ],
        answer: 1,
        explanation:
          "Model pudełkowy opisuje element jako zawartość + padding + border + margin.",
      },
      {
        question: "Co robi właściwość 'flex-grow' w Flexbox?",
        options: [
          "Określa, jak bardzo element może się rozciągnąć wzdłuż osi głównej",
          "Określa minimalną szerokość elementu",
          "Ukrywa element",
          "Ustawia odstęp między elementami",
        ],
        answer: 0,
        explanation:
          "flex-grow definiuje współczynnik wzrostu elementu w kontenerze flex.",
      },
      {
        question: "Czym jest pseudo-klasa ':nth-child()' w CSS?",
        options: [
          "Wybiera elementy na podstawie ich pozycji w rodzeństwie",
          "Wybiera elementy o określonym id",
          "Wybiera elementy o określonej klasie",
          "Wybiera elementy z określonym stylem",
        ],
        answer: 0,
        explanation:
          ":nth-child() pozwala wybierać elementy na podstawie ich kolejności wśród rodzeństwa.",
      },
      {
        question: "Jakie wartości przyjmuje właściwość 'display' w CSS?",
        options: [
          "block, inline, flex, grid, none",
          "top, bottom, left, right",
          "static, relative, absolute",
          "visible, hidden, collapse",
        ],
        answer: 0,
        explanation:
          "display określa sposób wyświetlania elementu, np. block, inline, flex, grid, none.",
      },
      {
        question: "Co oznacza 'specificity' w CSS?",
        options: [
          "Kolejność ładowania plików CSS",
          "Reguła określająca, która deklaracja CSS ma pierwszeństwo",
          "Typ selektora",
          "Wielkość pliku CSS",
        ],
        answer: 1,
        explanation:
          "Specificity to mechanizm decydujący, która reguła CSS ma wyższy priorytet przy konfliktach.",
      },
    ],
  },
};

export default allQuestions;
