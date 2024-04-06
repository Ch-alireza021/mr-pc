"use client";
import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from '@mui/material/Box';
import styled from '@emotion/styled/macro';

// --------------------------------------------------------
//                     INTERFACE
interface ICustomListItem {
  children: React.ReactNode;
  href: string;
  text: string;
}
// --------------------------------------------------------
//                     COMPONENT

const CustomListItem = ({ children, href, text }: ICustomListItem) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (

    <ListItemButton
      sx={{
        display: "flex",
        gap: "8px",
      }}
      href={href}
      disableRipple
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ListItemIcon sx={{ color: isHover ? "#03c03c" : "inherit" }}>
        {children}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default CustomListItem;
