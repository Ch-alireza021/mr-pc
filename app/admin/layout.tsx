import type { Metadata } from "next";
import ThemeLayout from "@/src/theme/themeLayout";
import Layout from "@/src/components/page/admin/adminLayout";
import Typography from "@mui/material/Typography";

// export const metadata: Metadata = {
//   title: "لذت بازی با مستر پی سی",
//   description: "Mr PC online shop",
// };

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div>
        <header>is it admin</header>
        <main>{children}</main>
      </div>
    </Layout>
  );
}
