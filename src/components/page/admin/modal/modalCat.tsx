import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import { red } from "@/src/theme/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

export interface ICategories {
  req: (name: string, id: string | null) => Promise<void>;
  text: string;
  onOpen: boolean;
  onClose: () => void;
  onEdit: { id: string; name: string } | null;
  queryKey: string;
}

const ModalCategories: FC<ICategories> = ({
  req,
  text,
  onOpen,
  onClose,
  onEdit,
  queryKey,
}) => {
  const [inputCategory, setInputcategory] = useState<string | null>(
    onEdit?.name ? onEdit.name : null
  );
  const [helpertext, sethelpertext] = useState<string | null>(null);
  // ----------------------------------------
  //                  MODAL
  const handleClose = () => {
    onClose();
    sethelpertext(null);
  };

  const queryClient = useQueryClient();

  const edit = useMutation<void, Error, [string, string | null]>({
    mutationFn: (params: [string, string | null]) => req(params[0], params[1]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      handleClose();
    },
    onError: async (error) => {
      console.error(error.message);
      if (error.message === "Request failed with status code 409") {
        sethelpertext(`  نام ${text}  تکراری است`);
      }
    },
  });

  const handleSubmit = async () => {
    const id = onEdit?.id || null;
    const name = inputCategory || onEdit?.name || null;
    console.log(name);
    console.log(id);
    if (name) {
      console.log("hi");
      edit.mutate([name, id]);
    } else {
      sethelpertext(` نام ${text} را وارد نمایید`);
    }
  };
  // ---------------------------------------------
  return (
    <>
      <Modal
        open={onOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {` نام ${text} را وارد کنید`}
          </Typography>
          <TextField
            sx={{
              "& .MuiFormHelperText-root": {
                color: red,
              },
            }}
            value={inputCategory || onEdit?.name || ""}
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

export default ModalCategories;
