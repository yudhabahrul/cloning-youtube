import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { RiSoundModuleFill } from "react-icons/ri";

const SearchCategory = () => {
  const ctx = useContext(AppContext);

  return (
    <>
      <div
        className={`fixed z-50 bg-[#181818] ${
          ctx?.sidebarIsActive ? "w-6 left-60" : "w-[5.5rem] left-[4.5rem]"
        } h-[3.6rem] top-[3.6rem] md:hidden`}
      ></div>
      <div
        className={`scroll-category fixed z-20 ${
          ctx?.sidebarIsActive
            ? "left-[16.5rem] w-[calc(100%_-_16.5rem)]"
            : "left-40 w-[calc(100%_-_10rem)]"
        } top-[3.6rem] bg-[#181818] h-[3.6rem] flex pt-5 border-b-[0.5px] border-b-gray-700/80 md:hidden`}
      >
        <div className="flex gap-2 items-center">
          <RiSoundModuleFill className="text-xl fill-stone-400" />
          <span className="text-stone-400 font-semibold">FILTER</span>
        </div>
      </div>
    </>
  );
};

export default SearchCategory;
