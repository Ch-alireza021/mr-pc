
import type { Metadata } from "next";
import HomeLayout from "@/src/components/page/home/home-layout/homeLayout";

export const metadata: Metadata = {
  title: "ورود به حساب کاربری فروشگاه مستر پی سی",
  description: "Mr PC online shop",
};

export default function LoginLayout({
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