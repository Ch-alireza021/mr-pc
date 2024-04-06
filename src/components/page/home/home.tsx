import React from 'react'
import ProductCard from './product-card/productCard'
import Box from '@mui/material/Box';
import Slider from './slider/slider';

const Home = () => {
  return (
    <Box>
        <Slider/>
          <ProductCard />
    </Box>
  )
}

export default Home