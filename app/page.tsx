import Link from 'next/link';
import { plans } from './lib/placeholder-data';
import { fetchMovies } from './lib/data';
import Image from 'next/image';

export default async function Home() {
  const movies = await fetchMovies();
  return (
    <main className="">
      <section className="bg-[url(https://i.giphy.com/iAiaD6vpjApoda0wYt.webp)] bg-cover bg-center bg-no-repeat">
        <div className="bg-[rgba(0,0,0,0.5)]">
          <div className="mx-auto max-w-screen-lg p-5 px-10">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-red-600 md:text-2xl">Movie App</h2>
              <Link href="/login">
                <button className="rounded-md bg-red-600 p-1 px-4 transition-opacity hover:opacity-90">
                  <span className="text-sm font-semibold">Sign In</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex h-[400px] flex-col items-center justify-center gap-4 px-5">
            <h2 className="mx-auto text-center text-xl font-black md:w-[40%] md:text-5xl">
              Marvel movies, TV shows, and more
            </h2>
            <p className="text-center text-lg">
              Starts at USD {plans[2].price}. Cancel anytime.
            </p>
            <Link href="/login">
              <button className="rounded-md bg-red-600 p-2 px-4 transition-opacity hover:opacity-90">
                <span className="text-lg font-semibold">Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg p-5 md:px-10">
        <h2 className="text-xl font-semibold">Our plan list</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-xl bg-gradient-to-b from-red-600 to-red-900 p-5"
            >
              <h4 className="text-2xl font-semibold uppercase">{plan.name}</h4>
              <p className="mb-5 mt-4 font-medium text-white/70">
                {plan.description}
              </p>
              <span className="mt-auto block text-lg font-bold text-white/90">
                USD {plan.price}/month
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg p-5 md:px-10">
        <h2 className="text-xl font-semibold">Movies</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {movies?.slice(0, 4).map((movie) => (
            <Link key={movie.id} href={`/home/content-details/${movie.id}`}>
              <div className="group relative h-[400px] overflow-hidden rounded-md bg-gray-50 transition-all hover:ring hover:ring-white/90 hover:ring-offset-2 hover:ring-offset-[#141414] lg:h-[300px]">
                <Image
                  src={movie.image}
                  className="absolute object-cover transition-all group-hover:scale-110"
                  alt="movie"
                  sizes="(min-width: 400px) 100vw, 100vw"
                  priority
                  fill
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg p-5 md:px-10">
        <h2 className="text-xl font-semibold">Get More From Your Membership</h2>
        <div className="relative mt-4 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-900 p-6 lg:px-10">
          <div className="flex h-[500px] flex-col md:h-[400px] md:w-[50%] md:items-center lg:justify-center">
            <h2 className="text-xl font-bold md:text-2xl">
              Create awesome stuff with the world is greatest comic API
            </h2>
            <p className="mt-4 font-medium">
              The Marvel Comics API allows developers everywhere to access
              information about Marvel is vast library of comics—from what is
              coming up, to 70 years ago.
            </p>
          </div>
          <div className="absolute -bottom-52  h-[500px] w-[400px] md:-right-10 md:h-[650px] md:w-[500px]">
            <Image
              src="/wolverine.png"
              sizes="(min-width: 400px) 100vw, 100vw"
              alt="wolverine"
              quality={80}
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
}
