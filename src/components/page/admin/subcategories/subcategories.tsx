"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { getSubcategoryLimit } from "@/src/utils/services/data/getData";
import { DataTable } from "@/src/components/table/DataTable";
import { Row } from "@/src/config/interface";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/src/components/loading/loading";
import EditCategoryComponent from "./editComponent";
import AddCategory from "./addSubCategory";
import { editCategory } from "@/src/utils/services/data/editData";
import ShowCat from "./showCat";
import ModalSubCategories from "../modal/modalSubCat";
import AddSubCategory from "./addSubCategory";

const Subcategories = () => {
  // ----------------------------------------
  const [open, setOpen] = React.useState<boolean>(false);
  const [editData, setEditeData] = React.useState<null | {
    id: string;
    name: string;
    cat:string;
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
    queryKey: ["getSubcategoryLimit"],
    queryFn: async () => await getSubcategoryLimit(1, 5),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };

  const row = data?.data?.subcategories;
  console.log(data);
  const col = [
    {
      id: 1,
      label: "زیرمجموعه",
      renderCol: (row: Row) => row.name,
    },
    {
      id: 2,
      label: "دسته بندی",
      renderCol: (row: Row) =><ShowCat id={row.category}/>,
    },
    {
      id: 3,
      label: "",
      renderCol: (row: Row) => (
        <EditCategoryComponent row={row} onEdit={handleEditCategoryComponent} />
      ),
    },
  ];

  const handleEditCategoryComponent = async (id: string, name: string,cat:string) => {
    console.log(id);
    handleOpen();
    setEditeData({ id, name ,cat});
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
      <DataTable columns={col} rows={row} />
      <ModalSubCategories
        req={reqEditCategory}
        text="دسته بندی"
        onOpen={open}
        onClose={handleClose}
        onEdit={editData}
        queryKey={"getSubCategoryLimit"}
      />
    </Box>
  );
};

export default Subcategories;
