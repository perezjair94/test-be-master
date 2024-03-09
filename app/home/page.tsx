import Categories from '@/app/ui/home/categories';
import ContentCategory from '@/app/ui/home/content-category';
import { fetchHomeData } from '../lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string | string[] };
}) {
  const { category, movies } = await fetchHomeData(
    searchParams.category as string,
  );
  return (
    <main className="px-[10px] md:px-[50px]">
      <div className="mx-auto h-[225px] w-full max-w-screen-xl rounded-lg bg-[url(https://cdn.marvel.com/content/1x/deadpool_poster_mh_desk_2_0.jpg)] bg-cover bg-center" />
      <Categories />
      <ContentCategory category={category} movies={movies || []} />
    </main>
  );
}
