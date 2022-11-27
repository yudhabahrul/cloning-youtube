import { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "../components/Header";
import LeftWatchVideo from "../components/LeftWatchVideo";
import RightWatchVideo from "../components/RightWatchVideo";
import { UseWindow } from "../hooks/useWindow";

const WatchPage: NextPage = () => {
  const [windowSize, _setWindowSize] = UseWindow();
  const router = useRouter();

  return (
    <>
      {windowSize > 767 && <Header />}
      <div className="relative w-full flex md:flex-col pt-[5.15rem] md:pt-0 px-24 pr-28 md:px-0 overflow-hidden bg-[#181818] min-h-screen">
        <div className="w-9/12">
          <LeftWatchVideo idVideo={Number(router.query?.v)} />
        </div>
        <div className="-left-3 w-2/6 md:w-full">
          <RightWatchVideo />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
