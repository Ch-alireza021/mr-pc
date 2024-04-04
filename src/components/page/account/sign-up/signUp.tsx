"use client";
import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Input as BaseInput } from "@mui/base/Input";
import { CustomButton, InputElement, InputRoot } from "../login/loginStyles";
import { FormikProps, useFormik } from "formik";
import theme from "@/src/theme/theme";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";

interface IInput {
  children: React.ReactNode;
  text: React.ReactNode;
  color: boolean;
}

interface MyFormsValues {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
}

const Input: FC<IInput> = ({ children, color, text }) => {
  // -------------
  //     COLOR
  const gray = theme.palette.customGray.main;
  const warning = theme.palette.warning.main;
  // -------------
  return (
    <Grid
      item
      md={6}
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Typography color={color ? warning : gray} paddingLeft={"10px"}>
        {text}
      </Typography>
      {children}
    </Grid>
  );
};

const SignUp = () => {
  // ----------------------------------------
  //       FORMIK
  const initialValues: MyFormsValues = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema: Yup.ObjectSchema<MyFormsValues> = Yup.object({
    firstname: Yup.string().required("نام الزامیست"),
    lastname: Yup.string()
      .min(3, "نام خانوادگی باید حداقل سه کارکتر داشته باشد")
      .required("نام خانوادگی الزامیست"),
    username: Yup.string()
      .min(8, "نام کار بری باید حداقل 8 کارکتر داشته باشد")
      .required("یک نام کاربری وارد کنید"),
    password: Yup.string()
      .required("رمز عبور الزامیست")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
        "رمز عبور باید حداقل دارای یک حرف بزرگ، یک حرف کوچک، یک رقم و یک کاراکتر خاص باشد."
      ),
    phoneNumber: Yup.string()
      .required("شماره تلفن الزامیست")
      .matches(/^[0-9]{10}$/, "شماره تلفن باید 10 رقم باشد"),
    address: Yup.string()
      .required("آدرس الزامیست")
      .min(10, "آدرس باید حداقل 10 کارکتر داشته باشد"),
  });

  const formik: FormikProps<MyFormsValues> = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  // ----------------------------------------------------
  return (
    <Box paddingX={"20px"} paddingY={"30px"}>
      <Typography>ثبت نام در مستر پی سی</Typography>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} width={"650px"}>
            <Input
              text={
                formik.touched.firstname && formik.errors.firstname
                  ? formik.errors.firstname
                  : "نام"
              }
              color={!!(formik.touched.firstname && formik.errors.firstname)}
            >
              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="firstname"
                name="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                onBlur={formik.handleBlur}
                type="text"
              />
            </Input>

            <Input
              text={
                formik.touched.lastname && formik.errors.lastname
                  ? formik.errors.lastname
                  : "نام خانوادگی "
              }
              color={!!(formik.touched.lastname && formik.errors.lastname)}
            >
              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="lastname"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                onBlur={formik.handleBlur}
                type="text"
              />
            </Input>

            <Input
              text={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : "نام کاربری "
              }
              color={!!(formik.touched.username && formik.errors.username)}
            >
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
            </Input>

            <Input
              text={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : "رمز عبور "
              }
              color={!!(formik.touched.password && formik.errors.password)}
            >
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
                type="text"
              />
            </Input>

            <Input
              text={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? formik.errors.phoneNumber
                  : " شماره تماس  "
              }
              color={
                !!(formik.touched.phoneNumber && formik.errors.phoneNumber)
              }
            >
              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
                type="text"
              />
            </Input>

            <Input
              text={
                formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : "آدرس"
              }
              color={!!(formik.touched.address && formik.errors.address)}
            >
              <BaseInput
                slots={{
                  root: InputRoot,
                  input: InputElement,
                }}
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
                type="text"
              />
            </Input>

            <CustomButton type="submit">ادامه</CustomButton>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
