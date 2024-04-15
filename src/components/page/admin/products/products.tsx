"use client";
import Loading from "@/src/components/loading/loading";
import { Row } from "@/src/config/interface";
import {
  URL_CATEGORY,
  URL_SUBCATEGORY,
} from "@/src/config/url";
import { getProducts } from "@/src/utils/services/data/getData";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Typography from "@mui/material/Typography";
import { DataTable } from "@/src/components/table/DataTable";

import { Box } from "@mui/material";
import ShowCategoryName from "./showCategoryName";
import ImageComponent from "./image";
import HoverReveal from "@/src/components/table/hoverReveal";
import { tabaleLimit } from "@/src/utils/services/generalFunc/generalFunction";

const Products = () => {

  const limit = tabaleLimit()
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
      renderCol: (row: Row) => <ImageComponent row={row} />,
    },
    {
      id: 2,
      label: "نام کالا",
      renderCol: (row: Row) => <HoverReveal> {row.name} </HoverReveal>,
    },
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
    {
      id: 5,
      label: " قیمت",
      renderCol: (row: Row) => <HoverReveal>{row.price}</HoverReveal>,
    },
    {
      id: 6,
      label: " موجودی",
      renderCol: (row: Row) => <HoverReveal>{row.quantity}</HoverReveal>,
    },
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
