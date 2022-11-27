import Link from "next/link";
import { AiFillHome, AiOutlineCompass, AiOutlineLike } from "react-icons/ai";
import { SiBbciplayer, SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import {
  BsCollectionPlay,
  BsClock,
  BsFilePlay,
  BsTrophy,
  BsYoutube,
} from "react-icons/bs";
import { ImFilePlay } from "react-icons/im";
import { IoIosTimer, IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown, MdOutlineFlag } from "react-icons/md";
import { GiFilmStrip, GiAerialSignal } from "react-icons/gi";
import { RiGamepadLine } from "react-icons/ri";
import { TiSocialYoutube } from "react-icons/ti";
import { IoTvSharp, IoSettingsOutline } from "react-icons/io5";
import { BiMessageError } from "react-icons/bi";
import { data } from "../data";
import Image, { StaticImageData } from "next/image";
import { BgHome } from "../types";

const SidebarActive = ({ bgHome }: BgHome) => {
  return (
    <div className="scroll md:hidden fixed z-50 left-0 top-[3.6rem] bottom-0 w-60 bg-[#222222] overflow-y-scroll">
      <ul className="mt-2.5 ml-[0.05rem]">
        <Link href="/" passHref>
          <li
            className={`flex items-center space-x-6 ${bgHome} py-[0.62rem] cursor-pointer`}
          >
            <AiFillHome className="text-[22px] fill-white ml-6" />{" "}
            <span className="text-slate-100 font-semibold text-[0.91rem]">
              Beranda
            </span>
          </li>
        </Link>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.4rem] cursor-pointer">
          <AiOutlineCompass className="text-2xl fill-white ml-6" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Eksplorasi
          </span>
        </li>
        <li className="flex items-center space-x-6 hover:bg-gray-600/40 py-[0.62rem] cursor-pointer">
          <SiBbciplayer className="text-xl fill-white ml-[1.7rem]" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Shorts
          </span>
        </li>
        <li className="flex items-center space-x-6 hover:bg-gray-600/40 py-[0.62rem] cursor-pointer">
          <BsCollectionPlay className="text-xl fill-white ml-[1.7rem]" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Subscription
          </span>
        </li>
        <div className="bg-gray-700/80 my-3 h-[0.5px]"></div>
        <li className="flex items-center hover:bg-gray-600/40 space-x-[1.55rem]  py-[0.62rem] cursor-pointer">
          <ImFilePlay className="text-xl fill-white ml-[1.68rem]" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Koleksi
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.38rem] cursor-pointer">
          <IoIosTimer className="text-[1.65rem] fill-white ml-[1.46rem]" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Histori
          </span>
        </li>
        <li className="flex items-center space-x-[1.6rem] hover:bg-gray-600/40 py-[0.62rem] cursor-pointer">
          <BsFilePlay className="text-[1.3rem] fill-white ml-[1.675rem]" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Video Anda
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.55rem] cursor-pointer">
          <BsClock className="text-[1.3rem] fill-white ml-[1.68rem]" />{" "}
          <span className="text-slate-100 font-semibold text-[0.91rem]">
            Tonton nanti
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.45rem] cursor-pointer">
          <AiOutlineLike className="text-2xl fill-white ml-[1.63rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Video yang disukai
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-5 cursor-pointer">
          <MdOutlineKeyboardArrowDown className="text-3xl fill-slate-200 ml-[1.45rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Lebih banyak
          </span>
        </li>
        <div className="bg-gray-700/80 my-2 mb-3 h-[0.5px]"></div>
        <div className="text-gray-400 font-bold text-sm ml-6 mb-2">
          SUBSCRIPTION
        </div>
        {data.video.map((val, idx) => {
          if ((val.id as number) <= 7) {
            return (
              <li
                key={idx}
                className="relative flex items-center cursor-pointer space-x-3 px-[1.65rem] hover:bg-gray-600/40 py-[0.62rem]"
              >
                <div className="absolute w-6 h-6">
                  <Image
                    src={val.image as StaticImageData}
                    alt="Sub-channel"
                    layout="fill"
                    className="absolute object-cover rounded-full"
                  />
                </div>
                <span className="relative left-[2.1rem] text-slate-200 text-[0.91rem] font-semibold w-[7.5rem] truncate">
                  {val.channel}
                </span>
                <span className="absolute right-6 w-1 h-1 bg-blue-400 rounded-full"></span>
              </li>
            );
          }
        })}
        <li className="flex items-center hover:bg-gray-600/40 py-[0.4rem] space-x-5 cursor-pointer">
          <MdOutlineKeyboardArrowDown className="text-3xl fill-slate-200 ml-[1.45rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Tampilkan {data.video.length - 7} lagi
          </span>
        </li>
        <div className="bg-gray-700/80 my-2 mb-3 h-[0.5px]"></div>
        <div className="text-gray-400 font-bold text-sm ml-6 mb-2">
          EKSPLORASI
        </div>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.48rem] cursor-pointer">
          <GiFilmStrip className="text-[1.3rem] fill-white ml-[1.63rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Film
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.37rem] cursor-pointer">
          <RiGamepadLine className="text-2xl fill-slate-200 ml-[1.525rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Game
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.37rem] cursor-pointer">
          <GiAerialSignal className="text-[1.45rem] fill-white ml-[1.535rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Live
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.37rem] cursor-pointer">
          <BsTrophy className="text-xl fill-white ml-[1.7rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Olahraga
          </span>
        </li>
        <div className="bg-gray-700/80 my-2 mb-3 h-[0.5px]"></div>
        <div className="text-gray-400 font-bold text-sm ml-6 mb-2">
          LAINNYA DARI YOUTUBE
        </div>
        <li className="relative flex items-center hover:bg-gray-600/40 py-[0.62rem] pl-[0.275rem] space-x-[1.37rem] cursor-pointer">
          <div className="absolute left-8 bg-white w-2 h-2"></div>
          <BsYoutube className="relative z-10 text-[1.35rem] fill-[#ff0000] ml-[1.65rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            YouTube Premium
          </span>
        </li>
        <li className="relative flex items-center hover:bg-gray-600/40 py-[0.62rem] pl-[0.275rem] space-x-[1.37rem] cursor-pointer">
          <div className="absolute left-8 bg-white w-2 h-2"></div>
          <SiYoutubestudio className="relative z-10 text-[1.35rem] fill-[#ff0000] ml-[1.65rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Creator Studio
          </span>
        </li>
        <li className="relative flex items-center hover:bg-gray-600/40 py-[0.62rem] pl-[0.275rem] space-x-[1.4rem] cursor-pointer">
          <div className="absolute left-[1.9rem] bg-white w-3.5 h-3.5"></div>
          <SiYoutubemusic className="relative z-10 text-[1.35rem] fill-[#ff0000] ml-[1.65rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            YouTube Music
          </span>
        </li>
        <li className="relative flex items-center hover:bg-gray-600/40 py-[0.62rem] pl-[0.275rem] space-x-[1.4rem] cursor-pointer">
          <div className="absolute left-9 bg-white w-2 h-2"></div>
          <TiSocialYoutube className="relative z-10 text-[1.35rem] -rotate-12 fill-[#ff0000] ml-[1.65rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            YouTube Kids
          </span>
        </li>
        <li className="relative flex items-center hover:bg-gray-600/40 py-[0.62rem] pl-[0.4rem] space-x-[1.3rem] cursor-pointer">
          <div className="absolute z-10 left-[2.25rem] top-[1.1rem] border-b-[3.5px] border-b-transparent border-l-[5.5px] border-l-white border-t-[3.5px] border-t-transparent w-0 h-0"></div>
          <IoTvSharp className="relative text-[1.45rem] fill-[#ff0000] ml-[1.65rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            YouTube TV
          </span>
        </li>
        <div className="bg-gray-700/80 my-3 h-[0.5px]"></div>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.36rem] cursor-pointer">
          <IoSettingsOutline className="text-2xl stroke-white ml-[1.625rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Setelan
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.3rem] cursor-pointer">
          <MdOutlineFlag className="text-[1.65rem] fill-slate-100 ml-[1.5rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Histori Laporan
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.25rem] cursor-pointer">
          <IoIosHelpCircleOutline className="text-[1.7rem] fill-white ml-[1.5rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Bantuan
          </span>
        </li>
        <li className="flex items-center hover:bg-gray-600/40 py-[0.62rem] space-x-[1.3rem] cursor-pointer">
          <BiMessageError className="text-2xl fill-slate-200 ml-[1.65rem]" />{" "}
          <span className="text-slate-200 font-semibold text-[0.91rem]">
            Kirim masukan
          </span>
        </li>
        <div className="bg-gray-700/80 my-2 mb-3 h-[0.5px]"></div>
      </ul>
      <p className="text-[0.8rem] text-neutral-400 ml-6 mr-8 font-semibold cursor-pointer">
        Tentang Pers Hak cipta Hubungi kami Kreator Beriklan Developer
      </p>
      <p className="text-[0.8rem] text-neutral-400 ml-6 mr-8 font-semibold my-2.5 cursor-pointer">
        Persyaratan Privasi Kebijakan & Keamanan Cara kerja YouTube Uji fitur
        baru
      </p>
      <p className="text-[0.8rem] text-neutral-500 ml-6 mr-8 my-3.5">
        &copy; 2022 Google LLC
      </p>
    </div>
  );
};

export default SidebarActive;
