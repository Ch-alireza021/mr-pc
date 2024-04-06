import Home from "@/src/components/page/home/home";
import ProductCard from "@/src/components/page/home/product-card/productCard";
import { getAccessToken } from "@/src/utils/cookies";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <Box component={"main"} padding={"20px"}>
      <Home/>
    </Box>
  );
}
