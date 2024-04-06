import type { Metadata } from "next";
import ThemeLayout from "@/src/theme/themeLayout";

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
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
