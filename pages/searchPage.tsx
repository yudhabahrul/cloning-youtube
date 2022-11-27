import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { UseWindow } from "../hooks/useWindow";
import { AppContext } from "../contexts/AppContext";
import Header from "../components/Header";
import SearchCategory from "../components/SearchCategory";
import Sidebar from "../components/Sidebar";
import SidebarActive from "../components/SidebarActive";
import SearchContent from "../components/SearchContent";
import HeaderSearch from "../components/HeaderSearch";
import SearchResponsive from "../components/SearchResponsive";

const SearchPage: NextPage = () => {
  const [windowSize, _setWindowSize] = UseWindow();
  const ctx = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (ctx?.displaySearch) {
      ctx?.handleDisplaySearch?.(false);
    }
  }, [router.query.search_query]);

  return windowSize < 767 && ctx?.displaySearch ? (
    <SearchResponsive />
  ) : (
    <>
      {windowSize < 767 ? <HeaderSearch /> : <Header />}
      <SearchCategory />
      {ctx?.sidebarIsActive ? (
        <SidebarActive bgHome="bg-transparent hover:bg-gray-600/40" />
      ) : (
        <Sidebar />
      )}
      <SearchContent sidebarIsActive={ctx?.sidebarIsActive} />
    </>
  );
};

export default SearchPage;
