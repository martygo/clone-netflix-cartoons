import React, { MutableRefObject } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const email = React.useRef() as MutableRefObject<HTMLInputElement>;
  const password = React.useRef() as MutableRefObject<HTMLInputElement>;

  const { signup } = useAuth();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      return await signup(email.current?.value, password.current?.value);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input ref={email} type="email" placeholder="email" />
        <input ref={password} type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
