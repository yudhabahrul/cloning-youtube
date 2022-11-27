import { StaticImageData } from "next/image";
import React from "react";

export type IPROPS = {
  id?: number;
  title?: string;
  time?: string;
  channel?: string;
  profile?: StaticImageData | string;
  image?: StaticImageData;
  verified?: boolean;
  view?: string;
  timeUpload?: string;
  description?: string;
};

export type Content = {
  video: IPROPS[];
};

export type VideoProps = {
  data: Content;
  sidebarIsActive?: boolean | undefined;
};

export type MixType = {
  data?: IPROPS;
  sidebarIsActive?: boolean;
  handleSidebar?(v: boolean | undefined): void;
  searchValue?: string;
  handleSearchValue?(v: string): void;
  className?: string;
  value?: string;
  handleValue?(v: string): void;
  isSearch?: boolean;
  handleIsSearch?(v: boolean): void;
  displaySearch?: boolean;
  handleDisplaySearch?(v: boolean): void;
  dataSearch?: string[];
  handleAddDataSearch?: (v: string) => void;
  handleDeleteDataSearch?: () => void;
};

export type BgHome = {
  bgHome: string;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AppAction =
  | { type: "TOGGLE_SIDEBAR"; payload: boolean }
  | { type: "SET_SEARCH_VALUE"; payload: string }
  | { type: "SET_IS_SEARCH"; payload: boolean }
  | { type: "SET_DISPLAY_SEARCH"; payload: boolean }
  | { type: "SET_ADD_DATA_SEARCH"; payload: string }
  | { type: "SET_DELETE_DATA_SEARCH"; payload: null };
