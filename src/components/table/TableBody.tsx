import React, { FC } from "react";
import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import { ITable, Row } from "@/src/config/interface";
import HoverReveal from "./hoverReveal";

const TableBody: FC<ITable> = ({ rows = [], columns = [] }) => {
  return (
    <MuiTableBody>
      {rows.map((row: Row) => (
        <TableRow key={row._id}>
          {columns.map((col) => (
            <TableCell key={`${row._id}-${col.id}`}>
              <HoverReveal>{col.renderCol(row)}</HoverReveal>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
