"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLoginRole } from "@/src/utils/cookies";
import { ROUTE } from "@/src/config/route";
import Box from "@mui/material/Box";
import Loading from "../../loading/loading";
import AdminHeader from "./side-bar/sideBar";
import ReactQueryProvider from "@/src/utils/reactQuery/reactQuery";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [login, setIsLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const isLogin = getLoginRole();
    setIsLogin(isLogin === "ADMIN" ? true : false);
    setLoading(false);
  }, []);
  if (!login && !loading) {
    console.log(login);
    useRouter().replace(ROUTE.LOGIN);
    return;
  }

  return (
    <Box
      sx={{
        background: "rgb(214 213 201)",
        minHeight: "100vh",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <Box sx={{ width: "100%" }}>
         
            <AdminHeader>{children}</AdminHeader>
     
        </Box>
      )}
    </Box>
  );
}
