"use client";
import React, { useState } from "react";
import { Input as BaseInput } from "@mui/base/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import {
  Container,
  Content,
  CustomButton,
  IconButton,
  InputAdornment,
  InputElement,
  InputRoot,
  Text,
  Wrapper,
} from "./loginStyles";
import LogoBtn from "../../logo-button/logoBtn";
import Typography from "@mui/material/Typography";

const Login = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <Container>
      <Wrapper>
        <Content>
          <Box display={"flex"} justifyContent={"center"} gap={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>MR PC</Typography>
              <Typography>مستر پی سی </Typography>
            </Box>
            <LogoBtn />
          </Box>
          <Box>
            <Text>آدرس ایمیل را وارد کنید</Text>
            <BaseInput
              slots={{
                root: InputRoot,
                input: InputElement,
              }}
            />
          </Box>

          <Box>
            <Text>رمز عبور را وارد کنید</Text>

            <BaseInput
              slots={{
                root: InputRoot,
                input: InputElement,
              }}
              type={isShow ? "text" : "password"}
              endAdornment={
                <InputAdornment>
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={() => setIsShow((prev) => !prev)}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {isShow ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>

          <CustomButton variant="contained">ورود</CustomButton>
          <Box>
            <Text>برای اولین مرتبه می‌خواهی وارد شوی؟!</Text>
            <Text>از این قسمت وارد شو</Text>
          </Box>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Login;
