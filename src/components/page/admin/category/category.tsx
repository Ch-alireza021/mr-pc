"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { getCategoryLimit } from "@/src/utils/services/data/getData";
import { DataTable } from "@/src/components/table/DataTable";
import { Row } from "@/src/config/interface";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/src/components/loading/loading";
import EditCategoryComponent from "./editComponent";
import AddCategory from "./addCategory";
import ModalCategories, { ICategories } from "../modal/modalCat";
import { editCategory } from "@/src/utils/services/data/editData";

const Category = () => {
  // ----------------------------------------
  const [open, setOpen] = React.useState<boolean>(false);
  const [editData, setEditeData] = React.useState<null | {
    id: string;
    name: string;
  }>(null);

  //                  MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const reqEditCategory = async (name: string, id: string | null) => {
    if (id) {
      const res = await editCategory(name, id);
      console.log(res);
      return res;
    }
  };
  // ---------------------------------------------

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCategoryLimit"],
    queryFn: async () => await getCategoryLimit(1, 5),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };

  const row = data?.data?.categories;
  console.log(data);
  const col = [
    {
      id: 1,
      label: "دسته بندی",
      renderCol: (row: Row) => row.name,
    },
    {
      id: 2,
      label: "",
      renderCol: (row: Row) => (
        <EditCategoryComponent row={row} onEdit={handleEditCategoryComponent} />
      ),
    },
  ];

  const handleEditCategoryComponent = async (id: string, name: string) => {
    console.log(id);
    handleOpen();
    setEditeData({ id, name });
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
        <AddCategory />
      </Box>
      <DataTable columns={col} rows={row} />
      <ModalCategories
        req={reqEditCategory}
        text="دسته بندی"
        onOpen={open}
        onClose={handleClose}
        onEdit={editData}
        queryKey={"getCategoryLimit"}
      />
    </Box>
  );
};

export default Category;
