
import type { Metadata } from "next";
import HomeLayout from "@/src/components/page/home/home-layout/homeLayout";

export const metadata: Metadata = {
  title: "قوانین و مقررات فروشگاه مستر پی سی ",
  description: "Mr PC online shop",
};

export default function TermsLayout({
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
