import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { darkGreen, red } from "@/src/theme/theme";
import { Row } from "../../../../config/interface";
import DeleteModal from "@/src/components/delete-modal/deleteModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "@/src/utils/services/data/deleteData";
import { URL_CATEGORY } from "@/src/config/url";

const EditCategoryComponent = (props: {
  row: Row;
  onEdit: (id: string, name: string) => void;
}) => {
  console.log(props.row);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const queryClient = useQueryClient();
  const deleteFn = useMutation<void, Error, string>({
    mutationFn: (id) => deleteData(URL_CATEGORY, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCategoryLimit"],
      });
    },
    onError: async (error) => {
      console.error(error.message);
    },
  });
  const handleDelete = (isDelete: boolean) => {
    handleClose();
    if (isDelete) {
      deleteFn.mutate(props.row._id);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{ background: darkGreen }}
          color="success"
          onClick={() => props.onEdit(props.row._id, props.row.name)}
        >
          ویرایش
        </Button>
        <Button
          variant="contained"
          sx={{ background: red }}
          onClick={handleOpen}
          color="success"
        >
          حذف
        </Button>
      </Box>
      <DeleteModal
        onOpen={open}
        name={props.row.name}
        onDelete={handleDelete}
      />
    </>
  );
};

export default EditCategoryComponent;
