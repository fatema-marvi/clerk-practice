"use client";
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const clerkPubKey ="=pk_test_dW5pZmllZC1rb2ktNDUuY2xlcmsuYWNjb3VudHMuZGV2JA";

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
