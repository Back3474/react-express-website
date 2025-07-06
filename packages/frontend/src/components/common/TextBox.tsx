interface Props {
  className?: string;
  text: string;
}

const TextBox = ({ text, className }: Props) => {
  return (
    <div className={`text-center bg-black/50 px-6 py-4 rounded-lg ${className}`}>
      <span className=
              "lg:text-2xl md:text-xl sm:text-lg text-sm whitespace-pre-line transition-[font-size] duration-300 ease-in-out"
      >{text}</span>
    </div>
  );
};

export default TextBox;
