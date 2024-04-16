import Loading from '@/src/components/loading/loading';
import React from 'react'
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/src/utils/services/data/getData';
import HoverReveal from '@/src/components/table/hoverReveal';

const OrdersUser = (props:{id:string}) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [`${props.id}`],
        queryFn: async () => await getUserById(props.id),
      });
      if (isLoading) return <Loading />;
        if (isError) return <Box>{error.message}</Box>;
        const user= data?.data?.user;
  return (
    <HoverReveal>{`${user.firstname} ${user.lastname}`}</HoverReveal>
  )
}

export default OrdersUser