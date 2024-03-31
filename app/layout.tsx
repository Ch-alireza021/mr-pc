import type { Metadata } from "next";
import ThemeLayout from "@/src/theme/themeLayout";
import MainHeader from "@/src/components/header/main-header/mainHeader";

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
      <body>
        <ThemeLayout>
          <MainHeader />
          {children}
        </ThemeLayout>
      </body>
    </html>
  );
}
