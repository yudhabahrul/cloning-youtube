import { useRouter } from "next/router";
import {
  useState,
  useEffect,
  useContext,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { AppContext } from "../contexts/AppContext";
import { UseWindow } from "../hooks/useWindow";
import { IoIosArrowRoundBack, IoIosTimer } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { MdMic } from "react-icons/md";

const SearchResponsive = ({ p = Function }) => {
  const initialValue: string[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("history") as string) || []
      : [];
  const [windowSize, _setWindowSize] = UseWindow();
  const router = useRouter();
  const ctx = useContext(AppContext);
  const [historySearch, setHistorySearch] = useState<string[]>(initialValue);
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historySearch));
  }, [historySearch]);

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    ctx?.handleSearchValue?.(e.target.value);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (ctx?.searchValue) {
        router.push(`/searchPage?search_query=${ctx?.searchValue}`);
        ctx?.handleIsSearch?.(true);
        setHistorySearch((prev) => [...prev, ctx.searchValue!]);
        ctx?.handleAddDataSearch?.(ctx?.searchValue!);
        if (ctx?.searchValue === router.query.search_query) {
          ctx?.handleDisplaySearch?.(false);
        }
      }
    }
  };

  const handleChangePage = (v: string) => {
    ctx?.handleSearchValue?.(v);
    if (router.pathname === "/searchPage" && v === router.query.search_query) {
      router.push(`/searchPage?search_query=${v}`);
      ctx?.handleIsSearch?.(true);
      ctx?.handleDisplaySearch?.(false);
    } else {
      router.push(`/searchPage?search_query=${v}`);
    }
  };

  return (
    <div className="w-screen bg-[#181818] h-screen pl-3 overflow-y-scroll overflow-x-hidden">
      <div className="fixed w-[97%]  bg-[#181818] top-0 z-10 flex items-center py-2">
        <IoIosArrowRoundBack
          onClick={() => ctx?.handleDisplaySearch?.(false)}
          className="fill-slate-200 text-[2rem]"
        />
        <input
          type="text"
          placeholder="Telusuri YouTube"
          value={ctx?.searchValue}
          ref={ref}
          onChange={handleSearchValue}
          onKeyDown={handleOnKeyDown}
          className={`bg-gray-700 ${
            windowSize <= 412 ? "w-3/4" : windowSize > 413 ? "w-[77.5%]" : ""
          } h-7 border-0 outline-0 text-sm lowercase ml-3 text-white caret-[#ff0000]  pl-2`}
        />
        <div className="absolute z-10 right-2.5 cursor-pointer w-[1.8rem] h-[1.8rem] bg-gray-600/40 rounded-full flex justify-center items-center">
          <MdMic className="fill-slate-100 text-xl" />
        </div>
        {ctx?.searchValue && (
          <div className="relative z-20 w-[10%] cursor-pointer h-7 -ml-0.5 bg-gray-700 flex items-center">
            <VscClose
              onClick={() => ctx?.handleSearchValue?.("")}
              className="absolute right-1 fill-slate-200 text-[1.45rem]"
            />
          </div>
        )}
      </div>
      <ul className="relative w-full mt-14 ml-1 flex flex-col space-y-6">
        {historySearch.map((v, idx) => (
          <li
            key={idx}
            onClick={() => handleChangePage(v)}
            className="flex items-center"
          >
            <IoIosTimer className="fill-slate-100 text-2xl mr-5" />
            <p className="w-3/5 text-white text-sm font-semibold">{v}</p>
            <IoIosArrowRoundBack className="absolute right-4 rotate-45 fill-slate-200 text-[2rem]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResponsive;
