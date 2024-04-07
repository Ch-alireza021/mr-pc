"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import theme from "@/src/theme/theme";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { removeCookie } from "@/src/utils/cookies";
import { usePathname, useRouter } from "next/navigation";
import { ROUTE } from "@/src/config/route";
import { Children } from "@/src/config/interface";
import { list } from "./list";


const drawerWidth = 200;

export default function AdminHeader({ children }: { children: Children }) {
  const red = theme.palette.customRed.main;
  const router = useRouter();
  const pathName = usePathname();
  const [clicked, setClicked] = React.useState<string>(pathName);
  //   ------------------------------------

  const logOut = () => {
    removeCookie();
    router.replace(ROUTE.HOME);
  };
  //   ------------------------------------
  const handleClick = (path: string): void => {
    setClicked(path);
    router.push(path);
  };
  //   ------------------------------------
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#fff",
          color: "#2b2d42",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={red}
            fontWeight={"900"}
          >
            پنل ادمین مستر پی سی
          </Typography>
          <Button
            variant="outlined"
            endIcon={<LogoutIcon />}
            sx={{ color: red, borderColor: red }}
            onClick={logOut}
          >
            خروج
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", borderColor: "green" }}>
          <List>
            {list.map((item, index) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  sx={{
                    background: clicked === item.path ? red : "inherit",
                    color: clicked === item.path ? "#fff" : "inherit",
                    "&.MuiListItemButton-root:hover": {
                      background: theme.palette.secondary.dark,
                      color: "#fff",
                    },
                  }}
                  onClick={() => handleClick(item.path)}
                >
                  <ListItemIcon
                    sx={{
                      color: clicked === item.text ? "#fff" : "inherit",
                      paddingRight: "10px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ background: "#fff", width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
}
