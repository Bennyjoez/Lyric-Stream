import React from "react";

const Blues = () => {
  return (
    <main className="container mx-auto py-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">Blues Lyrics</h1>
        <p className="text-gray-600">Explore the soulful world of blues music</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Featured Lyrics</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="/blues/lyric1" className="text-blue-600 hover:underline">
              Blues Song 1
            </a>
          </li>
          <li>
            <a href="/blues/lyric2" className="text-blue-600 hover:underline">
              Blues Song 2
            </a>
          </li>
          {/* Add more lyrics as needed */}
        </ul>
      </section>
      <footer className="text-center text-gray-500">
        <p>© 2023 Blues Music</p>
      </footer>
    </main>
  );
};

export default Blues;

