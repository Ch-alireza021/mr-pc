import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { darkGreen, red } from "@/src/theme/theme";
import { Row } from "../../../../config/interface";

const EditCategoryComponent = (props: { row: Row,onclick:(id:string,action:string)=>void }) => {
  console.log(props.row);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        variant="contained"
        sx={{ background: darkGreen }}
        color="success"
        onClick={()=>onclick(props.row._id,"edit")}
      >
        ویرایش
      </Button>
      <Button variant="contained" sx={{ background: red }} color="success">
        حذف
      </Button>
    </Box>
  );
};

export default EditCategoryComponent;
