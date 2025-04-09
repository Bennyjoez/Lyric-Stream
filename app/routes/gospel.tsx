const Gospel = () => {
  return (
    <main className="container mx-auto py-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">Gospel Lyrics</h1>
        <p className="text-gray-600">Explore the uplifting world of gospel music</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Featured Lyrics</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="/gospel/lyric1" className="text-blue-600 hover:underline">
              Gospel Song 1
            </a>
          </li>
          <li>
            <a href="/gospel/lyric2" className="text-blue-600 hover:underline">
              Gospel Song 2
            </a>
          </li>
          {/* Add more lyrics as needed */}
        </ul>
      </section>
      <footer className="text-center text-gray-500">
        <p>&copy; 2023 Gospel Music</p>
      </footer>
    </main>
  );
};

export default Gospel;
