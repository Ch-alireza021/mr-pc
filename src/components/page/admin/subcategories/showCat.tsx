import Loading from "@/src/components/loading/loading";
import HoverReveal from "@/src/components/table/hoverReveal";
import { Row } from "@/src/config/interface";
import { getCategory } from "@/src/utils/services/data/getData";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ShowCat = (props:{row:Row}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`getSubcategory/${props.row.category}`],
    queryFn: async () => await getCategory(props.row.category),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };
  const name = data?.data?.category.name;
  return <HoverReveal>{name}</HoverReveal>;
};

export default ShowCat;
