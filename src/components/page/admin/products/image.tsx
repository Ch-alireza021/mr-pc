import { Row } from "@/src/config/interface";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { URL_BACKEND_THUMBNAILS } from "@/src/config/url";

const CustomBox = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

const ImageBox = styled.div`
  word-wrap: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, -50%);
  z-index: 999;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  white-space: nowrap;
`;

const ImageComponent = ({ row }: { row: Row }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CustomBox
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <ImageBox>
          <img
            src={URL_BACKEND_THUMBNAILS + row.thumbnail}
            width={200}
            height={200}
            alt={row.name}
          />
        </ImageBox>
      )}
      <Box
        sx={{ overflow: "hidden", ImageBoxOverflow: "ellipsis", width: " 100px" }}
      >
        <img
          src={URL_BACKEND_THUMBNAILS + row.thumbnail}
          width={30}
          height={30}
          alt={row.name}
        />
      </Box>
    </CustomBox>
  );
};

export default ImageComponent;
