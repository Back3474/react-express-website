import './App.css'
import LandingPage from './components/landing-page/LandingPage'
import AboutMePage from './components/about-me-page/AboutMePage'
import EndPage from './components/end-page/EndPage'

const App = () => {
  return (
    <div className="font-display test relative bg-gradient-to-b from-[#A48F74] to-[#DCC6B2] min-h-screen">
      <LandingPage />
      <AboutMePage />
      <EndPage />
    </div>
  );
};

export default App;
