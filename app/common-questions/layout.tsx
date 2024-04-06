import type { Metadata } from "next";
import HomeLayout from "@/src/components/page/home/home-layout/homeLayout";

export const metadata: Metadata = {
  title: " پرسش های متداول",
  description: "Mr PC online shop",
};

export default function CommonQuestionsLayout({
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
