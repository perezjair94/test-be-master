import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';
import NavLinks from './nav-links';

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-xl p-5 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h2 className="text-xl font-semibold text-teal-400">Movie App</h2>
          <div className="flex items-center gap-4">
            <NavLinks />
          </div>
        </div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="text-sm">
            <div className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </div>
          </button>
        </form>
      </div>
    </header>
  );
}
