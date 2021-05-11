import './App.css';
import Particles from 'react-particles-js';
import { useEffect, useState } from 'react';
import CelestialBody from './components/CelestialBody';
import Ship from './components/Ship';
// Import assests
import earthCartoon from './assets/terre-cartoon.svg';
import galaxyCartoon from './assets/galaxy-cartoon.svg';
import issCartoon from './assets/iss-cartoon.svg';
import jupiterCartoon from './assets/jupiter-cartoon.svg';
import marsCartoon from './assets/mars-cartoon.svg';
import saturnCartoon from './assets/saturne-cartoon.svg';
import sunCartoon from './assets/soleil-cartoon.svg';
import deathStarCartoon from './assets/etoile-de-la-mort-cartoon.svg';
import eT from './assets/ET.svg';

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
      direction: 'right',
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
        mode: 'push',
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
  const [ship, setShip] = useState({
    position: {
      x: 250,
      y: 300,
    },
    angle: 0,
  });

  // All the informations of the list of the celestial bodies will be stored in an array of objects : celestialBodyInfoList
  // We need the following informations / keys : cartoonImage, realImage, name, description, position, size
  // position is an object containing x and y
  const [celestialBodyInfoList, setCelestialBodyInfoList] = useState(null);

  useEffect(() => {
    setCelestialBodyInfoList([
      {
        name: 'Earth',
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: earthCartoon,
        realImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg',
        position: {
          x: 150,
          y: 200,
        },
        size: 100,
      },
      {
        name:'mars',
        description:
        "Mars is the fourth planet in increasing order of distance from the Sun and the second in increasing order of size and mass.",
        cartoonImage: marsCartoon,
        position:{
          x:630,
          y:295,
        },
        size:100,
      },
      {
      name:'Death star',
      description:"The Death Stars are two spherically shaped, small moon-sized movable sidereal space stations featured in the Star Wars saga.",
      cartoonImage: deathStarCartoon,
      position:{
        x:900,
        y:700,
      },
      size:180,
      },
      {
        name:'Sun',
        description:"The Sun is the star of the Solar System. In the astronomical classification, it is a yellow dwarf-type star with a mass of approximately 1.989 1 × 1030 kg, composed of hydrogen (75% of the mass or 92% of the volume) and helium (25% by mass or 8% by volume) 10.",
        cartoonImage: sunCartoon,
        position:{
          x:60,
          y:970,
        },
        size:380,
      },
      {
        name: 'ISS',
        description:"The International Space Station, or ISS, is a space station placed in low Earth orbit, permanently manned by an international crew dedicated to scientific research in the space environment. ",
        cartoonImage: issCartoon,
        position:{
          x:180,
          y:290,
        },
        size:80,
      },
      {
        name:'Galaxy',
        description:"A galaxy is an assemblage of stars, gas, dust, void, and perhaps mostly dark matter, sometimes containing a supermassive black hole at its center. ",
        cartoonImage: galaxyCartoon,
        position:{
          x:1642,
          y:856,
        },
        size:300,
      },
      {
        name:"Jupiter",
        description:"Jupiter is a giant gas planet. It is the largest planet in the Solar System, larger and more massive than all the other planets combined, and the fifth planet by its distance from the Sun. ",
        cartoonImage:jupiterCartoon,
        position:{
          x:1520,
          y:356,
        },
        size:250,
      },
      {
        name:"Saturne",
        description:"Saturn is the sixth planet in the Solar System in order of distance from the Sun, and the second largest in size and mass after Jupiter, which is like it a giant gas planet. ",
        cartoonImage: saturnCartoon,
        position:{
          x:1853,
          y:158,
        },
        size:250,
      },
      {
        name:"E.T",
        description: "E.T., the Alien is an American science fiction film directed by Steven Spielberg and released in 1982. ",
        cartoonImage: eT,
        position:{
          x:563,
          y:750,
        },
        size:80,
      }

    ]);
  }, []);

  if (!celestialBodyInfoList) return 'Loading...';
  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      {celestialBodyInfoList.map(celestialBodyInfo => (
        <div className='CelestialBody' key={celestialBodyInfo.name}>
          <CelestialBody celestialBodyInfo={celestialBodyInfo} />
        </div>
      ))}
      <Ship ship={ship} setShip={setShip} />
    </div>
  );
}
