import { fetchMovie } from '@/app/lib/data';
import { Heart } from 'lucide-react';

type ContnetDetails = { movie: string };

export default async function ContentDetails({ movie }: ContnetDetails) {
  const data = await fetchMovie(movie);
  if (!data) return <p className="mt-4 text-gray-400">No data available.</p>;
  return (
    <main className="mx-auto max-w-screen-xl overflow-hidden">
      {data.video ? (
        <div className="relative">
          <video
            className="relative h-[200px] w-full object-cover object-center md:h-[450px]"
            src={data.video}
            autoPlay
            loop
          />
          {data.isFavourite ? (
            <div className="absolute inset-0 z-40 h-[200px] w-full bg-[linear-gradient(0deg,#181818,transparent_50%)] md:h-[450px]">
              <div className="flex h-full w-full items-end justify-end p-[30px]">
                <div className="h-[40px] w-[40px] rounded-full border-2 border-[hsla(0,0%,100%,.5)] bg-[rgba(42,42,42,.6)]">
                  <div className="flex h-full items-center justify-center">
                    <Heart className="h-5" />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="p-5 md:p-10">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-[60%]">
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="mt-2 text-sm">{data.description}</p>
          </div>
          <div className="md:w-[40%]">
            <div>
              <h4 className="text-sm text-gray-400">Generós:</h4>
              <div className="mt-1 text-wrap text-sm">
                {data.genres
                  ? data.genres.map((genre, index) => (
                      <span key={genre}>
                        {genre}
                        {index + 1 < data.genres.length && ', '}
                      </span>
                    ))
                  : null}
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm text-gray-400">Elenco:</h4>
              <div className="mt-1 text-wrap text-sm">
                {data.stars
                  ? data.stars.map((star, index) => (
                      <span key={star}>
                        {star}
                        {index + 1 < data.stars.length && ', '}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
