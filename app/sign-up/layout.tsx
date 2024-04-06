
import type { Metadata } from "next";
import HomeLayout from "@/src/components/page/home/home-layout/homeLayout";

export const metadata: Metadata = {
  title: "ثبت نام در فروشگاه مستر پی سی",
  description: "Mr PC online shop",
};

export default function SignUpLayout({
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
