import { Movie } from '@/app/lib/definitions';
import { favouriteMovies, movies } from '@/app/lib/placeholder-data';

export async function GET() {
  const favourites =
    movies.filter((movie) => favouriteMovies.includes(movie.id)) || [];
  return Response.json(favourites);
}
