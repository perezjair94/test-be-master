import { ReactNode } from 'react';
import Header from '@/app/ui/home/header';

export default function Layout({
  children,
  details,
}: {
  children: ReactNode;
  details: ReactNode;
}) {
  return (
    <div>
      <Header />
      {details}
      {children}
    </div>
  );
}
