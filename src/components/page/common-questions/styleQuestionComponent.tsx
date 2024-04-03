"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import theme from "@/src/theme/theme";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";

const QuestionComponent = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: isOpen ? theme.palette.secondary.main : "inherit",
          cursor: "pointer",
          minWidth: "110px",
          fontSize: "20px",
          paddingY: "10px",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Typography variant="h5">{text}</Typography>
        {isOpen ? <KeyboardArrowDownIcon /> : <ChevronLeftIcon />}
      </Box>
      <Collapse in={isOpen}>
        <Box paddingLeft={"20px"} paddingY={"10px"}>
          {children}
        </Box>
      </Collapse>
      <Divider />
    </Box>
  );
};

export default QuestionComponent;
