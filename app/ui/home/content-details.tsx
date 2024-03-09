import { fetchMovie } from '@/app/lib/data';

type ContnetDetails = { movie: string };

export default async function ContentDetails({ movie }: ContnetDetails) {
  const data = await fetchMovie(movie);
  if (!data) return <span>Data not available</span>;
  return (
    <main className="mx-auto max-w-screen-xl overflow-hidden">
      <div>
        {data.video ? (
          <video
            className="h-200px relative w-full object-cover object-center md:h-[450px]"
            src={data.video}
            autoPlay
            loop
          />
        ) : null}
      </div>
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
