import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MixType } from "../types";
import { BsCheck } from "react-icons/bs";

const SearchListVideo = ({ data, sidebarIsActive }: MixType) => {
  const title: string[] = data?.title?.split(" ") || [];
  let titleLine1: string = "";
  let titleLine2: string = "";

  for (let i = 0; i <= title.length; i++) {
    if (title.slice(0, i).join(" ").length <= (sidebarIsActive ? 70 : 80)) {
      titleLine1 = title.slice(0, i).join(" ");
    } else {
      titleLine2 = title.slice(i - 1).join(" ");
      break;
    }
  }

  return (
    <Link href={`/watchPage?v=${data?.id}`} passHref>
      <div className="flex cursor-pointer">
        <div className="w-[40%]">
          <Image
            src={data?.image as StaticImageData}
            alt="Thumbnail"
            width={365}
            height={200}
          />
        </div>
        <div className={`${sidebarIsActive ? "w-[63%]" : "w-[66.35%]"}`}>
          <h1 className=" text-white text-xl">{titleLine1}</h1>
          <h1 className=" text-white text-xl">{titleLine2}</h1>
          <div className="flex flex-wrap text-gray-400 text-[0.83rem]">
            <span>{data?.view}</span>
            <span className="font-bold text-[1rem] mt-[-0.35rem] mx-1">.</span>
            <span>{data?.timeUpload}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400 text-[0.83rem] my-3 mt-4">
            <div className="relative w-6 h-6 md:ml-3 ">
              <Image
                src={data?.profile || ""}
                alt="Profile"
                layout="fill"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <span>{data?.channel}</span>
            {data?.verified && (
              <span className="w-3 h-3 rounded-full bg-gray-400 grid place-content-center font-bold mt-1">
                <BsCheck className="text-gray-800 text-[0.9rem] font-black" />
              </span>
            )}
          </div>
          <p className="text-gray-400 text-[0.83rem] truncate">
            {data?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchListVideo;
