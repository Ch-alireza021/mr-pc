import styled from "@emotion/styled";
import React, { useState } from "react";
import { Box } from "@mui/material";

const CustomBox = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

const Text = styled.div`
  word-wrap: none;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 999;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  white-space: nowrap;
`;

const HoverReveal = (props: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CustomBox
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <Text> {props.children}</Text>}
      <Box
        sx={{ overflow: "hidden", textOverflow: "ellipsis", width: " 100px" }}
      >
        {props.children}
      </Box>
    </CustomBox>
  );
};

export default HoverReveal;
