import { fetchCategories } from '@/app/lib/data';
import Card from './card';

export default async function CardWrapper() {
  const categories = await fetchCategories();
  return (
    <>
      {categories?.map((category) => <Card key={category.id} {...category} />)}
    </>
  );
}
