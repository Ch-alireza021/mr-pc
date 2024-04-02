import { Input as BaseInput, InputProps, inputClasses} from "@mui/base/Input";
import styled from "@emotion/styled";
import theme from "@/src/theme/theme";
import { Button } from "@mui/base/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonM from '@mui/material/Button';


export const InputRoot = styled("div")(
  ({}) => `
      border-radius: 8px;
      color: ${theme.palette.customGray.light};
      background: ${"#fff"};
      border: 1px solid #DAE2ED;
      box-shadow: 0px 2px 4px ${"rgba(0,0,0, 0.05)"};
      display: flex;
      align-items: center;
      justify-content: center;
    
    
      &.${inputClasses.focused} {
        border-color: ${theme.palette.secondary.main};
        box-shadow: 0 0 0 2px ${theme.palette.secondary.main};
      }
    
      &:hover {
        border-color: ${theme.palette.secondary.main};
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `
);

export const InputElement = styled("input")(
  ({}) => `
      font-size: 0.875rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.5;
      flex-grow: 1;
      color: ${theme.palette.customGray.dark};
      background: inherit;
      border: none;
      border-radius: inherit;
      padding: 8px 12px;
      outline: 0;
    `
);

export const IconButton = styled(Button)(
  () => `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: inherit;
      cursor: pointer;
      color: ${theme.palette.customGray.main};
      `
);

export const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10vh",
});
export const Wrapper = styled(Box)({
  width: "400px",
  borderRadius: "1rem",
  border: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "center",
  padding: "3rem",
});

export const Content = styled(Box)({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
});

export const Text = styled(Typography)({
  color: theme.palette.customGray.main,
  paddingBottom: "8px",
});

export const CustomButton=styled(ButtonM)`
background-color: ${theme.palette.secondary.main};
width: 150px;
font-size: large;
align-self: center;
&:hover {
        background-color: ${theme.palette.secondary.dark};
      }
`
