import React from "react";
import Box from "@mui/material/Box";
import FooterHeader from "./header/footerHeader";
import FooterInfo from "./info/footerInfo";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingX: "20px",
      }}
    >
      <Divider variant="middle" />
      <FooterHeader />
      <FooterInfo />
      <Typography textAlign={"center"} >کلیه حقوق این وب‌سایت متعلق به شرکت  ..... </Typography>
    </Box>
  );
};

export default Footer;
