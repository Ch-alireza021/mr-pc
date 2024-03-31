import type { Metadata } from "next";
import ThemeLayout from "@/src/theme/themeLayout";
import MainHeader from "@/src/components/header/main-header/mainHeader";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "لذت بازی با مستر پی سی",
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
          <Footer/>
        </ThemeLayout>
      </body>
    </html>
  );
}
