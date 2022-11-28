import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from "react";
import ListComments from "./ListComments";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike, BiMenuAltLeft, BiCut } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { IPROPS } from "../types";
import { data } from "../data";

const LeftWatchVideo = ({ idVideo }: { idVideo: number }) => {
  const [dVideo, setDVideo] = useState<IPROPS>({
    title: "",
    channel: "",
    profile: "",
    view: "",
  });
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [heightTextArea, setHeightTextArea] = useState<number>(1.7);
  const [totalLine, setTotalLine] = useState<number>(1);
  const [valueTextArea, setValueTextArea] = useState<string>("");
  const [displayListComments, setDisplayListComments] =
    useState<boolean>(false);
  const router = useRouter();
  const ref = useRef<HTMLTextAreaElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const SetVideoById = () => {
      const detailVideo = data?.video?.filter((d) => d.id === idVideo);
      setDVideo(detailVideo[0]);
    };

    SetVideoById();

    videoRef.current?.play();
  }, [idVideo]);

  useEffect(() => {
    videoRef.current!.currentTime = 0;
  }, [router.query.v]);

  useEffect(() => {
    if (!valueTextArea) {
      setHeightTextArea(1.7);
      setTotalLine(1);
    }
  }, [valueTextArea]);

  const handleFocus = () => {
    setIsDisplay(true);
    setDisplayListComments(true);
  };

  const handleBlur = () => {
    setIsDisplay(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setHeightTextArea((prev) => prev + 1.35);
      setTotalLine((prev) => prev + 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if ((ref.current?.value.split("\n").length as number) < totalLine) {
      setHeightTextArea((prev) => prev - 1.35);
      setTotalLine((prev) => prev - 1);
    }
    setValueTextArea(e.target.value);
  };

  const handleCancleComment = () => {
    setValueTextArea("");
    setDisplayListComments(false);
  };

  return (
    <div className="w-full md:w-screen">
      <video
        width={740}
        height={740}
        controls
        ref={videoRef}
        className="outline-none md:w-full object-fill md:h-52 md:fixed md:top-0 md:left-0 z-30"
      >
        <source src="videos/video.mp4" />
      </video>
      <h1 className="text-slate-100 text-lg md:text-sm font-medium mt-4 md:mt-[13.5rem] md:ml-4 md:mr-3">
        {dVideo?.title}
      </h1>
      <div className="relative flex md:flex-col items-center md:items-start -mt-0.5 md:-mt-2.5 md:pl-4">
        <p className="text-gray-400 text-[0.905rem] md:text-[0.72rem]">
          {dVideo?.view}
          <span className="relative top-[-0.2rem] text-2xl">.</span> 14 Agu 2022
        </p>
        <ul className="scroll-item flex items-center space-x-7 ml-7 md:ml-0.5 mt-2 md:mt-5 xs:mt-1 md:overflow-y-scroll md:w-full">
          <li className="flex md:flex-col items-center space-x-2 md:space-x-0 md:space-y-1.5 cursor-pointer">
            <AiOutlineLike className="fill-slate-50 text-[1.2rem]" />{" "}
            <span className="text-white font-medium text-sm md:text-xs">6</span>
          </li>
          <li className="flex md:flex-col items-center space-x-2 md:space-x-0 md:text-center md:space-y-1.5 xs:mt-5 cursor-pointer">
            <BiDislike className="fill-slate-100 text-[1.2rem]" />{" "}
            <span className="text-white font-medium text-sm md:text-[0.7rem]">
              TIDAK SUKA
            </span>
          </li>
          <li className="flex md:flex-col items-center space-x-2 md:space-x-0 md:space-y-1.5 cursor-pointer">
            <RiShareForwardLine className="fill-slate-100 text-xl" />{" "}
            <span className="text-white font-medium text-sm md:text-[0.7rem]">
              BAGIKAN
            </span>
          </li>
          <li className="flex md:flex-col items-center space-x-2 md:space-x-0 md:space-y-1.5 cursor-pointer">
            <BiCut className="fill-slate-100 text-xl" />{" "}
            <span className="text-white font-medium text-sm md:text-[0.7rem]">
              KLIP
            </span>
          </li>
          <li className="flex md:flex-col items-center space-x-2 md:space-x-0 md:space-y-1.5 cursor-pointer">
            <MdPlaylistAdd className="fill-slate-200 text-2xl" />{" "}
            <span className="text-white font-medium text-sm md:text-[0.7rem]">
              SIMPAN
            </span>
          </li>
        </ul>
        <div className="absolute right-9 flex space-x-[3px] mt-3 cursor-pointer md:hidden">
          <div className="w-[0.185rem] h-[0.185rem] rounded-full bg-gray-300"></div>
          <div className="w-[0.185rem] h-[0.185rem] rounded-full bg-gray-300"></div>
          <div className="w-[0.185rem] h-[0.185rem] rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div className="bg-gray-700/80 my-4 mb-5 mr-7 md:mb-3 h-[0.5px] md:w-full"></div>
      <div className="flex justify-between items-center mr-7 md:mr-5 md:ml-4">
        <div className="flex items-center space-x-4 md:space-x-2.5 leading-5">
          <div className="relative w-11 h-11 md:w-9 md:h-9">
            <Image
              src={
                dVideo?.profile
                  ? (dVideo?.profile as StaticImageData)
                  : (data?.video[0]?.profile as StaticImageData)
              }
              layout="fill"
              className="rounded-full object-cover"
              alt="profil"
            />
          </div>
          <div>
            <h2 className="text-slate-100 font-medium text-sm">
              {dVideo?.channel}
            </h2>
            <p className="text-gray-400 text-[0.72rem]">1.2 jt subscriber</p>
          </div>
        </div>
        <button className="bg-[#d11010] md:bg-transparent md:text-[#d11010] md:text-sm md:font-semibold text-white font-medium p-[0.575rem] px-5 md:px-0 rounded-sm text-sm border-0 outline-none">
          SUBSCRIBE
        </button>
      </div>
      <p className="text-slate-100 text-[0.95rem] mt-4 ml-[3.85rem] mr-24 md:hidden">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
        voluptatem reiciendis deleniti pariatur, sit fuga molestiae obcaecati
        ratione natus doloribus, aspernatur sint fugit magni quia porro
        quibusdam nulla provident impedit inventore enim unde ipsam deleniti
      </p>
      <p className="text-gray-400 text-xs mt-2.5 ml-[3.85rem] font-medium cursor-pointer md:hidden">
        LEBIH BANYAK
      </p>
      <div className="bg-gray-700/80 my-5 md:my-3 mb-5 h-[0.5px] mr-7 md:mr-0"></div>
      <div className="flex items-center space-x-8 md:hidden">
        <p className="text-slate-100 text-[1.05rem] font-medium">
          174 Komentar
        </p>
        <div className="flex items-center space-x-2 cursor-pointer">
          <BiMenuAltLeft className="fill-slate-100 text-3xl" />
          <span className="text-slate-100 text-sm font-medium">URUTKAN</span>
        </div>
      </div>
      <div className="flex mt-6 space-x-3.5 mr-7 md:hidden">
        <div className="relative w-10 h-10">
          <Image
            src={data.video[0].image as StaticImageData}
            layout="fill"
            className="rounded-full object-cover"
            alt=""
          />
        </div>
        <div
          className="relative w-full"
          style={{ height: heightTextArea + "rem" }}
        >
          <textarea
            value={valueTextArea}
            ref={ref}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Tambahkan komentar..."
            className={`w-full h-full resize-none overflow-y-hidden border-b-[0.5px] border-b-gray-700/80 bg-transparent outline-none placeholder:text-[0.95rem] placeholder:car text-[0.95rem] text-white caret-white`}
          />
          <div
            className={`absolute origin-center ${
              isDisplay
                ? "scale-100 duration-[350ms] transition-all"
                : "scale-0"
            } w-full bottom-0 h-0.5 bg-white`}
          />
        </div>
      </div>
      {displayListComments && (
        <div
          className={`flex justify-between items-center ${
            valueTextArea.split("\n").length > 1 ? "mt-2" : "-mt-1.5"
          } mr-9`}
        >
          <BsEmojiLaughing className="fill-slate-100 text-lg ml-[3.25rem] cursor-pointer" />
          <div className="flex space-x-7">
            <button
              type="button"
              onClick={handleCancleComment}
              className="border-0 outline-0 text-[0.925rem] text-neutral-400 font-medium"
            >
              BATAL
            </button>
            <button
              type="button"
              className={`${
                valueTextArea
                  ? "bg-blue-500 text-black"
                  : "bg-gray-500/25 text-neutral-500"
              } text-[0.925rem] p-2 px-4 font-medium`}
            >
              KOMENTAR
            </button>
          </div>
        </div>
      )}
      <div className="relative hidden md:block px-4 pb-5 border-b-8 border-gray-700">
        <p className="text-white mb-3 text-sm">
          Komentar <span className="text-gray-400 ml-2">174</span>
        </p>
        <div className="flex items-center">
          <div className="relative w-8 h-8">
            <Image
              src={data.video[0].image as StaticImageData}
              layout="fill"
              className="rounded-full object-cover"
              alt=""
            />
          </div>
          <p className="absolute left-[3.75rem] text-slate-200 text-xs font-medium mt-0.5 mr-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            qui accusamus vitae vero, quo praesentium!
          </p>
        </div>
      </div>
      <ul className="space-y-20 mt-9 md:hidden">
        {[...Array(6)].map((val, idx) => (
          <ListComments key={idx} number={idx + 1} />
        ))}
      </ul>
    </div>
  );
};

export default LeftWatchVideo;
