import React from "react";
import InfoComponent from "./infoComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SocialMedia from "./socialMedia";

const FooterInfo = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Box sx={{ display: "flex", gap: 10 }}>
        <InfoComponent text="اطلاعات">
          <Typography>درباره مستر پی سی</Typography>
          <Typography>قوانین مستر پی سی</Typography>
        </InfoComponent>

        <InfoComponent text="پرسش‌های متداول">
          <Typography> شیوه ثبت سفارش </Typography>
          <Typography> شیوه پرداخت </Typography>
          <Typography> شیوه ارسال </Typography>
        </InfoComponent>

        <InfoComponent text="امکانات اضافی">
          <Typography> اسمبل هوشمند </Typography>
        </InfoComponent>

        <InfoComponent text="حساب کاربری من">
          <Typography> حساب کاربری من </Typography>
          <Typography> تاریخچه سفارش‌ها </Typography>
          <Typography> لیست دلخواه </Typography>
        </InfoComponent>
      </Box>
      <SocialMedia />
    </Box>
  );
};

export default FooterInfo;
