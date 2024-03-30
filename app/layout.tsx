import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import MainHeader from '../src/components/header/mainHeader';

export const metadata: Metadata = {
  title: "MR PC",
  description: "Mr PC online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl">
      <AppRouterCacheProvider>
        <MainHeader/>
        {children}
      </AppRouterCacheProvider>
        </body>
    </html>
  );
}
