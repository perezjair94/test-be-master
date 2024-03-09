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
    <main className="px-[50px]">
      <div className="mx-auto h-[120px] w-full max-w-screen-xl rounded-[20px] bg-gray-100" />
      <Categories />
      <ContentCategory category={category} movies={movies || []} />
    </main>
  );
}
