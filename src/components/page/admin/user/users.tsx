"use client"
import Loading from "@/src/components/loading/loading";
import { getUser } from "@/src/utils/services/data/getData";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getUsers"],
    queryFn: async () => await getUser(1, 7),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };
  console.log(data);
  return <div>User</div>;
};

export default Users;
