import TitleBox from "../common/TitleBox.tsx";
import {useEffect, useState} from "react";
import TextBox from "../common/TextBox.tsx";

interface Text {
  id: number;
  title: string;
  content: string;
}

const AboutMePage = () => {
  const [texts, setTexts] = useState<Text[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/texts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Text[]) => {
        setTexts(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Lade Texte...</p>;
  }
  
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#A48F74] to-[#DCC6B2] text-[#DCC6B2] relative">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <TitleBox className="absolute top-1/10" title="About me"/>
        {error ? (
          <p className="text-xl">Error: {error}</p>
        ) : (
          <div className="absolute top-1/4 flex justify-center gap-8 mx-8">
            {texts.map((text) => (
              <TextBox text={text.content} key={text.id}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMePage;
