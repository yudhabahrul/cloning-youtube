import { appAction } from "../actions/sidebarAction";
import { MixType } from "../types";
import { AppAction } from "../types";

export const AppReducer = (state: MixType, action: AppAction) => {
  switch (action.type) {
    case appAction.TOGGLE_SIDEBAR:
      return { ...state, sidebarIsActive: action.payload as boolean };
    case appAction.SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload as string };
    case appAction.SET_IS_SEARCH:
      return { ...state, isSearch: action.payload as boolean };
    case appAction.SET_DISPLAY_SEARCH:
      return { ...state, displaySearch: action.payload as boolean };
    case appAction.SET_ADD_DATA_SEARCH:
      return {
        ...state,
        dataSearch: [...state.dataSearch!, action.payload as string],
      };
    case appAction.SET_DELETE_DATA_SEARCH:
      let newDataSearch: string[] = [];
      if (state?.dataSearch?.length! > 0) {
        newDataSearch = state?.dataSearch?.splice(
          1,
          state?.dataSearch?.length - 1
        )!;
      }
      return { ...state, dataSearch: newDataSearch };
    default:
      return state;
  }
};
