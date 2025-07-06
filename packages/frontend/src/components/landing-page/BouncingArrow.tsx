import {useEffect, useState} from "react";

const BouncingArrow = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setOpacity(1);
        return;
      }

      setOpacity((window.innerHeight / window.scrollY) / 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="absolute pl-1.5 top-10/12 mt-8 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white"
        className="w-10 h-10 transition-opacity duration-100"
        style={{ opacity }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default BouncingArrow;
