interface Props {
  title: string;
  info: string;
  isSelected: boolean;
  onClick: () => void;
}

const EndPageButton = ({ title, info, isSelected, onClick }: Props) => {
  return (
    <button
      className=
        {`h-full w-full flex flex-col items-center hover:scale-105 justify-center transition duration-300 rounded-md cursor-pointer transform ${
        isSelected ? "scale-105 bg-[#DCC6B2] text-black/50" : "hover:bg-[#DCC6B2] hover:text-black/50"
      }`}
      onClick={onClick}
    >
      <span className="lg:text-2xl md:text-xl sm:text-lg text-sm transition-[font-size] duration-300 ease-in-out px-6">
        {title}
      </span>
      <span className="lg:text-base md:text-sm text-xs transition-[font-size] duration-300 ease-in-out">{info}</span>
    </button>
  );
};

export default EndPageButton;