import Footer from "@/src/components/footer/footer";
import MainHeader from "@/src/components/header/main-header/mainHeader";
import type { Metadata } from "next";
import HomeLayout from "@/src/components/page/home/home-layout/homeLayout";

export const metadata: Metadata = {
  title: "درباره فروشگاه مستر پی سی",
  description: "Mr PC online shop",
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeLayout>{children}</HomeLayout>
    </>
  );
}
