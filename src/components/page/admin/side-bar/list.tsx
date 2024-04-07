import MenuIcon from "@mui/icons-material/Menu";
import TocIcon from "@mui/icons-material/Toc";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { ROUTE } from "@/src/config/route";

export const list = [
  {
    text: "محصولات",
    path: ROUTE.ADMIN,
    icon: <ProductionQuantityLimitsIcon />,
  },
  { text: "سفارشات", path: ROUTE.ORDERS, icon: <LocalMallIcon /> },
  { text: "کاربر", path: ROUTE.USER, icon: <GroupAddIcon /> },
  { text: "دسته بندی", path: ROUTE.CATEGORY, icon: <MenuIcon /> },
  { text: "زیرمجموعه", path: ROUTE.SUBCATEGORY, icon: <TocIcon /> },
];
