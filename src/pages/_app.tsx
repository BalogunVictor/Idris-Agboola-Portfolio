import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import StoreProvider from '../store';
import CustomCursor from '../ui/molecules/customCursor';
import { SnackbarProvider } from 'notistack';

import ThemeWrapper from '../assets/theme';
import '../assets/css/app.css';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import SEO from '../ui/molecules/seo';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <ThemeWrapper>
          <CustomCursor />
          <SEO />
          <SnackbarProvider
            autoHideDuration={6000}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeWrapper>
      </CacheProvider>
    </StoreProvider>
  );
}
