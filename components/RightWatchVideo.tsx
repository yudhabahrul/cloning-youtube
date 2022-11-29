import { useState } from "react";
import ListWatchVideo from "./ListWatchVideo";
import ListVideo from "./ListVideo";
import { data } from "../data";
import { UseWindow } from "../hooks/useWindow";

const RightWatchVideo = () => {
  const [windowSize, _setWindowSize] = UseWindow();
  const [scrollTop, setScrollTop] = useState<number>(0);

  window.addEventListener("scroll", () => {
    setScrollTop(document.documentElement.scrollTop);
  });

  return (
    <div className="w-full">
      <ul
        className={`space-x-3 flex items-center mb-5 transition-all duration-500 md:fixed md:bg-[#181818] md:py-2.5 md:px-3 md:w-full md:justify-center md:top-52 md:border-b-[0.7px] md:border-b-gray-700/80 top-0 z-50 ${
          windowSize < 767 && scrollTop > 240
            ? "opacity-100"
            : windowSize < 767
            ? "opacity-0"
            : windowSize > 767
            ? "opacity-100"
            : ""
        }`}
      >
        <li
          title="Semua"
          className="text-gray-800 min-w-fit md:w-[25%] text-center cursor-pointer font-medium text-[0.94rem] md:text-[0.85rem] md:p-[0.2rem] md:px-1.5 bg-white p-1 px-3 rounded-3xl"
        >
          Semua
        </li>
        <li
          title="Video Mix"
          className="text-slate-200 min-w-fit md:w-[25%] text-center cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.85rem] md:p-[0.2rem] md:px-1.5 font-medium bg-gray-600/50 p-1 px-3 rounded-3xl border-[1px] border-gray-600"
        >
          Terkait
        </li>
        <li
          title="Musik"
          className="text-slate-200  min-w-fit md:w-[25%] text-center cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.85rem] md:p-[0.2rem] md:px-1.5 font-medium bg-gray-600/50 p-1 px-3 rounded-3xl border-[1px] border-gray-600"
        >
          Baru diupload
        </li>
        <li
          title="Musik"
          className="text-slate-200  min-w-fit md:w-[25%] text-center cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.85rem] md:p-[0.2rem] md:px-1.5 font-medium bg-gray-600/50 p-1 px-3 rounded-3xl border-[1px] border-gray-600"
        >
          Ditonton
        </li>
      </ul>
      {data.video.map((val, idx) => (
        <div className="mb-3" key={idx}>
          {windowSize < 767 ? (
            <ListVideo data={val} />
          ) : (
            <ListWatchVideo data={val} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RightWatchVideo;
