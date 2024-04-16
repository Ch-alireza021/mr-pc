"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { red } from "@/src/theme/theme";
import Loading from "@/src/components/loading/loading";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/src/utils/services/data/getData";
import { tabaleLimit } from "@/src/utils/services/generalFunc/generalFunction";
import { Row } from "@/src/config/interface";
import OrdersUser from "./users";
import { DataTable } from "@/src/components/table/DataTable";
import HoverReveal from "@/src/components/table/hoverReveal";
import SortOrders from "./sortOrders";
import moment from "jalali-moment";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Orders = () => {
  const [page, setPage] = useState<number>(1);
  const [sortUp, setSortUp] = useState<boolean>(true);
  const [isDelivered, setIsDelivered] = useState<boolean>(false);
  const limit = tabaleLimit();
  // -----------------------------------------
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getOrders", page],
    queryFn: async () =>
      await getOrders(isDelivered, page, sortUp, limit, null),
  });
  if (isLoading) return <Loading />;
  if (isError) return <Box>{error.message}</Box>;
  console.log(data);
  const row = data?.data?.orders;
  console.log(row);
  // -----------------------------------------
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const handleSort = () => {
    setSortUp((prev) => !prev);
  };
  const col = [
    {
      id: 1,
      label: "نام کاربر",
      renderCol: (row: Row) => <OrdersUser id={row.user} />,
    },
    {
      id: 2,
      label: " مبلغ فاکتور",
      renderCol: (row: Row) => <HoverReveal>{row.totalPrice}</HoverReveal>,
    },
    {
      id: 3,
      label: <SortOrders handleSort={handleSort} sort={sortUp} />,
      renderCol: (row: Row) =>
        moment(row.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),
    },
    {
      id: 4,
      label: "برسی سفارشات انجام شده",
      renderCol: () => (
        <Button
          variant="contained"
          color="success"
          sx={{ background: red }}
          // onClick={() => handleCheckOrder(row)}
          endIcon={<VisibilityIcon />}
        >
          برسی سفارش
        </Button>
      ),
    },
  ];

  return (
    <>
      <div>Orders</div>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button
          variant="contained"
          
          sx={{
        
            background: isDelivered ? red : red,
          }}
          color={isDelivered ? "success" : "error"}
          onClick={() => setIsDelivered(true)}
        >
          ارسال شده ها
        </Button>
        <Button
          variant="contained"
          sx={{
            background: isDelivered ? red : null,
           
          }}
          color={!isDelivered ? "success" : "error"}
          onClick={() => setIsDelivered(false)}
        >
          در حال ارسال
        </Button>
      </ButtonGroup>
      <DataTable
        columns={col}
        rows={row}
        page={data?.page}
        totalPage={data?.total_pages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Orders;
