"use client";
import React from "react";
import InfoComponent from "./infoComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialMedia from "./socialMedia";
import Link from "next/link";
import { ROUTE } from "@/src/config/route";
import styled from "@emotion/styled";

// ------------------------------------------
//                 style
const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #03c03c;
  }
`;
// ------------------------------------------

const FooterInfo = () => {
    // const href=usePa
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: 10 }}>
        <InfoComponent text="اطلاعات">
          <CustomLink href={ROUTE.ABOUT_US} >درباره مستر پی سی</CustomLink>
          <CustomLink href={ROUTE.TERMS}>قوانین مستر پی سی</CustomLink>
        </InfoComponent>

        <InfoComponent text="پرسش‌های متداول">
          <CustomLink href={ROUTE.COMMON_QUESTION}> شیوه ثبت سفارش </CustomLink>
          <CustomLink href={ROUTE.COMMON_QUESTION}> شیوه پرداخت </CustomLink>
          <CustomLink href={ROUTE.COMMON_QUESTION}> شیوه ارسال </CustomLink>
        </InfoComponent>

        <InfoComponent text="امکانات اضافی">
          <Typography> اسمبل هوشمند </Typography>
        </InfoComponent>

        <InfoComponent text="حساب کاربری من">
          <CustomLink href={ROUTE.LOGIN}> حساب کاربری من </CustomLink>
          <CustomLink href={ROUTE.LOGIN}> تاریخچه سفارش‌ها </CustomLink>
          <CustomLink href={ROUTE.LOGIN}> لیست دلخواه </CustomLink>
        </InfoComponent>
      </Box>
      <SocialMedia />
    </Box>
  );
};

export default FooterInfo;
