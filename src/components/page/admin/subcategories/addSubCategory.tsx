import React from "react";
import Button from "@mui/material/Button";
import { red } from "@/src/theme/theme";
import AddIcon from "@mui/icons-material/Add";
import { creatSubCat } from "@/src/utils/services/data/creatData";
import ModalSubCategories from "../modal/modalSubCat";

const AddSubCategory = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  // ----------------------------------------
  //                  MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const reqSubCategory = async (name: string,cat:string) => {
    const res = await creatSubCat(name,cat);
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
      <ModalSubCategories
        req={reqSubCategory}
        text="زیرمجموعه"
        onOpen={open}
        onClose={handleClose}
        queryKey={"getSubCategoryLimit"}
        onEdit={null}
      />
    </>
  );
};

export default AddSubCategory;
