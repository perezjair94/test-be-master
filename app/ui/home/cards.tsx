import { fetchCategories } from '@/app/lib/data';
import { Category } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';

type CategoryProps = Category & { active: boolean };

function Card({ active, name, image }: CategoryProps) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all hover:ring hover:ring-yellow-500 hover:ring-offset-2">
      <Image
        src={image}
        alt="category-image"
        className={clsx(
          'absolute object-cover brightness-[60%]  group-hover:scale-125',
          active
            ? 'scale-125 grayscale-0'
            : 'grayscale group-hover:grayscale-0',
        )}
        fill
      />
      <div className="relative flex h-[120px] items-center justify-center">
        <span className="block text-center font-bold leading-tight text-white drop-shadow-md">
          {name}
        </span>
      </div>
    </div>
  );
}

export default async function CardWrapper() {
  const categories = await fetchCategories();
  return (
    <>
      {categories?.map((category) => (
        <Card
          key={category.id}
          active={Boolean(
            category.id === 'c1b97fc5-0f0b-4f17-aae8-7e5418a92a3f',
          )}
          {...category}
        />
      ))}
    </>
  );
}
