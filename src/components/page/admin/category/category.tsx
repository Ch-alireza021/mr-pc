"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  getCategoryLimit,
} from "@/src/utils/services/data/getData";
import { DataTable } from "@/src/components/table/DataTable";
import { Row } from "@/src/config/interface";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/src/components/loading/loading";
import EditCategoryComponent from "./editComponent";
import AddCategory from "./addCategory";

const Category = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCategoryLimit"],
    queryFn: async () => await getCategoryLimit(1, 5),
  });
  if (isLoading) return <Loading/>
  if (isError) return {isError}
  const row = data?.data?.categories;
  console.log(data);
  const col = [
    {
      id: 1,
      label: "دسته بندی",
      renderCol: (row:Row) => row.name,
    },
    {
      id: 2,
      label: "",
      renderCol: (row:Row) => <EditCategoryComponent row={row} onclick={handleEditCategoryComponent} />,
    },

  ];

  const handleEditCategoryComponent=()=>{

  }


  return (
    <Box>
      <Box sx={{display:"flex",justifyContent:"space-between",alignitems:"center",paddingBottom:"20px",paddingX:"20px"}}>
      <Typography
        variant="h5"
        fontWeight={900}
      >
        دسته بندی
      </Typography>
      <AddCategory/>
      </Box>
      <DataTable columns={col} rows={row} />
    </Box>
  );
};

export default Category;
