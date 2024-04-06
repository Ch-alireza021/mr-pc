import Home from "@/src/components/page/home/home";
import HomeLayout from "@/src/components/page/home/home-layout/homeLayout";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <Box component={"main"} padding={"20px"}>
      <HomeLayout>
        <Home />
      </HomeLayout>
    </Box>
  );
}
