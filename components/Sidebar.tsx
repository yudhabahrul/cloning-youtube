import Link from "next/link";
import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import { SiBbciplayer } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { ImFilePlay } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="fixed md:hidden z-40 h-full left-0 top-[3.6rem] bottom-0 w-[4.5rem] bg-[#222222]">
      <nav className="mt-1.5">
        <Link
          href="/"
          title="Beranda"
          className="block text-center  py-3.5 hover:bg-gray-600/40"
        >
          <AiFillHome className="fill-white text-[22px] mx-auto" />{" "}
          <span className="text-white text-[10.3px]">Beranda</span>
        </Link>
        <Link
          href="/"
          title="Eksplorasi"
          className="block text-center  py-3.5 hover:bg-gray-600/40"
        >
          <AiOutlineCompass className="fill-white text-2xl mx-auto" />{" "}
          <span className="text-white text-[10.3px]">Eksplorasi</span>
        </Link>
        <Link
          href="/"
          title="Shorts"
          className="block text-center  py-3.5 hover:bg-gray-600/40"
        >
          <SiBbciplayer className="fill-white text-xl mx-auto" />{" "}
          <span className="text-white text-[10.3px]">Shorts</span>
        </Link>
        <Link
          href="/"
          title="Subsription"
          className="block text-center  py-3.5 hover:bg-gray-600/40"
        >
          <BsCollectionPlay className="fill-white text-xl mx-auto" />{" "}
          <span className="text-white text-[10.3px]">Subscription</span>
        </Link>
        <Link
          href="/"
          title="Koleksi"
          className="block text-center  py-3.5 hover:bg-gray-600/40"
        >
          <ImFilePlay className="fill-white text-xl mx-auto" />{" "}
          <span className="text-white text-[10.3px]">Koleksi</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
