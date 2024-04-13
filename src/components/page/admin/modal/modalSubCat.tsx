import React, { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { red } from "@/src/theme/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategories } from "@/src/utils/services/data/getData";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

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
  req: (name: string, cat: string, id: string | null) => Promise<void>;
  text: string;
  onOpen: boolean;
  onClose: () => void;
  onEdit: { id: string; name: string; cat: string } | null;
  queryKey: string;
}

const ModalSubCategories: FC<ICategories> = ({
  req,
  text,
  onOpen,
  onClose,
  onEdit,
  queryKey,
}) => {
  const [inputSubCategory, setInputSubcategory] = useState<string | null>(null);
  const [helpertext, sethelpertext] = useState<{
    name: string | null;
    category: string | null;
  }>({ name: null, category: null });
  // ----------------------------------------
  const [selectedCat, setSelectedCat] = React.useState<string | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCat(event.target.value as string);
    sethelpertext((prev) => ({ ...prev, category: null }));
  };
  // ----------------------------------------
  //                  MODAL
  const handleClose = () => {
    onClose();
    sethelpertext({
      name: null,
      category: null,
    });
    setSelectedCat(null);
    setInputSubcategory(null);
  };

  const { data } = useQuery({
    queryKey: [`getSubcategory/categories`],
    queryFn: async () => await getCategories(),
  });
  useEffect(() => {
    if (onEdit?.cat) {
      setSelectedCat(onEdit.cat);
    }
    if (onEdit?.name) {
      console.log("useState");
      setInputSubcategory(onEdit.name);
    }
  }, [onEdit]);

  const categories = data?.data.categories;
  // console.log("data", categories);

  const queryClient = useQueryClient();

  const sendReqSubcategory = useMutation<
    void,
    Error,
    [string, string, string | null]
  >({
    mutationFn: (params: [string, string, string | null]) =>
      req(params[0], params[1], params[2]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      handleClose();
    },
    onError: async (error) => {
      console.error(error.message);
      if (error.message === "Request failed with status code 409") {
        sethelpertext((prev) => ({
          ...prev,
          name: `  نام ${text}  تکراری است`,
        }));
      }
    },
  });

  const handleSubmit = async () => {
    const id = onEdit?.id || null;
    const name = inputSubCategory || onEdit?.name || null;
    if (name) {
      if (selectedCat) {
        sendReqSubcategory.mutate([name, selectedCat, id]);
      } else {
        sethelpertext((prev) => ({
          ...prev,
          category: `یک دسته بندی انتخاب کنید`,
        }));
      }
    } else {
      sethelpertext((prev) => ({
        ...prev,
        name: ` نام ${text} را وارد نمایید`,
      }));
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
            value={inputSubCategory || ""}
            id="standard-basic"
            variant="standard"
            fullWidth
            color="error"
            onChange={(e) => {
              setInputSubcategory(e.target.value);
              sethelpertext((prev) => ({ ...prev, name: null }));
            }}
            helperText={helpertext.name}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCat || ""}
              label="Age"
              onChange={handleChange}
              variant="standard"
              color="error"
            >
              {categories?.map((item: { _id: string; name: string }) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: red }}>
              {helpertext.category}
            </FormHelperText>
          </FormControl>

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

export default ModalSubCategories;
