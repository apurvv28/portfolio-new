// app/layout.jsx
'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import BackgroundProvider from './BackgroundProvider';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust this time based on your actual loading needs

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {isLoading && <LoadingScreen />}
        {!isLoading && (
          <BackgroundProvider>
            {children}
          </BackgroundProvider>
        )}
      </body>
    </html>
  );
}