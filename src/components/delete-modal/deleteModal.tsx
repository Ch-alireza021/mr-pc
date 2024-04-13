import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { darkGreen, red } from "@/src/theme/theme";
import Button from "@mui/material/Button";

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

const DeleteModal = (props: {
  onOpen: boolean;
  name: string;
  onDelete: (isDelete: boolean) => void;
}) => {
  return (
    <div>
      <Modal
        open={props.onOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`  آیا میخواهید ${props.name} را حذف کنید؟`}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ background: darkGreen }}
              color="success"
                onClick={() => props.onDelete(false)}
            >
              انصراف
            </Button>
            <Button
              variant="contained"
              sx={{ background: red }}
              color="success"
              onClick={() => props.onDelete(true)}
            >
              حذف شود
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;
