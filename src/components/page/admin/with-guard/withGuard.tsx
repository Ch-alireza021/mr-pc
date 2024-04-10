"use client";
import { FC, JSX, useEffect, useState } from "react";
import { getLoginRole } from "@/src/utils/cookies";
import Login from "@/src/components/page/account/login/login";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

const WithGuard = (Component: FC) => {
  const GuardedComponent = (props: JSX.IntrinsicAttributes) => {
    const pathName = usePathname()
    console.log("Current route:", pathName);
    const [login, setIsLogin] = useState<boolean | string>(false);
    useEffect(() => {
      const isLogin = getLoginRole();

      setIsLogin(isLogin==="ADMIN" ? isLogin : false);
    }, []);
    if(!login){
      useRouter().push("/login")
    }
    console.log(login);
    return login ? (
      <Component {...props} />
    ) : ({}
    //   <Login
    //     shouldNavigate={pathName}
    //   />
    );
  };

  return GuardedComponent;
};

export default WithGuard;
