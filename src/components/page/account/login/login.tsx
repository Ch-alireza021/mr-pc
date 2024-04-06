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
  CustomLink,
  IconButton,
  InputAdornment,
  InputElement,
  InputRoot,
  Wrapper,
} from "./loginStyles";
import LogoBtn from "../../../logo-button/logoBtn";
import Typography from "@mui/material/Typography";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import theme from "@/src/theme/theme";
import { ROUTE } from "@/src/config/route";
import api from "@/src/config/base_url";
import { URL_LOGIN } from "@/src/config/url";
import { loginFunc } from "@/src/utils/cookies";
import { useRouter } from "next/navigation";


interface MyFormsValues {
  username: string;
  password: string;
}

const Login = () => {
  const navigate=useRouter()
  const [isShow, setIsShow] = useState<boolean>(false);
  const initialValues: MyFormsValues = {
    username: "",
    password: "",
  };

  const validationSchema: Yup.ObjectSchema<MyFormsValues> = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const formik: FormikProps<MyFormsValues> = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await api.post(URL_LOGIN, {
          username: values.username,
          password: values.password,
        });
        const recivedData = response.data;
       const role= loginFunc(recivedData);
       if(role==="USER"){
        navigate.replace(ROUTE.HOME)
       }


      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    validationSchema,
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
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
              <Typography
                color={
                  formik.touched.username && formik.errors.username
                    ? "red"
                    : theme.palette.customGray.main
                }
                fontSize={"14px"}
              >
                نام کاربری را وارد کنید
              </Typography>
              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                type="text"
              />
            </Box>

            <Box>
              <Typography
                color={
                  formik.touched.password && formik.errors.password
                    ? "red"
                    : theme.palette.customGray.main
                }
                fontSize={"14px"}
              >
                رمز عبور را وارد کنید
              </Typography>

              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                type={isShow ? "Typography" : "password"}
                endAdornment={
                  <InputAdornment>
                    <IconButton
                      size="small"
                      aria-label="toggle password visibility"
                      onClick={() => setIsShow((prev) => !prev)}
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

            <CustomButton variant="contained" type="submit">
              ورود
            </CustomButton>
            <Box color={theme.palette.customGray.main}>
              <Typography>برای اولین مرتبه می‌خواهی وارد شوی؟!</Typography>
              <CustomLink href={ROUTE.SIGN_UP}>از این قسمت وارد شو</CustomLink>
            </Box>
          </Content>
        </Wrapper>
      </form>
    </Container>
  );
};

export default Login;
