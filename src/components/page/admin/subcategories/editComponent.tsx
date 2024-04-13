import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { darkGreen, red } from "@/src/theme/theme";
import { Row } from "../../../../config/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteModal from "@/src/components/delete-modal/deleteModal";
import { URL_SUBCATEGORY } from "@/src/config/url";
import { deleteData } from "@/src/utils/services/data/deleteData";

const EditSubCategoryComponent = (props: {
  row: Row;
  onEdit: (id: string, name: string, cat: string) => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const queryClient = useQueryClient();
  const deleteFn = useMutation<void, Error, string>({
    mutationFn: (id) => deleteData(URL_SUBCATEGORY, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getSubcategoryLimit"],
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
          onClick={() =>
            props.onEdit(props.row._id, props.row.name, props.row.category)
          }
        >
          ویرایش
        </Button>
        <Button
          variant="contained"
          sx={{ background: red }}
          color="success"
          onClick={handleOpen}
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

export default EditSubCategoryComponent;
