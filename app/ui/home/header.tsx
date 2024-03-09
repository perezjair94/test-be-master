import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-xl p-5 md:px-10">
      <div className="flex justify-between">
        <h2 className="font-semibold">Movie App</h2>
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
