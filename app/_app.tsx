"use client";
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  console.log('Clerk Publishable Key:', clerkPubKey);


  if (!clerkPubKey) {
    console.error(
      'Clerk publishable key is missing. Please set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment variables.'
    );
    return <div>Error: Missing Clerk publishable key.</div>; // Fallback UI
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
