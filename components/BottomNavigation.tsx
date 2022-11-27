import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { SiBbciplayer } from "react-icons/si";
import { BsCollectionPlay, BsPlusCircle } from "react-icons/bs";
import { ImFilePlay } from "react-icons/im";

const BottomNavigation = () => {
  return (
    <nav className="fixed z-30 bottom-0 w-full space-x-7 px-8 justify-center bg-[#222222] flex items-center py-1 scale-0 md:scale-100">
      <Link className="flex flex-col items-center" href="/">
        <AiFillHome className="fill-white text-[1.35rem] mb-0.5" />{" "}
        <span className="text-white text-[10.3px]">Beranda</span>
      </Link>
      <Link className="flex flex-col items-center space-y-1" href="/">
        <SiBbciplayer className="fill-white text-[1.2rem] mt-1" />{" "}
        <span className="text-white text-[10.3px]">Shorts</span>
      </Link>
      <Link className="" href="/">
        <BsPlusCircle className="fill-slate-100 text-3xl -mt-1.5" />{" "}
      </Link>
      <Link title="Subsription" className="flex flex-col items-center" href="/">
        <BsCollectionPlay className="fill-white text-[1.35rem] mb-0.5" />{" "}
        <span className="text-white text-[10.3px]">Subscription</span>
      </Link>
      <Link title="Koleksi" className="flex flex-col items-center" href="/">
        <ImFilePlay className="fill-white text-[1.3rem] mb-0.5" />{" "}
        <span className="text-white text-[10.3px]">Koleksi</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
