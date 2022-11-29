import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { SiBbciplayer } from "react-icons/si";
import { BsCollectionPlay, BsPlusCircle } from "react-icons/bs";
import { ImFilePlay } from "react-icons/im";

const BottomNavigation = () => {
  return (
    <nav className="fixed z-30 bottom-0 w-full justify-center bg-[#222222] flex items-center py-1 scale-0 md:scale-100">
      <Link
        className="w-1/5 flex flex-col items-center justify-center space-y-0.5"
        href="/"
      >
        <AiFillHome className="fill-white text-[1.35rem]" />{" "}
        <span className="text-white text-[10.3px]">Beranda</span>
      </Link>
      <Link
        className="w-1/5 flex flex-col items-center justify-center space-y-1"
        href="/"
      >
        <SiBbciplayer className="fill-white text-[1.2rem]" />{" "}
        <span className="text-white text-[10.3px]">Shorts</span>
      </Link>
      <Link className="w-1/5 flex items-center justify-center" href="/">
        <BsPlusCircle className="fill-slate-100 text-3xl -mt-1.5" />{" "}
      </Link>
      <Link
        title="Subsription"
        className="w-1/5 flex flex-col items-center justify-center space-y-0.5"
        href="/"
      >
        <BsCollectionPlay className="fill-white text-[1.35rem]" />{" "}
        <span className="text-white text-[10.3px]">Subscription</span>
      </Link>
      <Link
        title="Koleksi"
        className="w-1/5 flex flex-col items-center justify-center space-y-0.5"
        href="/"
      >
        <ImFilePlay className="fill-white text-[1.3rem]" />{" "}
        <span className="text-white text-[10.3px]">Koleksi</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
