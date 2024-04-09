import React, { useState } from "react";
import Button from "@mui/material/Button";
import { red } from "@/src/theme/theme";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { creatCat } from "@/src/utils/services/data/creatData";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,
};

const AddCategory = () => {
  const [open, setOpen] = React.useState(false);
  const [inputCategory, setInputcategory] = useState<string | null>(null);
  const [helpertext, sethelpertext] = useState<string | null>(null);
  // ----------------------------------------
  const handleEdite=()=>{

  }
  // ----------------------------------------
  //                  MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    sethelpertext(null);
  };

  const handleSubmit = async () => {
    if (inputCategory) {
      const res = await creatCat(inputCategory);
      console.log(res);
      if (res && res !== 409) {
        handleClose();
      } else if (res === 409) {
        sethelpertext("نام دسته بندی   تکراری است");
      }
    } else {
      sethelpertext("نام دسته بندی را وارد نمایید");
    }
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            اسم دسته بندی را وارد کنید
          </Typography>
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                color: red,
              },
            }}
            id="standard-basic"
            variant="standard"
            fullWidth
            color="error"
            onChange={(e) => setInputcategory(e.target.value)}
            helperText={helpertext}
          />
          <Button
            color="success"
            variant="contained"
            sx={{
              background: red,
              color: "white",
              paddingX: "20px",
              width: "50%",
            }}
            onClick={handleSubmit}
          >
            ثبت
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddCategory;
