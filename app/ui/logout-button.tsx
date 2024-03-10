import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';
import { logout } from '../lib/actions';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button className="text-sm">
        <div className="flex items-center gap-2">
          <LogOut className="h-5 w-5" />
          <span className="hidden md:inline-block">Sign Out</span>
        </div>
      </button>
    </form>
  );
}
