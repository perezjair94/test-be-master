import Card from './card';
import { fetchCategories } from '@/app/lib/data';

export default async function Categories() {
  const categories = await fetchCategories();
  if (!categories || categories.length === 0)
    return <p className="mt-4 text-gray-400">No data available.</p>;
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="mt-[30px] grid grid-cols-2 gap-4 md:grid-cols-5">
        {categories.map((category) => (
          <Card key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
