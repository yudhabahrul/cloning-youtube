import { data } from "../data";
import ListVideo from "./ListVideo";
import { MixType } from "../types";

const Content = ({ sidebarIsActive }: MixType) => {
  return (
    <>
      <div
        className={`z-10 grid grid-cols-4 md:grid-cols-1 gap-4 relative ${
          sidebarIsActive
            ? "left-60 w-[calc(100%_-_15rem)] gap-y-8"
            : "left-[4.5rem] w-[calc(100%_-_4.5rem)]"
        } p-6 bg-[#181818] top-[7.2rem] gap-y-10 md:left-0 md:top-20 md:gap-y-4 md:w-full md:p-0 md:pb-20`}
      >
        {data.video?.map((val) => (
          <div key={val.id}>
            <ListVideo data={val} sidebarIsActive={sidebarIsActive} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
