import EndPageListItem from "./EndPageListItem.tsx";
import EndPageButton from "./EndPageButton.tsx";

interface Props {
  selectedIndex: number | null;
  onClick: (index: number) => void;
}

const EndPageListItemsContainer = ({ selectedIndex, onClick }: Props) => {
  const buttons = [
    { title: "Service 1", info: "Info Service 1" },
    { title: "Service 2", info: "Info Service 2" },
    { title: "Service 3", info: "Info Service 3" }
  ];

  return (
    <div className="h-full w-1/3 bg-black/50 lg:px-4 lg:py-2 md:px-3 md:py-1.5 sm:px-2 sm:py-1 px-1 py-0.5 rounded-lg transition[padding] duration-300 ease-in-out">
      <ul className="flex flex-col justify-items-center h-full">
        {buttons.map((button, index) => (
          <EndPageListItem key={index}>
            <EndPageButton
              title={button.title}
              info={button.info}
              isSelected={selectedIndex === index}
              onClick={() => onClick(index)}
            />
          </EndPageListItem>
        ))}
      </ul>
    </div>
  );
};

export default EndPageListItemsContainer;