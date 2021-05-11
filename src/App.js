import './App.css';
import Particles from 'react-particles-js';
import { useEffect, useState } from 'react';
import CelestialBody from './components/CelestialBody';
import Ship from './components/Ship';
// Import assests
import cartoonImage from './assets/planet.svg';

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

function App() {
  // All the informations of the list of the celestial bodies will be stored in an array of objects : celestialBodyInfoList
  // We need the following informations / keys : cartoonImage, realImage, name, description, position, size
  // position is an object containing x and y
  const [celestialBodyInfoList, setCelestialBodyInfoList] = useState(null);

  useEffect(() => {
    setCelestialBodyInfoList([
      {
        name: 'Moon',
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: cartoonImage,
        realImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Supermoon_Nov-14-2016-minneapolis.jpg/1200px-Supermoon_Nov-14-2016-minneapolis.jpg',
        position: {
          x: 10,
          y: 20,
        },
        size: 100,
      },
    ]);
    // return () => {
    //   cleanup
    // }
  }, []);

  if (!celestialBodyInfoList) return 'Loading...';
  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      {celestialBodyInfoList.map(celestialBodyInfo => (
        <div key={celestialBodyInfo.name}>
          <CelestialBody celestialBodyInfo={celestialBodyInfo} />
        </div>
      ))}
      <Ship />
    </div>
  );
}

export default App;
