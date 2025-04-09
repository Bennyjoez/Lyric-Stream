import AddLyric from "~/components/addLyric";

export function Landing({ message }: { message: string }) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <img
            className="w-48"
            src="/lyric_stream_logo.png"
            alt="React Router logo"
            width={96}
            height={96}
          />
          {/* <h1 className="text-4xl font-bold leading-10 text-gray-900 dark:text-gray-100"> */}
        </header>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/names"
              >
                Names
              </a>
            </li>
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/gospel"
              >
                Gospel
              </a>
            </li>
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/country"
              >
                Country
              </a>
            </li>
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/pop"
              >
                Pop
              </a>
            </li>
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/blues"
              >
                Blues
              </a>
            </li>
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/rock"
              >
                Rock
              </a>
            </li>
            <li>
              <a
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="max-w-[1200px] w-full">
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            A website which streams song lyrics in sync with the song, allowing
            users to sing along as the song plays.
          </p>
          <AddLyric />
        </div>
      </div>
    </main>
  );
}
