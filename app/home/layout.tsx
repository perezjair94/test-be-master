import { ReactNode } from 'react';
import Header from '@/app/ui/home/header';
import { MenuProvider } from '../lib/context';

export default function Layout({
  children,
  details,
}: {
  children: ReactNode;
  details: ReactNode;
}) {
  return (
    <MenuProvider>
      <div>
        <Header />
        {details}
        {children}
      </div>
    </MenuProvider>
  );
}
