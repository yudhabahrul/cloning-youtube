import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import {
  useState,
  useContext,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { AppContext } from "../contexts/AppContext";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdMic } from "react-icons/md";
import { BsGrid3X3Gap, BsBell } from "react-icons/bs";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { data } from "../data";
import { MixType } from "../types";
import img1 from "../public/images/logo.png";

const Header = ({ sidebarIsActive, className }: MixType) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const ctx = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.split("?")[0] === "/searchPage") {
      ctx?.handleSearchValue?.(router.query.search_query as string);
    } else if (router.asPath.split("?")[0] === "/") {
      ctx?.handleSearchValue?.("");
    }
  }, [router.query.search_query]);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    ctx?.handleSearchValue?.(e.target.value);
  };

  const handleButtonClick = () => {
    if (searchValue) {
      ctx?.handleIsSearch?.(true);
      if (router.asPath === "/searchPage") {
        ctx?.handleSearchValue?.(searchValue);
      } else {
        ctx?.handleSearchValue?.(searchValue);
        router.push(`/searchPage?search_query=${searchValue}`);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchValue) {
        ctx?.handleIsSearch?.(true);
        if (router.asPath === "/searchPage") {
          ctx?.handleSearchValue?.(searchValue);
        } else {
          ctx?.handleSearchValue?.(searchValue);
          router.push(`/searchPage?search_query=${searchValue}`);
        }
      }
    }
  };

  const handleFocus = () => {
    setIsDisplay(true);
  };

  const handleBlur = () => {
    setIsDisplay(false);
  };

  return (
    <header
      className={`fixed flex ${
        sidebarIsActive
          ? "w-[calc(100%_-_15rem)] left-60"
          : "w-[calc(100%_-_4.5rem)] left-[4.5rem]"
      } justify-between items-center h-[3.6rem] md:h-10 z-20 top-0 w-full bg-[#222222] ${className}  border-b-gray-700/80 md:border-0 md:border-b-0 md:w-full md:left-0`}
    >
      <div
        className={`fixed top-0 left-0 bg-[#222222] ${
          sidebarIsActive ? "w-60" : "w-[4.5rem]"
        } h-[3.6rem] md:hidden`}
      ></div>
      <div className="fixed left-[1.55rem] md:left-4 flex items-center cursor-pointer">
        <AiOutlineMenu
          className="md:hidden fill-white text-[22px] mx-auto cursor-pointer mr-6"
          onClick={() => ctx?.handleSidebar?.(ctx?.sidebarIsActive)}
        />
        <div className="relative w-8 h-8">
          <Image src={img1} alt="Youtube" layout="fill" />
        </div>
        <h3 className="text-white text-xl font-semibold  tracking-tighter">
          YouTube
        </h3>
      </div>
      <div className="md:hidden w-[43%]  h-10 flex items-center fixed left-[33.5%]">
        {isDisplay && (
          <div className="absolute -left-[21.6%] w-10 z-20 bg-[#131212] h-full border-t-[0.7px] border-l-[0.7px] border-b-[0.7px] border-r-0 border-blue-700">
            <AiOutlineSearch className="relative fill-slate-100 text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
          </div>
        )}
        <input
          value={ctx?.searchValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearchValue}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Telusuri"
          className="absolute z-10 right-[19%] w-[97%] h-full text-slate-300 font-semibold bg-[#131212] outline-none border-[0.7px] pl-2 caret-white placeholder:font-normal placeholder:text-gray-400 border-gray-700/80 focus:border-blue-700"
        />
        <button
          onClick={handleButtonClick}
          type="button"
          className="absolute right-[9%] w-[10%] flex justify-center items-center outline-0 bg-gray-600/40 h-full border-slate-700"
        >
          <AiOutlineSearch className="fill-slate-100 text-2xl" />
          {""}
        </button>
        <div className="absolute cursor-pointer right-0 w-10 h-10 bg-[#131212] rounded-full flex justify-center items-center">
          <MdMic className="fill-slate-100 text-[1.4rem]" />
        </div>
      </div>
      <ul className="fixed right-0 md:right-2 flex items-center space-x-7 md:space-x-5 mr-8 md:mr-2">
        <li>
          <VscDeviceCameraVideo className="fill-slate-100 text-[1.7rem] md:text[1.6rem] cursor-pointer md:-mr-4" />
        </li>
        <li>
          <BsGrid3X3Gap className="md:hidden fill-white text-xl cursor-pointer" />
        </li>
        <li>
          <BsBell className="fill-white text-[1.1rem] md:text-xl cursor-pointer" />
        </li>
        <li className="hidden md:block">
          <AiOutlineSearch
            className="fill-slate-200 text-[1.4rem] cursor-pointer"
            onClick={() => ctx?.handleDisplaySearch?.(true)}
          />
        </li>
        <li className="relative w-8 h-8 md:w-7 md:h-7 flex justify-center items-center">
          <Image
            src={data.video[0].image as StaticImageData}
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover cursor-pointer"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
