'use client';
import { ComponentProps, ReactNode, useRef } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useOnClickOutside } from 'usehooks-ts';
import { X } from 'lucide-react';

export type ModalProps = ComponentProps<'div'> & { children: ReactNode };

export default function Modal({ className, children, ...props }: ModalProps) {
  const router = useRouter();
  const ref = useRef(null);
  const handleClose = () => router.back();
  useOnClickOutside(ref, handleClose);
  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-y-auto bg-black bg-opacity-70">
      <div
        ref={ref}
        className={clsx(
          'relative mx-auto my-[30px] flex w-[90%] flex-col overflow-hidden rounded-lg bg-[#141414] text-white shadow-lg transition-all motion-safe:animate-[appear_0.2s_ease-in-out_0s] xl:w-[60%] xl:max-w-[50.375rem]',
          className,
        )}
        {...props}
      >
        <button
          className="absolute right-[10px] top-[10px] z-50 cursor-pointer rounded-full bg-[#141414] p-2 focus:outline-2 focus:outline-white md:right-[30px] md:top-[30px]"
          onClick={handleClose}
        >
          <X />
        </button>
        {children}
      </div>
      <style>{`body { overflow: hidden }`}</style>
    </div>
  );
}
