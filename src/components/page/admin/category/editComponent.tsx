import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { darkGreen, red } from "@/src/theme/theme";

const EditCategoryComponent = () => {
  return (
    <Box sx={{display:"flex",gap:2}}> 
      <Button variant="contained" sx={{background:darkGreen}} color="success" >ویرایش</Button>
      <Button variant="contained" sx={{background:red}} color="success">حذف</Button>
    </Box>
  );
};

export default EditCategoryComponent;
