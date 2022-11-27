import { useRouter } from "next/router";
import {
  useState,
  useEffect,
  useContext,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { AppContext } from "../contexts/AppContext";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { MdMic } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";

const HeaderSearch = () => {
  const router = useRouter();
  const ctx = useContext(AppContext);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (router.asPath.split("?")[0] === "/searchPage") {
      ctx?.handleSearchValue?.(router.query.search_query as string);
    }
  }, [router.query.search_query]);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    ctx?.handleSearchValue?.(e.target.value);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchValue) {
        router.push(`/searchPage?search_query=${searchValue}`);
      }
    }
  };

  const handleIconClose = () => {
    ctx?.handleSearchValue?.("");
    ctx?.handleDisplaySearch?.(true);
  };

  const handleFocus = () => {
    ctx?.handleDisplaySearch?.(true);
  };

  return (
    <div className="fixed top-0 z-10 w-screen bg-[#181818] h-[3rem] pl-4 pt-1">
      <div className="flex items-center">
        <IoIosArrowRoundBack
          onClick={() => router.back()}
          className="fill-slate-200 text-[2.5rem]"
        />
        <div className="relative w-3/5 h-7">
          <input
            type="text"
            placeholder="Telusuri YouTube"
            value={ctx?.searchValue}
            onChange={handleSearchValue}
            onKeyDown={handleOnKeyDown}
            onFocus={handleFocus}
            className="bg-gray-700 w-full h-full pr-9 border-0 outline-0 text-sm ml-3 text-white caret-[#ff0000]  pl-2 pb-1"
          />
          <VscClose
            onClick={handleIconClose}
            className="absolute top-1/2 -translate-y-1/2 -right-2 fill-slate-200 text-[1.45rem]"
          />
        </div>
        <div className="flex items-center space-x-5 ml-7 mr-2">
          <div className="cursor-pointer w-[1.8rem] h-[1.8rem] bg-gray-600/40 rounded-full flex justify-center items-center">
            <MdMic className="fill-slate-100 text-xl" />
          </div>
          <BsGrid3X3Gap className="fill-white text-xl cursor-pointer" />
          <div className="flex space-x-[3px] rotate-90 cursor-pointer">
            <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-gray-300"></div>
            <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-gray-300"></div>
            <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-gray-300"></div>
          </div>
        </div>

        {searchValue && (
          <div className="hidden relative z-20 cursor-pointer w-[2.9rem] h-[2.25rem] -ml-0.5 bg-gray-700 items-center">
            <VscClose
              onClick={() => setSearchValue("")}
              className="absolute right-1 fill-slate-200 text-[1.75rem]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSearch;
