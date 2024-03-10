'use client';

import { FC, ReactNode, createContext, useContext } from 'react';
import { useToggle } from 'usehooks-ts';

type Menu = { open: boolean; onToggle: () => void };

const MenuContext = createContext<Menu>({ open: false, onToggle: () => {} });

export const useMenu = () => useContext(MenuContext);

export const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, onToggle] = useToggle();
  return (
    <MenuContext.Provider value={{ open, onToggle }}>
      {children}
    </MenuContext.Provider>
  );
};
