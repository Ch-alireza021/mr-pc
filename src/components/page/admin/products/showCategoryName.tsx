import { generalGetWithId } from "@/src/utils/services/data/getData";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "@/src/components/loading/loading";

const ShowCategoryName = (props: { URL: string; id: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [props.id],
    queryFn: async () => await generalGetWithId(props.URL, props.id),
  });
  if (isLoading) return <Loading />;
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  const name =
    props.URL === "categories"
      ? data?.data?.category.name
      : data?.data?.subcategory.name;
  return <div>{name}</div>;
};

export default ShowCategoryName;
