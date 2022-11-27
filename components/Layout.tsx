import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import BottomNavigation from "./BottomNavigation";
import { ChildrenProps } from "../types";

const Layout = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const ctx = useContext(AppContext);

  return (
    <>
      <main>{children}</main>
      {(ctx?.displaySearch && router.pathname === "/") ||
      (ctx?.displaySearch && router.pathname === "/searchPage") ||
      router.pathname === "/watchPage" ? null : (
        <BottomNavigation />
      )}
    </>
  );
};

export default Layout;
