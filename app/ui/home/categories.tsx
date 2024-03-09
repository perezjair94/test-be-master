import Card from './card';
import { fetchCategories } from '@/app/lib/data';

export default async function Categories() {
  const categories = await fetchCategories();
  if (!categories || categories.length === 0)
    return <span>No available data</span>;
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="mt-[30px] grid grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}
