import type { Metadata } from "next";
import ThemeLayout from "@/src/theme/themeLayout";
import ReactQueryProvider from "@/src/utils/reactQuery/reactQuery";

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
        <ReactQueryProvider>
          <ThemeLayout>{children}</ThemeLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
