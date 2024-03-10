import { fetchMovies } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const movies = await fetchMovies();
  if (!movies || movies.length === 0)
    return (
      <p className="mx-auto mt-4 max-w-screen-xl p-5 text-gray-400 md:px-10">
        No data available.
      </p>
    );
  return (
    <main className="mx-auto mt-2 max-w-screen-xl px-5 md:px-10">
      <h2 className="mb-5 text-4xl font-semibold">Movies</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/home/content-details/${movie.id}`}>
            <div className="group relative h-[400px] overflow-hidden rounded-md bg-gray-50 transition-all hover:ring hover:ring-white/90 hover:ring-offset-2 hover:ring-offset-[#141414]">
              <Image
                src={movie.image}
                className="absolute object-cover transition-all group-hover:scale-110"
                alt="movie"
                fill
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
