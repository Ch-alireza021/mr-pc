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
  Wrapper,
} from "./loginStyles";
import LogoBtn from "../../logo-button/logoBtn";
import Typography from "@mui/material/Typography";
import {

  FormikProps,
  useFormik,
} from "formik";
import * as Yup from "yup";
import theme from "@/src/theme/theme";

interface MyFormsValues {
  userName: string;
  password: string;
}

const Login = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const initialValues: MyFormsValues = {
    userName: "",
    password: "",
  };

  const validationSchema: Yup.ObjectSchema<MyFormsValues> = Yup.object({
    userName: Yup.string().required(),
    password: Yup.string().required(),
  });

  const formik: FormikProps<MyFormsValues> = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
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
                  formik.touched.userName && formik.errors.userName
                    ? "red"
                    : theme.palette.customGray.main
                }
              >
                نام کاربری را وارد کنید
              </Typography>
              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="userName"
                name="userName"
                onChange={formik.handleChange}
                value={formik.values.userName}
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
              <Typography>از این قسمت وارد شو</Typography>
            </Box>
          </Content>
        </Wrapper>
      </form>
    </Container>
  );
};

export default Login;
