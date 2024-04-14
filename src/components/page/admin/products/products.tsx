"use client";
import Loading from "@/src/components/loading/loading";
import { Row } from "@/src/config/interface";
import { URL_BACKEND_THUMBNAILS, URL_CATEGORY, URL_SUBCATEGORY } from "@/src/config/url";
import { getProducts } from "@/src/utils/services/data/getData";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import { DataTable } from "@/src/components/table/DataTable";

import { Box } from "@mui/material";
import ShowCategoryName from "./showCategoryName";

const Products = () => {
  const heigh = document.documentElement.offsetHeight;
  const limit = Math.floor((heigh - 250) / 70);
  const [page, setPage] = React.useState(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  // ----------------------------------------
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getProducts", page],
    queryFn: async () => await getProducts(page, limit),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };
  const row = data?.data?.products;

  // --------------------------------------------------

  const col = [
    {
      id: 1,
      label: "تصویر کالا",
      renderCol: (row: Row) =>
        // <Image src={`${URL_BACKEND_THUMBNAILS}${row.thumbnail}`} alt={row.name} width={50} height={50} />
        row.name,
    },
    { id: 2, label: "نام کالا", renderCol: (row: Row) => row.name },
    {
      id: 3,
      label: " دسته بندی",
      renderCol: (row: Row) => (
        <ShowCategoryName URL={URL_CATEGORY} id={row.category} />
      ),
    },
    {
      id: 4,
      label: "  زیر مجموعه",
      renderCol: (row: Row) => (
        <ShowCategoryName URL={URL_SUBCATEGORY} id={row.subcategory} />
      ),
    },
    { id: 5, label: " قیمت", renderCol: (row: Row) => row.price },
    { id: 6, label: " موجودی", renderCol: (row: Row) => row.quantity },
  ];
  console.log(data);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignitems: "center",
          paddingBottom: "20px",
          paddingX: "20px",
        }}
      >
        <Typography variant="h5" fontWeight={900}>
          دسته بندی
        </Typography>
      </Box>
      <DataTable
        columns={col}
        rows={row}
        page={data?.page}
        totalPage={data?.total_pages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default Products;
