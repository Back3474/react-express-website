import TextBox from "../common/TextBox.tsx";
import TitleSubtitleBox from "../common/TitleSubtitleBox.tsx";
import LandingPageBackground from "./LandingPageBackground.tsx";
import BouncingArrow from "./BouncingArrow.tsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#A48F74] text-[#DCC6B2] relative">
      <LandingPageBackground />

      <TitleSubtitleBox 
        className="absolute justify-self-center" 
        title="Firstname Lastname" 
        subtitle="Lorem — ipsum — dolor" />
      
      <TextBox 
        className="absolute top-6/10" 
        text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
        "sed diam nonumy eirmod tempor invidunt ut labore et dolore."}/>
      
      <BouncingArrow />
    </div>
  );
};

export default LandingPage;