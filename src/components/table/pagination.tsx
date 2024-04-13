import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComp = (props: {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}) => {
  const handleChangePage = (_event: unknown, newPage: number) => {
    props.onPageChange(newPage);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.totalPage}
        onChange={handleChangePage}
        page={props.page}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationComp;
