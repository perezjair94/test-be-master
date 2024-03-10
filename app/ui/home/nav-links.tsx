'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'Movies',
    href: '/home/movies',
  },
  {
    name: 'My List',
    href: '/home/my-list',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('', {
              'font-bold': pathname === link.href,
            })}
          >
            <p className="text-sm">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
