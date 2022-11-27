import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { UseWindow } from "../hooks/useWindow";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarActive from "../components/SidebarActive";
import Category from "../components/Category";
import Content from "../components/Content";
import SearchResponsive from "../components/SearchResponsive";

const Home: NextPage = () => {
  const [windowSize, _setWindowSize] = UseWindow();
  const ctx = useContext(AppContext);

  useEffect(() => {
    if (ctx?.displaySearch) {
      ctx?.handleDisplaySearch?.(false);
    }
  }, []);

  return ctx?.displaySearch ? (
    <SearchResponsive />
  ) : (
    <div className="content">
      <Header
        handleSidebar={ctx?.handleSidebar}
        sidebarIsActive={ctx?.sidebarIsActive}
        className="border-b-[0.5px]"
      />
      {ctx?.sidebarIsActive ? (
        <SidebarActive bgHome="bg-gray-600/40" />
      ) : (
        <Sidebar />
      )}
      <Category sidebarIsActive={ctx?.sidebarIsActive} />
      <Content sidebarIsActive={ctx?.sidebarIsActive} />
    </div>
  );
};

export default Home;
