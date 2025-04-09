export default function About() {
  return (
    <main className="container mx-auto py-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">About Lyric Stream</h1>
        <p className="text-gray-600">Learn more about the team behind the app</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="text-gray-700">
          Lyric Stream was founded in 2023 by a team of music lovers who were
          frustrated with the current state of lyrics websites. We wanted to
          create an app that would allow users to easily access and stream their
          favorite song lyrics.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://github.com/Bennyjoez"
              className="text-blue-600 hover:underline"
            >
              Benson Njuguna Kamau - Founder & CEO
            </a>
          </li>
          {/* Add more team members as needed */}
        </ul>
      </section>
      <footer className="text-center text-gray-500">
        <p>Copyright &copy; 2025 Lyric Stream</p>
      </footer>
    </main>
  );
}
