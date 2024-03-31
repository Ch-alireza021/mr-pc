"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/src/theme/theme";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";


const ThemeLayout = (props: { children: React.ReactNode }) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <html lang="en">
      <body dir="rtl">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default ThemeLayout;


