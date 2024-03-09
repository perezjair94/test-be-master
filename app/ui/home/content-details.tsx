import { fetchMovie } from '@/app/lib/data';

type ContnetDetails = { movie: string };

export default async function ContentDetails({ movie }: ContnetDetails) {
  const data = await fetchMovie(movie);
  if (!data) return <span>Data not available</span>;
  return (
    <main className="mx-auto max-w-screen-xl">
      <div>
        {data.video ? (
          <video
            className="relative h-[450px] w-full object-cover object-center"
            src={data.video}
            autoPlay
            loop
          />
        ) : null}
      </div>
      <div className="p-10">
        <div className="flex gap-10">
          <div className="w-[60%]">
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="mt-2 text-sm">{data.description}</p>
          </div>
          <div className="w-[40%]">
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
