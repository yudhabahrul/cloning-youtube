import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { UseWindow } from "../hooks/useWindow";
import { MixType } from "../types";
import { BsCheck } from "react-icons/bs";

const ListVideo = ({ data, sidebarIsActive }: MixType) => {
  const [windowSize, _setWindowSize] = UseWindow();
  const router = useRouter();
  const title: string[] = data?.title?.split(" ") || [];
  let titleLine1: string = "";
  let titleLine2: string = "";

  for (let i = 0; i <= title.length; i++) {
    if (
      title.slice(0, i).join(" ").length <=
      (windowSize <= 413 && windowSize >= 0
        ? 50
        : windowSize <= 767 && windowSize > 413
        ? 110
        : sidebarIsActive
        ? 24
        : 29)
    ) {
      titleLine1 = title.slice(0, i).join(" ");
    } else {
      titleLine2 = title.slice(i - 1).join(" ");
      break;
    }
  }

  return (
    <Link href={`/watchPage?v=${data?.id}`} passHref>
      <div
        className={`cursor-pointer ${
          router.pathname === "/watchPage" && windowSize < 767 ? "mb-6" : ""
        }`}
      >
        <div
          className={`relative ${
            sidebarIsActive ? "h-36" : "h-40"
          } sm_2:h-44 md:h-52`}
        >
          <Image
            src={data?.image as StaticImageData}
            alt="Thumbnail"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute right-1 bottom-[0.2rem] bg-[rgba(0,0,0,0.84)]  p-[1.5px] px-1 text-[0.7rem] font-semibold text-white">
            {data?.time}
          </div>
        </div>
        <div className="relative w-9 h-9 md:ml-3 mt-2">
          <Image
            src={data?.profile || ""}
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div className="mt-[0.75rem]">
          <div className="relative ml-12 md:ml-[3.75rem] mt-[-3.15rem] text-slate-100 text-[0.9rem] sm_2:text-[0.72rem] md:text-[0.825rem] font-semibold pr-4 md:pr-9">
            <p className="">{titleLine1} </p>
            <p className="truncate">{titleLine2}</p>
            <div className="mt-[0.3rem] md:mt-[0.2rem] text-gray-400 text-[0.72rem]">
              <div className="flex items-center space-x-1.5">
                <span>{data?.channel}</span>
                {data?.verified && (
                  <span className="w-3 h-3 rounded-full bg-gray-400 grid place-content-center font-bold mt-1">
                    <BsCheck className="text-gray-800 text-xs font-black" />
                  </span>
                )}
              </div>
              <div className="flex flex-wrap">
                <span>{data?.view}</span>
                <span className="font-bold text-[0.72rem] mt-[-0.35rem] mx-1">
                  .
                </span>
                <span>{data?.timeUpload}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListVideo;
