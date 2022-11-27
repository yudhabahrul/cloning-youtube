import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { UseWindow } from "../hooks/useWindow";
import { data } from "../data";
import SearchListVideo from "./SearchListVideo";
import ListVideo from "./ListVideo";
import { IPROPS, MixType } from "../types";
import { AppContext } from "../contexts/AppContext";

const SearchContent = ({ sidebarIsActive }: MixType) => {
  const [filterData, setFilterData] = useState<IPROPS[]>([]);
  const router = useRouter();
  const ctx = useContext(AppContext);
  const [windowSize, _setWindowSize] = UseWindow();

  useEffect(() => {
    if (ctx?.isSearch) {
      const valueData = data.video?.filter((d) =>
        d.title
          ?.toLowerCase()
          ?.includes(ctx?.searchValue?.toLowerCase() as string)
      );
      setFilterData(valueData);
      ctx?.handleIsSearch?.(false);
    }
  }, [ctx?.isSearch, filterData, router.query.search_query]);

  return (
    <div
      className={`grid grid-cols-1 gap-y-4 relative min-h-[calc(100vh_-_7.2rem)] ${
        sidebarIsActive
          ? "left-60 w-[calc(100%_-_15rem)]"
          : "left-[4.5rem] w-[calc(100%_-_4.5rem)] pl-[5.525rem]"
      } p-6 pr-16 bg-[#181818] top-[7.2rem] md:top-[3rem] md:left-0 md:w-full md:p-0 md:pb-16`}
    >
      {filterData.length > 0
        ? filterData.map((val) => (
            <div key={val.id}>
              {windowSize < 767 ? (
                <ListVideo data={val} sidebarIsActive={sidebarIsActive} />
              ) : (
                <SearchListVideo data={val} sidebarIsActive={sidebarIsActive} />
              )}
            </div>
          ))
        : data.video.map((val) => (
            <div key={val.id}>
              {windowSize < 767 ? (
                <ListVideo data={val} sidebarIsActive={sidebarIsActive} />
              ) : (
                <SearchListVideo data={val} sidebarIsActive={sidebarIsActive} />
              )}
            </div>
          ))}
    </div>
  );
};

export default SearchContent;
