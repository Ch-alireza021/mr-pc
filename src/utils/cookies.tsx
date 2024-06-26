import Cookies from "js-cookie";
import { User } from "../config/interface";

declare module "js-cookie" {
  export function get(name: string): string;
  export function set(name: string, value: string, options?: any): void;
  export function remove(name: string, options?: any): void;
}

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_DATA = "user_data";

export const saveDataToCookie = (
  accessToken: string,
  refreshToken: string,
  userData: string | null
) => {
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { expires: 7 }),
    Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { expires: 7 });
  if (userData) {
    Cookies.set(USER_DATA, userData, { expires: 7 });
  }
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

export const removeTokensFromCookie = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};

export const loginFunc = (recivedData: {
  data: { user: User };
  token: { accessToken: string; refreshToken: string };
}) => {
  console.log(recivedData);
  const user = recivedData.data.user;
  const accessToken = recivedData.token.accessToken;
  const refreshToken = recivedData.token.refreshToken;
  if (recivedData.data.user.role === "ADMIN") {
    console.log("ADMIN");
    Cookies.remove(USER_DATA);
    saveDataToCookie(accessToken, refreshToken, null);
    return "ADMIN";
  } else {
    console.log("USER");
    const userData: User = {
      address: user.address,
      firstname: user.firstname,
      lastname: user.lastname,
      phoneNumber: user.phoneNumber,
      username: user.username,
      _id: user._id,
      role: user.role,
    };
    saveDataToCookie(accessToken, refreshToken, JSON.stringify(userData));
    return "USER";
  }
};
