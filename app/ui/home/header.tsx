'use client';

import NavLinks from './nav-links';
import clsx from 'clsx';
import LogoutButton from '@/app/ui/logout-button';
import { Menu } from 'lucide-react';
import { useMenu } from '@/app/lib/context';

export default function Header() {
  const { open, onToggle } = useMenu();
  return (
    <header className="mx-auto max-w-screen-xl p-5 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-10">
          <Menu className="md:hidden" onClick={onToggle} />
          <h2 className="font-semibold text-orange-500 md:text-xl">
            Movie App
          </h2>
          <div
            className={clsx(
              open
                ? 'absolute inset-0 top-[66px] z-50 h-full w-full bg-black/40 motion-safe:animate-[dispel_0.2s_ease-in-out_0s]'
                : 'hidden md:inline-block',
            )}
          >
            <div className="flex h-full w-[70%] flex-col gap-2 bg-[#141414] px-[20px] motion-safe:animate-[slide-right_0.2s_ease-in-out_0s] md:w-auto md:flex-row md:items-center md:gap-4">
              <NavLinks />
            </div>
          </div>
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}
