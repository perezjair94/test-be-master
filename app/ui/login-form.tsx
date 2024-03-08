'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../lib/actions';
import { Button } from './button';
import { AlertCircle } from 'lucide-react';

export default function LoginForm() {
  const [errorMessage, dispath] = useFormState(authenticate, undefined);
  return (
    <div>
      <form action={dispath}>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="mb-4 w-full rounded-md bg-gray-100 p-4"
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
            className="mb-4 w-full rounded-md bg-gray-100 p-4"
            minLength={6}
          />
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return <Button aria-disabled={pending}>Log In</Button>;
}
