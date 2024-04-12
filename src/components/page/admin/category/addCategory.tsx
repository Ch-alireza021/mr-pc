import React from "react";
import Button from "@mui/material/Button";
import { red } from "@/src/theme/theme";
import AddIcon from "@mui/icons-material/Add";
import { creatCat } from "@/src/utils/services/data/creatData";
import ModalCategories from "../modal/modalCat";

const AddCategory = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  // ----------------------------------------
  //                  MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const reqCategory = async (inputCategory: string) => {
    const res = await creatCat(inputCategory);
    return res;
  };
  // ---------------------------------------------
  return (
    <>
      <Button
        color="success"
        variant="contained"
        sx={{ background: red, color: "white", paddingX: "20px" }}
        endIcon={<AddIcon />}
        onClick={handleOpen}
      >
        اضافه کردن
      </Button>
      <ModalCategories
        req={reqCategory}
        text="دسته بندی"
        onOpen={open}
        onClose={handleClose}
        queryKey={"getCategoryLimit"}
        onEdit={null}
      />
    </>
  );
};

export default AddCategory;
