import Categories from '@/app/ui/home/categories';
import ContentCategory from '@/app/ui/home/content-category';

export default function Page() {
  return (
    <main className="px-[50px]">
      <div className="mx-auto h-[120px] w-full max-w-screen-xl rounded-[20px] bg-gray-100" />
      <Categories />
      <ContentCategory />
    </main>
  );
}
