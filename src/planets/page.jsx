import MercuryScene from "../components/Mercury";
import VenusScene from "../components/venus";
import EarthScene from "../components/Earth";
import MarsScene from "../components/Mars";
import JupiterScene from "../components/Jupiter";
import SaturnScene from "../components/Saturn";
import UranusScene from "../components/Uranus";
import NeptuneScene from "../components/Neptune";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PlanetsPage = () => {
  const mercuryWrapper = useRef();
  const VenusWrapper = useRef();
  const EarthWrapper = useRef();
  const MarsWrapper = useRef();
  const JupiterWrapper = useRef();
  const SaturnWrapper = useRef();
  const UranusWrapper = useRef();
  const NeptuneWrapper = useRef();

  useGSAP(() => {

    
  });

  return (
    <div className="absolute inset-0 ">
      <div ref={mercuryWrapper}>
        <MercuryScene />
      </div>
      <div ref={VenusWrapper}>
        <VenusScene />
      </div>
      <div ref={EarthWrapper}>
        <EarthScene />
      </div>
      <div ref={MarsWrapper}>
        <MarsScene />
      </div>
      <div ref={JupiterWrapper}>
        <JupiterScene />
      </div>
      <div ref={SaturnWrapper}>
        <SaturnScene />
      </div>
      <div ref={UranusWrapper}>
        <UranusScene />
      </div>
      <div ref={NeptuneWrapper}>
        <NeptuneScene />
      </div>
    </div>
  );
};

export default PlanetsPage;
