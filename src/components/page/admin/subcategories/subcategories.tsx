"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { getSubcategoryLimit } from "@/src/utils/services/data/getData";
import { DataTable } from "@/src/components/table/DataTable";
import { Row } from "@/src/config/interface";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/src/components/loading/loading";
import { editSubCategory } from "@/src/utils/services/data/editData";
import ShowCat from "./showCat";
import ModalSubCategories from "../modal/modalSubCat";
import AddSubCategory from "./addSubCategory";
import EditSubCategoryComponent from "./editComponent";

const Subcategories = () => {
  // ----------------------------------------
  const [open, setOpen] = React.useState<boolean>(false);
  const [editData, setEditeData] = React.useState<null | {
    id: string;
    name: string;
    cat: string;
  }>(null);

  //                  MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const reqEditSubCategory = async (
    name: string,
    cat: string,
    id: string | null
  ) => {
    if (id) {
      const res = await editSubCategory(name, cat, id);
      return res;
    }
  };
  // ---------------------------------------------
  const heigh = document.documentElement.offsetHeight;
  const limit = Math.floor((heigh - 230) / 70);
  const [page, setPage] = React.useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getSubcategoryLimit", page],
    queryFn: async () => await getSubcategoryLimit(page, limit),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };

  const row = data?.data?.subcategories;
  const col = [
    {
      id: 1,
      label: "زیرمجموعه",
      renderCol: (row: Row) => row.name,
    },
    {
      id: 2,
      label: "دسته بندی",
      renderCol: (row: Row) => <ShowCat id={row?.category} />,
    },
    {
      id: 3,
      label: "",
      renderCol: (row: Row) => (
        <EditSubCategoryComponent row={row} onEdit={handleEditCategoryComponent} />
      ),
    },
  ];

  const handleEditCategoryComponent = async (
    id: string,
    name: string,
    cat: string
  ) => {
    console.log(id);
    handleOpen();
    setEditeData({ id, name, cat });
  };
  const handlePageChange = (page: number) => {
    setPage(page);
  };

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
        <AddSubCategory />
      </Box>
      <DataTable
        columns={col}
        rows={row}
        page={data?.page}
        totalPage={data?.total_pages}
        onPageChange={handlePageChange}
      />
      <ModalSubCategories
        req={reqEditSubCategory}
        text="دسته بندی"
        onOpen={open}
        onClose={handleClose}
        onEdit={editData}
        queryKey={"getSubcategoryLimit"}
      />
    </Box>
  );
};

export default Subcategories;
