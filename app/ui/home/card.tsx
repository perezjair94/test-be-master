'use client';

import { Category } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Card({ id, name, image }: Category) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const active = Boolean(category === id);
  return (
    <Link href={`/home?category=${id}`} scroll={false}>
      <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all hover:ring hover:ring-white/90 hover:ring-offset-2 hover:ring-offset-[#141414]">
        <Image
          src={image}
          alt="category-image"
          className={clsx(
            'absolute object-cover transition-all group-hover:scale-125',
            active
              ? 'scale-125 brightness-75 grayscale-0'
              : 'brightness-50 grayscale group-hover:brightness-75 group-hover:grayscale-0',
          )}
          fill
        />
        <div className="relative flex h-[120px] items-center justify-center">
          <span className="block text-center font-bold leading-tight text-white drop-shadow-md">
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
}
