"use client";
import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";
import theme from "@/src/theme/theme";
import GitHubIcon from '@mui/icons-material/GitHub';
// ---------------------------------------------
//               INTERFACE
interface ISocialMediaComponent {
  children: React.ReactNode;
  text: string;
}
// ---------------------------------------------
//            SocialMediaComponent
const SocialMediaComponent = ({ children, text }: ISocialMediaComponent) => {
  const [isHover, setIshover] = useState(false);
  return (
    <Box
      component={"div"}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      position={"relative"}
    >
      {isHover && (
        <Typography
          sx={{
            background: theme.palette.secondary.main,
            color: "white",
            paddingX: "10px",
            paddingY: "5px",
            borderRadius: "5px",
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translate(-50%)",
            textWrap:"nowrap"
          }}
        >
          {text}
        </Typography>
      )}
      {children}
    </Box>
  );
};
// ---------------------------------------------
//                 SocialMedia

const SocialMedia = () => {
  const style = {
    "&.MuiIconButton-root:hover": {
      color: theme.palette.secondary.main,
    },
  };
  // -------------------
  const linkedin = "https://www.linkedin.com/in/alireza-chizari-8b04542aa/";
  const instageram = "https://www.instagram.com/mr.sasaaan";
  const telegram = "https://t.me/mr_sasaaan";
  const gitHub="https://github.com/Ch-alireza021/mr-pc"
  // -------------------
  return (
    <Box sx={{ display: "flex" }}>
      <SocialMediaComponent text="گیت هاب">
        <IconButton href={gitHub} target="_blank" sx={style}>
          <GitHubIcon />
        </IconButton>
      </SocialMediaComponent>

      <SocialMediaComponent text="لینکدین">
        <IconButton href={linkedin} target="_blank" sx={style}>
          <LinkedInIcon />
        </IconButton>
      </SocialMediaComponent>

      <SocialMediaComponent text="اینستاگرام">
        <IconButton href={instageram} target="_blank" sx={style}>
          <InstagramIcon />
        </IconButton>
      </SocialMediaComponent>

      <SocialMediaComponent text="تلگرام">
        <IconButton href={telegram} target="_blank" sx={style}>
          <TelegramIcon />
        </IconButton>
      </SocialMediaComponent>
    </Box>
  );
};

export default SocialMedia;
