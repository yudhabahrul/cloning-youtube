import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MixType } from "../types";

const ListWatchVideo = ({ data }: MixType) => {
  const title: string[] = data?.title?.split(" ") || [];
  let titleLine1: string = "";
  let titleLine2: string = "";

  for (let i = 0; i <= title.length; i++) {
    if (title.slice(0, i).join(" ").length <= 24) {
      titleLine1 = title.slice(0, i).join(" ");
    } else {
      titleLine2 = title.slice(i - 1).join(" ");
      break;
    }
  }

  return (
    <Link href={`/watchPage?v=${data?.id}`} passHref>
      <div className="flex space-x-2 cursor-pointer">
        <div className="w-[44%]">
          <div className="relative w-full h-24">
            <Image
              src={data?.image as StaticImageData}
              alt="Thumbnail"
              layout="fill"
            />
          </div>
        </div>
        <div className="w-[55%]">
          <h1 className="text-white text-sm font-medium">{titleLine1}</h1>
          <h1 className="truncate text-white text-sm font-medium">
            {titleLine2}
          </h1>
          <div className="text-gray-400 text-[0.83rem] mt-1">
            <span>{data?.channel}</span>
          </div>
          <div className="flex flex-wrap text-gray-400 text-[0.8rem]">
            <span>{data?.view}</span>
            <span className="font-bold text-[1rem] mt-[-0.35rem] mx-1">.</span>
            <span>{data?.timeUpload}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListWatchVideo;
