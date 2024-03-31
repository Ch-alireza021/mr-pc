"use client";
import React from "react";
import { CustomCardHeader, CustomBox } from "./styleProductCard";
import Image from "next/image";
import image from "@/public/Nacon-Revolution-5-Pro-White-Black-1-300x300.jpg"
import Typography from '@mui/material/Typography';

const ProductCard = () => {
    const price="1100000000"
  return (
    <CustomBox>
      <CustomCardHeader />
      <Image src={image} alt="" width={209} height={209}/>
      <Typography  component="div" sx={{height:"71px",textAlign:"center"}} >
      دسته بازی Nacon Revolution 5 Pro - White/Black
      </Typography>
      <Typography  component="div" textAlign={"center"}>
        {price.toLocaleString()} تومان
      </Typography>
    </CustomBox>
  );
};

export default ProductCard;
