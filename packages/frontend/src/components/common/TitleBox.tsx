interface Props {
  className?: string;
  title: string;
}

const TitleBox = ({ className, title }: Props) => {
  return (
    <div className={`text-center bg-black/50 px-12 py-5 rounded-lg ${className}`}>
      <span className=
              "lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold transition-[font-size] duration-300 ease-in-out"
      >{title}</span>
    </div>
  );
};

export default TitleBox;

