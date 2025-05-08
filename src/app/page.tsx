import Image from "next/image";

const participants = [
  {
    name: "Danny-09",
    description: "Desarrollador Fullstack.",
    stack: "Laravel, Next.js, Nest.js, Vue.js, React, Java, MySQL, PHP, JavaScript, TypeScript, Git, GitHub, GitFlow, API Rest.",
  },
  {
    name: "josemaNavNor",
    description: "Desarrollador Fullstack.",
    stack: "Next.js, Java, C++, MySQL, NoSQL, PHP, JavaScript, TypeScript, Git, GitHub, GitFlow, API Rest.",
  },
  {
    name: "josemaNavNor",
    description: "Desarrollador Fullstack.",
    stack: "Next.js, Java, C++, MySQL, NoSQL, PHP, JavaScript, TypeScript, Git, GitHub, GitFlow, API Rest.",
  },
  {
    name: "Panqueque",
    description: "Estudiante de Ingeniería en Sistemas.",
    stack: "Next.js, Nest.js, React, Java, MySQL, PHP, JavaScript, Git, GitHub, API Rest.",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center gap-16">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      <main className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">Participantes del Taller</h1>
        <p className="text-gray-600 mb-8">Conoce a quienes forman parte de este proyecto colaborativo.</p>

        <ul className="space-y-6 text-left">
          {participants.map((person, index) => (
            <li key={index} className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-900">
              <h2 className="text-xl font-semibold">{person.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">{person.description}</p>
              <b>Mi stack:</b>
              <p className="text-gray-700 dark:text-gray-300">{person.stack}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="text-sm text-gray-500 mt-10">
        Taller Git & GitHub - Next.js
      </footer>
    </div>
  );
}
