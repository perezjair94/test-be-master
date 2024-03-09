import { Category, Movie } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';

function Card({ id, image }: Movie) {
  return (
    <Link href={`/home/content-details/${id}`}>
      <div className="group relative h-[400px] overflow-hidden rounded-md bg-gray-50 transition-all hover:ring hover:ring-white/90 hover:ring-offset-2 hover:ring-offset-[#141414]">
        <Image
          src={image}
          className="absolute object-cover transition-all group-hover:scale-110"
          alt="movie"
          fill
        />
      </div>
    </Link>
  );
}

export default function ContentCategory({
  category,
  movies,
}: {
  category: Category;
  movies: Movie[];
}) {
  return (
    <>
      <section className="mx-auto my-10 max-w-screen-xl">
        <h2 className="mb-2 font-bold">{category?.name}</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </>
  );
}
