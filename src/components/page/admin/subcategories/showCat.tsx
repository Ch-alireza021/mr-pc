import Loading from '@/src/components/loading/loading';
import { getCategory } from '@/src/utils/services/data/getData';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const ShowCat = ({id}:{id:string}) => {
    console.log(id)
    const { data, isLoading, isError } = useQuery({
        queryKey: [`getSubcategory/${id}`],
        queryFn: async () => await getCategory(id),
      });
      if (isLoading) return <Loading />;
      if (isError) return { isError };
      const name = data?.data?.category.name;
    console.log(name)
  return (
    <div>{name}</div>
  )
}

export default ShowCat