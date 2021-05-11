import "./App.css";
import Particles from "react-particles-js";
import { useEffect, useState } from "react";
import CelestialBody from "./components/CelestialBody";
import InfosCelestial from "./components/InfosCelestial";
import Ship from "./components/Ship";

// Import assests
import earthCartoon from "./assets/terre-cartoon.svg";
import galaxyCartoon from "./assets/galaxy-cartoon.svg";
import issCartoon from "./assets/iss-cartoon.svg";
import jupiterCartoon from "./assets/jupiter-cartoon.svg";
import marsCartoon from "./assets/mars-cartoon.svg";
import saturnCartoon from "./assets/saturne-cartoon.svg";
import sunCartoon from "./assets/soleil-cartoon.svg";
import deathStarCartoon from "./assets/etoile-de-la-mort-cartoon.svg";
import eT from "./assets/ET.svg";

const particlesOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 3500,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      opacity: 0.1,
    },
    move: {
      direction: "right",
      speed: 0.2,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

export default function App() {
  // All the informations of the list of the celestial bodies will be stored in an array of objects : celestialBodyInfoList
  // We need the following informations / keys : cartoonImage, realImage, name, description, position, size
  // position is an object containing x and y
  const [celestialBodyInfoList, setCelestialBodyInfoList] = useState(null);

  useEffect(() => {
    setCelestialBodyInfoList([
      {
        name: "Earth",
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: earthCartoon,
        realImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg",
        position: {
          x: 150,
          y: 200,
        },
        size: 100,
      },
    ]);
  }, []);

  if (!celestialBodyInfoList) return "Loading...";
  return (
    <div className="App">
      <Particles params={particlesOptions} className="particles" />
      {celestialBodyInfoList.map((celestialBodyInfo) => (
        <div key={celestialBodyInfo.name}>
          <CelestialBody celestialBodyInfo={celestialBodyInfo} />
        </div>
      ))}
      <Ship />
      <InfosCelestial />
    </div>
  );
}
