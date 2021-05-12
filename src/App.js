import './App.css';
import Particles from 'react-particles-js';
import { useEffect, useState } from 'react';
import CelestialBody from './components/CelestialBody';
import InfosCelestial from './components/InfosCelestial';
import Ship from './components/Ship';
import axios from 'axios';

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
          "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas and other salt-water bodies, but also by fresh-water bodies, which together constitute the hydrosphere. Earth's atmosphere consists mostly of nitrogen and oxygen.",
        cartoonImage: earthCartoon,
        realImage:
          'https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png',
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
        realImage:
          'https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg',
        position: {
          x: 10,
          y: 80,
        },
        size: 13,
      },
      moon: {
        name: 'Moon',
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: moonCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA00405/PIA00405~small.jpg',
        position: {
          x: 20,
          y: 10,
        },
        size: 6,
      },
      deathStar: {
        name: 'Death Star',
        description:
          'The Death Stars are two spherically shaped, small moon-sized movable sidereal space stations featured in the Star Wars saga.',
        cartoonImage: deathStarCartoon,
        realImage:
          'https://static.wikia.nocookie.net/starwars/images/8/87/Imperial_Might_RotE.png/revision/latest/scale-to-width-down/1000?cb=20200710034046',
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
        realImage:
          'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000790/GSFC_20171208_Archive_e000790~small.jpg',
        position: {
          x: 30,
          y: 35,
        },
        size: 30,
      },
      iss: {
        name: 'ISS',
        description:
          'The International Space Station, or ISS, is a space station placed in low Earth orbit, permanently manned by an international crew dedicated to scientific research in the space environment. ',
        cartoonImage: issCartoon,
        realImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ISS-56_International_Space_Station_fly-around_%2805%29.jpg/1920px-ISS-56_International_Space_Station_fly-around_%2805%29.jpg',
        position: {
          x: 5,
          y: 40,
        },
        size: 6,
      },
      galaxy: {
        name: 'Galaxy',
        description:
          'A galaxy is an assemblage of stars, gas, dust, void, and perhaps mostly dark matter, sometimes containing a supermassive black hole at its center. ',
        cartoonImage: galaxyCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA07828/PIA07828~small.jpg',
        position: {
          x: 40,
          y: 85,
        },
        size: 10,
      },
      jupiter: {
        name: 'Jupiter',
        description:
          'Jupiter is a giant gas planet. It is the largest planet in the Solar System, larger and more massive than all the other planets combined, and the fifth planet by its distance from the Sun. ',
        cartoonImage: jupiterCartoon,
        realImage:
          'https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/jupapr3color-jd-170304.png?itok=H3AGeVPH',
        position: {
          x: 60,
          y: 45,
        },
        size: 22,
      },
      saturn: {
        name: 'Saturn',
        description:
          'Saturn is the sixth planet in the Solar System in order of distance from the Sun, and the second largest in size and mass after Jupiter, which is like it a giant gas planet. ',
        cartoonImage: saturnCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA11141/PIA11141~small.jpg',
        position: {
          x: 73,
          y: 10,
        },
        size: 30,
      },
      meteorite: {
        name: 'Meteorite',
        description: '',
        cartoonImage: meteoriteCartoon,
        realImage:
          'https://france3-regions.francetvinfo.fr/image/1QKKfcbwGUzhDoEYBcay5vf4oBU/930x620//filters:format(webp)/regions/2021/04/25/608524ec03987_photo_meteorite-5287824.jpeg',
        position: {
          x: 90,
          y: 48,
        },
        size: 8,
      },
    });
  }, []);

  useEffect(() => {
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(response =>
        console.log(
          response.data.bodies.filter(
            planetName =>
              planetName.englishName.includes('Moon') ||
              planetName.englishName.includes('Mars') ||
              planetName.englishName.includes('Earth') ||
              planetName.englishName.includes('Jupiter') ||
              planetName.englishName.includes('Sun')
          )
        )
      );
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
