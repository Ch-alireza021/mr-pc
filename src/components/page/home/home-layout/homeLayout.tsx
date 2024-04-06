"use client";
import MainHeader from "@/src/components/header/main-header/mainHeader";
import Footer from "@/src/components/footer/footer";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
