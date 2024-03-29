import { favouriteMovies, movies } from '@/app/lib/placeholder-data';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const movie = movies.find((movie) => movie.id === params.id);
  const isFavourite = movie ? favouriteMovies.includes(movie.id) : false;
  return Response.json({ ...movie, isFavourite });
}
