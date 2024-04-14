"use client";
import { getUser } from "@/src/utils/services/data/getData";
import React from "react";
import Typography from "@mui/material/Typography";
import { DataTable } from "@/src/components/table/DataTable";
import { Row } from "@/src/config/interface";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/src/components/loading/loading";



const Users = () => {
  const heigh = document.documentElement.offsetHeight;
  const limit = Math.floor((heigh - 230) / 70);
  const [page, setPage] = React.useState(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  // --------------------------------------------------
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getUsers",page],
    queryFn: async () => await getUser(page, limit),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };

  const row = data?.data?.users;

  // --------------------------------------------------

  const col = [
    { id: 1, label: "نام", renderCol: (row: Row) => row.firstname },
    { id: 2, label: "نام خانوادگی", renderCol: (row: Row) => row.lastname },
    { id: 3, label: "شماره تماس", renderCol: (row: Row) => row.phoneNumber },
    { id: 4, label: " نام کاربری", renderCol: (row: Row) => row.username },
    { id: 5, label: " آدرس", renderCol: (row: Row) => row.address },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignitems: "center",
          paddingBottom: "20px",
          paddingX: "20px",
        }}
      >
        <Typography variant="h5" fontWeight={900}>
          دسته بندی
        </Typography>
      </Box>
      <DataTable
        columns={col}
        rows={row}
        page={data?.page}
        totalPage={data?.total_pages}
        onPageChange={handlePageChange}
      />

    </Box>
  );
};

export default Users;
