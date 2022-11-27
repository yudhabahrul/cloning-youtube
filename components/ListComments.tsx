import Image, { StaticImageData } from "next/image";
import { data } from "../data";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

const ListComments = ({ number }: { number: number }) => {
  return (
    <li className="relative flex mr-12">
      <div className="relative w-[2.35rem] h-[2.35rem]">
        <Image
          src={data.video[number]?.image!}
          layout="fill"
          className="rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="absolute ml-[3.25rem]">
        <div className="flex items-center space-x-1.5">
          <p className="text-white text-[0.825rem] font-medium">Yudha Bahrul</p>
          <p className="text-gray-400 text-[0.8rem]">3 bulan yang lalu</p>
        </div>
        <p className="text-slate-200 text-sm font-medium mt-0.5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi qui
          accusamus vitae vero, quo praesentium!
        </p>
        <ul className="flex items-center space-x-5 mt-3">
          <li className="flex items-center font-medium text-[0.95rem] space-x-2">
            <AiOutlineLike className="cursor-pointer fill-white" />{" "}
            <span className="text-gray-400 text-[0.8rem]">403</span>
          </li>
          <li className="font-medium text-[0.95rem]">
            <BiDislike className="cursor-pointer fill-slate-50" />
          </li>
          <li className="text-gray-400 text-xs font-semibold cursor-pointer">
            BALAS
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ListComments;
