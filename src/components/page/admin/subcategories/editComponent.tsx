import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { darkGreen, red } from "@/src/theme/theme";
import { Row } from "../../../../config/interface";

const EditCategoryComponent = (props: { row: Row,onEdit:(id:string,name:string,cat:string)=>void }) => {
  console.log(props.row);


  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        variant="contained"
        sx={{ background: darkGreen }}
        color="success"
        onClick={()=>props.onEdit(props.row._id,props.row.name,props.row.category)}
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
