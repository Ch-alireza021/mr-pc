import { TableCol } from "@/src/config/interface";
import { TableCell, TableHead as MuiTableHead, TableRow } from "@mui/material";
import React from "react";
function TableHead({ columns = [] }: { columns: Array<TableCol> | [] }) {
  return (
    <MuiTableHead sx={{ direction: "rtl" }}>
      <TableRow
        sx={{
          backgroundColor: "neutral.100",
          direction: "rtl",
        }}
      >
        {columns.map((col) => (
          <TableCell
            sx={{
              fontWeight: 900,
              fontSize:"20px"
            }}
            key={col.id}
          >
            {col.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}

export default TableHead;
