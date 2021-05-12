import './App.css';
import Particles from 'react-particles-js';
import { useEffect, useState } from 'react';
import CelestialBody from './components/CelestialBody';
import InfosCelestial from './components/InfosCelestial';
import Ship from './components/Ship';

// Import assests
import earthCartoon from './assets/terre-cartoon.svg';
import moonCartoon from './assets/moon-cartoon.svg';
import galaxyCartoon from './assets/galaxy-cartoon.svg';
import issCartoon from './assets/iss-cartoon.svg';
import jupiterCartoon from './assets/jupiter-cartoon.svg';
import marsCartoon from './assets/mars-cartoon.svg';
import saturnCartoon from './assets/saturne-cartoon.svg';
import sunCartoon from './assets/soleil-cartoon.svg';
import deathStarCartoon from './assets/etoile-de-la-mort-cartoon.svg';
import meteoriteCartoon from './assets/meteor-cartoon.svg';

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
    setCelestialBodyInfoList({
      earth: {
        name: 'Earth',
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: earthCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA00123/PIA00123~small.jpg',
        position: {
          x: 10,
          y: 20,
        },
        size: 15,
      },
      mars: {
        name: 'Mars',
        description:
          'Mars is the fourth planet in increasing order of distance from the Sun and the second in increasing order of size and mass.',
        cartoonImage: marsCartoon,
        position: {
          x: 20,
          y: 45,
        },
        size: 13,
      },
      moon: {
        name: 'Moon',
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: moonCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA00123/PIA00123~small.jpg',
        position: {
          x: 15,
          y: 25,
        },
        size: 6,
      },
      deathStar: {
        name: 'Death Star',
        description:
          'The Death Stars are two spherically shaped, small moon-sized movable sidereal space stations featured in the Star Wars saga.',
        cartoonImage: deathStarCartoon,
        position: {
          x: 90,
          y: 70,
        },
        size: 12,
      },
      sun: {
        name: 'Sun',
        description:
          'The Sun is the star of the Solar System. In the astronomical classification, it is a yellow dwarf-type star with a mass of approximately 1.989 1 × 1030 kg, composed of hydrogen (75% of the mass or 92% of the volume) and helium (25% by mass or 8% by volume) 10.',
        cartoonImage: sunCartoon,
        position: {
          x: 60,
          y: 10,
        },
        size: 30,
      },
      iss: {
        name: 'ISS',
        description:
          'The International Space Station, or ISS, is a space station placed in low Earth orbit, permanently manned by an international crew dedicated to scientific research in the space environment. ',
        cartoonImage: issCartoon,
        position: {
          x: 18,
          y: 29,
        },
        size: 6,
      },
      galaxy: {
        name: 'Galaxy',
        description:
          'A galaxy is an assemblage of stars, gas, dust, void, and perhaps mostly dark matter, sometimes containing a supermassive black hole at its center. ',
        cartoonImage: galaxyCartoon,
        position: {
          x: 53,
          y: 85,
        },
        size: 10,
      },
      jupiter: {
        name: 'Jupiter',
        description:
          'Jupiter is a giant gas planet. It is the largest planet in the Solar System, larger and more massive than all the other planets combined, and the fifth planet by its distance from the Sun. ',
        cartoonImage: jupiterCartoon,
        position: {
          x: 45,
          y: 35,
        },
        size: 22,
      },
      saturn: {
        name: 'Saturn',
        description:
          'Saturn is the sixth planet in the Solar System in order of distance from the Sun, and the second largest in size and mass after Jupiter, which is like it a giant gas planet. ',
        cartoonImage: saturnCartoon,
        position: {
          x: 23,
          y: 15,
        },
        size: 30,
      },
      meteorite: {
        name: 'Meteorite',
        description: '',
        cartoonImage: meteoriteCartoon,
        position: {
          x: 45,
          y: 45,
        },
        size: 8,
      },
    });
  }, []);

  if (celestialBodyInfoList) console.log();

  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      {/* Change the object into an array to be able to map on it */}
      {celestialBodyInfoList &&
        Object.values(celestialBodyInfoList).map(celestialBodyInfo => (
          <CelestialBody
            key={celestialBodyInfo.name}
            ship={ship}
            celestialBodyInfo={celestialBodyInfo}
          />
        ))}
      <Ship ship={ship} setShip={setShip} />
      <iframe
        title='Rocket Man'
        src='https://open.spotify.com/embed/track/3gdewACMIVMEWVbyb8O9sY'
        width='300'
        height='80'
        frameborder='0'
        allowtransparency='true'
        allow='encrypted-media'
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      ></iframe>
    </div>
  );
}
