import EarthScene from "./components/Earth";
import JupiterScene from "./components/Jupiter";
import MarsScene from "./components/Mars";
import MercuryScene from "./components/Mercury";
import Navbar from "./components/Navbar";
import NeptuneScene from "./components/Neptune";
import SaturnScene from "./components/Saturn";
import Starfield from "./components/Star";
import UranusScene from "./components/Uranus";
import VenusScene from "./components/venus";

function App() {
  return (
    <>
      <div className=" relative w-full h-screen">
        <Starfield />
        <div className="absolute inset-0">
          <Navbar />
        </div>
        <div className="absolute inset-0 ">
          <div>
            <MercuryScene />
          </div>
          <div>
            <VenusScene />
          </div>
          <div>
            <EarthScene />
          </div>
          <div>
            <MarsScene />
          </div>
          <div>
            <JupiterScene />
          </div>
          <div>
            <SaturnScene />
          </div>
          <div>
            <UranusScene />
          </div>
          <div>
            <NeptuneScene />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
