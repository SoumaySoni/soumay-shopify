'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Save token securely (ideally HTTP-only cookies in prod, localStorage for starting)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/login-bg.png"
          alt="Login Background"
          fill
          priority
          quality={100}
          className="object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-0" />

      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px] pointer-events-none z-0 mix-blend-screen" />

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-12 mx-4 overflow-hidden rounded-[2rem] bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-900/20">
        <div className="mb-10 text-center">
          <Link href="/">
            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 hover:opacity-80 transition-opacity inline-block">
              Soumay
            </h1>
          </Link>
          <p className="mt-3 text-sm text-zinc-400 font-medium">Welcome back, log in to continue.</p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded bg-red-500/10 border border-red-500/50 text-red-400 text-sm font-medium text-center">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-semibold text-zinc-300">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-white/5 text-white placeholder-zinc-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ease-in-out sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between pointer-events-auto">
              <label htmlFor="password" className="block text-sm font-semibold text-zinc-300">
                Password
              </label>
              <Link href="#" className="font-semibold text-xs text-purple-400 hover:text-purple-300 transition-colors">
                Forgot password?
              </Link>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-white/5 text-white placeholder-zinc-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ease-in-out sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center pt-2">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 bg-zinc-800/50 border-white/10 rounded text-purple-500 focus:ring-purple-500/50"
            />
            <label htmlFor="remember-me" className="ml-3 block text-sm text-zinc-400">
              Remember me for 30 days
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 mt-1 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                {isLoading ? 'Signing in...' : 'Sign in to account'}
                {!isLoading && (
                  <svg className="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                )}
              </span>
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-white hover:text-purple-300 transition-colors">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
