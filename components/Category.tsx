import { MixType } from "../types";

const Category = ({ sidebarIsActive }: MixType) => {
  return (
    <ul
      className={`scroll-category md:left-0 md:px-4 md:border-0 md:w-full md:overflow-x-auto md:justify-start fixed z-20 ${
        sidebarIsActive
          ? "left-60 w-[calc(100%_-_15rem)]"
          : "left-[4.5rem] w-[calc(100%_-_4.5rem)]"
      } top-[3.6rem] md:top-10 space-x-3 bg-[#222222] h-[3.6rem] md:h-[2.5rem] flex items-center justify-center border-b-[0.5px] border-b-gray-700/80`}
    >
      <li
        title="Semua"
        className="text-gray-800 min-w-fit cursor-pointer font-medium text-[0.94rem] md:text-[0.79rem] bg-white p-[0.2rem] px-3 rounded-3xl"
      >
        Semua
      </li>
      <li
        title="Video Mix"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Video Mix
      </li>
      <li
        title="Musik"
        className="text-slate-200  min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Musik
      </li>
      <li
        title="Live"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Live
      </li>
      <li
        title="Game"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Game
      </li>
      <li
        title="Sepak bola"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Sepak bola
      </li>
      <li
        title="Kartun"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Kartun
      </li>
      <li
        title="Memasak"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Memasak
      </li>
      <li
        title="Baru diupload"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Baru diupload
      </li>
      <li
        title="Ditonton"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Ditonton
      </li>
      <li
        title="Baru untuk Anda"
        className="text-slate-200 min-w-fit cursor-pointer transition duration-200 hover:bg-gray-600/90 text-[0.94rem] md:text-[0.79rem] font-medium bg-gray-600/50 p-[0.2rem] px-3 rounded-3xl border-[1px] border-gray-600"
      >
        Baru untuk Anda
      </li>
    </ul>
  );
};

export default Category;
