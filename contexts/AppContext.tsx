import { useRouter } from "next/router";
import { useEffect, createContext, useReducer } from "react";
import { AppReducer } from "../reducers/AppReducer";
import { MixType, ChildrenProps } from "../types";

export const AppContext = createContext<MixType | null>(null);

export const appState: MixType = {
  sidebarIsActive: true,
  searchValue: "",
  isSearch: false,
  displaySearch: false,
  dataSearch: [],
};

const AppProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(AppReducer, appState);
  const router = useRouter();

  useEffect(() => {
    if (!state?.isSearch) {
      handleIsSearch(true);
    }
  }, [router.query.search_query]);

  const handleSidebar = (value: boolean) => {
    dispatch({ type: "TOGGLE_SIDEBAR", payload: !value });
  };

  const handleSearchValue = (value: string) => {
    dispatch({ type: "SET_SEARCH_VALUE", payload: value });
  };

  const handleIsSearch = (value: boolean) => {
    dispatch({ type: "SET_IS_SEARCH", payload: value });
  };

  const handleDisplaySearch = (value: boolean) => {
    dispatch({ type: "SET_DISPLAY_SEARCH", payload: value });
  };

  const handleAddDataSearch = (value: string) => {
    dispatch({ type: "SET_ADD_DATA_SEARCH", payload: value });
  };

  const handleDeleteDataSearch = () => {
    dispatch({ type: "SET_DELETE_DATA_SEARCH", payload: null });
  };

  return (
    <AppContext.Provider
      value={{
        sidebarIsActive: state.sidebarIsActive,
        searchValue: state.searchValue,
        isSearch: state.isSearch,
        displaySearch: state.displaySearch,
        handleSidebar,
        handleSearchValue,
        handleIsSearch,
        handleDisplaySearch,
        dataSearch: state.dataSearch,
        handleAddDataSearch,
        handleDeleteDataSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
