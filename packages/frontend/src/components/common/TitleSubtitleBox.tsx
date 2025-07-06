interface Props {
  className?: string;
  title: string;
  subtitle: string;
}

const TitleSubtitleBox = ({ className, title, subtitle }: Props) => {
  return (
    <div className={`text-center bg-black/50 px-12 py-5 rounded-lg ${className}`}>
      <span className=
              "lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold transition-[font-size] duration-300 ease-in-out"
      >{title}</span><br/>
      <span className=
              "lg:text-xl md:text-lg sm:text-sm text-xs mt-2 italic transition-[font-size] duration-300 ease-in-out"
      >{subtitle}</span>
    </div>
  );
};

export default TitleSubtitleBox;

