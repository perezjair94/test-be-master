'use client';

import LoginForm from '@/app/ui/login-form';

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center bg-[url(/background.jpg)] bg-cover bg-no-repeat text-black">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 rounded-[20px] bg-white p-10">
        <h2 className="w-32 text-2xl font-bold md:w-36">Movie App</h2>
        <p className="text-sm">
          Log into your Marvel account. If you do not have one, you will be
          prompted to create one.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
