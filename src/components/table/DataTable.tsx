import { Box, Table, Typography } from "@mui/material";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { ITableBody } from "../../config/interface";
import { FC } from "react";

export const DataTable: FC<ITableBody> = ({ columns = [], rows = [] }) => {
  return (
    <Box
      sx={{
        width: "80vw",
        bgcolor: "#ffffff",
        borderRadius: "20px",
      }}
    >
      <Table>
        <TableHead columns={columns} />
        <TableBody rows={rows} columns={columns} />
      </Table>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      ></Box>
    </Box>
  );
};
