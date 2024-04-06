import type { Metadata } from "next";
import ThemeLayout from "@/src/theme/themeLayout";
import Layout from "@/src/components/page/admin/adminLayout";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "  پنل ادمین مستر پی سی",
  description: "Mr PC online shop",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
