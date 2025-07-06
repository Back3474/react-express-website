import EndPageListItemsContainer from "./EndPageListItemsContainer.tsx";
import EndPageInfoContainer from "./EndPageInfoContainer.tsx";
import { useState } from "react";
import TitleBox from "../common/TitleBox.tsx";

const EndPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DCC6B2] text-[#DCC6B2] relative">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <TitleBox className="absolute top-1/10" title="Services" />

        <div className=
              "absolute h-2/3 lg:w-2/3 md:w-5/6 w-6/7 top-1/4 flex justify-center lg:gap-8 md:gap-6 sm:gap-4 gap-2 transition-all duration-300 ease-in-out">
          <EndPageListItemsContainer selectedIndex={selectedIndex} onClick={handleButtonClick} />
          <EndPageInfoContainer selectedIndex={selectedIndex} />
        </div>
      </div>
    </div>
  );
};

export default EndPage;