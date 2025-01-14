'use client'

import { CandidatesProvider } from '@/context/candidatesContext';

// ...existing code...

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CandidatesProvider>
      <Component {...pageProps} />
    </CandidatesProvider>
  );
}

export default MyApp;
