"use client";
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const clerkPubKey =process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "fallback-key"

  if (!clerkPubKey || clerkPubKey === "fallback-key") {
    console.warn("Using fallback key. Check your environment variables.");}

  if (!clerkPubKey) {
    throw new Error('Clerk publishable key is missing. Please set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment variables.');
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
