"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";
import { Button } from "./button";
import { Icon } from "./icon";

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
            className="bg-gray-100 w-full p-4 mb-4 rounded-md"
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
            className="bg-gray-100 w-full p-4 mb-4 rounded-md"
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
              <Icon name="AlertCircle" className="h-5 w-5 text-red-500" />
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
