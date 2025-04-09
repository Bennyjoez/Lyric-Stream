export default function Names() {
  return (
    <main className="container mx-auto py-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">Artist Names</h1>
        <p className="text-gray-600">
          Explore the various singers and bands covered on Lyric Stream
        </p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Featured Singers</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="/names/adele" className="text-blue-600 hover:underline">
              Adele
            </a>
          </li>
          <li>
            <a
              href="/names/taylor-swift"
              className="text-blue-600 hover:underline"
            >
              Taylor Swift
            </a>
          </li>
          <li>
            <a
              href="/names/kacey-musgraves"
              className="text-blue-600 hover:underline"
            >
              Kacey Musgraves
            </a>
          </li>
          <li>
            <a
              href="/names/bruno-mars"
              className="text-blue-600 hover:underline"
            >
              Bruno Mars
            </a>
          </li>
          <li>
            <a
              href="/names/post-malone"
              className="text-blue-600 hover:underline"
            >
              Post Malone
            </a>
          </li>
          {/* Add more artists as needed */}
        </ul>
      </section>
      <footer className="text-center text-gray-500">
        <p>&copy; 2023 Lyric Stream</p>
      </footer>
    </main>
  );
}
