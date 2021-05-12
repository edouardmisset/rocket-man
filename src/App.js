import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from './components/particlesOptions';
import { useEffect, useState } from 'react';
import CelestialBody from './components/CelestialBody';
import Ship from './components/Ship';
import axios from 'axios';
import Player from './components/Player';
import Title from './components/Title';

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
          x: 100,
          y: 220,
        },
        size: 130,

        density: 0,
        diameter: 0,
        gravity: 0,
      },
      mars: {
        name: 'Mars',
        description:
          'Mars is the fourth planet in increasing order of distance from the Sun and the second in increasing order of size and mass.',
        cartoonImage: marsCartoon,
        realImage:
          'https://www.vaisala.com/sites/default/files/styles/16_9_liftup_extra_large/public/images/LIFT-Mars%20the%20Red%20Planet-1600x900.jpg?itok=YXq-Cv1K',
        position: {
          x: 190,
          y: 682,
        },
        size: 130,
        density: 0,
        diameter: 0,
        gravity: 0,
      },
      moon: {
        name: 'Moon',
        description:
          "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia),[13] it is the largest natural satellite in the Solar System relative to the size of its planet,[f] and the fifth largest satellite in the Solar System overall (larger than any dwarf planet).",
        cartoonImage: moonCartoon,
        realImage:
<<<<<<< HEAD
          "https://upload.wikimedia.org/wikipedia/commons/1/10/Supermoon_Nov-14-2016-minneapolis.jpg",
=======
          'https://images-assets.nasa.gov/image/PIA00405/PIA00405~small.jpg',
>>>>>>> dev
        position: {
          x: 250,
          y: 100,
        },
        size: 60,
        density: 0,
        diameter: 0,
        gravity: 0,
      },
      deathStar: {
        name: 'Death Star',
        description:
          'The Death Stars are two spherically shaped, small moon-sized movable sidereal space stations featured in the Star Wars saga.',
        cartoonImage: deathStarCartoon,
<<<<<<< HEAD
        realImage: "https://i.imgur.com/9yeqp7s.png",
=======
        realImage:
          'https://static.wikia.nocookie.net/starwars/images/8/87/Imperial_Might_RotE.png/revision/latest/scale-to-width-down/1000?cb=20200710034046',
>>>>>>> dev
        position: {
          x: 1200,
          y: 470,
        },
        size: 120,
        density: 'null',
        diameter: 160,
        gravity: 'null',
        
      },
      sun: {
        name: 'Sun',
        description:
          'The Sun is the star of the Solar System. In the astronomical classification, it is a yellow dwarf-type star with a mass of approximately 1.989 1 × 1030 kg, composed of hydrogen (75% of the mass or 92% of the volume) and helium (25% by mass or 8% by volume) 10.',
        cartoonImage: sunCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000790/GSFC_20171208_Archive_e000790~small.jpg',
        position: {
          x: 700,
          y: 200,
        },
        size: 380,
        density: 0,
        diameter: 0,
        gravity: 0,
      },
      iss: {
        name: 'ISS',
        description:
          'The International Space Station, or ISS, is a space station placed in low Earth orbit, permanently manned by an international crew dedicated to scientific research in the space environment. ',
        cartoonImage: issCartoon,
        realImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ISS-56_International_Space_Station_fly-around_%2805%29.jpg/1920px-ISS-56_International_Space_Station_fly-around_%2805%29.jpg',
        position: {
          x: 50,
          y: 150,
        },
        size: 60,
        density: 1,
        diameter: 1,
        gravity: 0,
      },
      galaxy: {
        name: 'Galaxy',
        description:
          'A galaxy is an assemblage of stars, gas, dust, void, and perhaps mostly dark matter, sometimes containing a supermassive black hole at its center. ',
        cartoonImage: galaxyCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA07828/PIA07828~small.jpg',
        position: {
          x: 650,
          y: 550,
        },
        size: 100,
        density: 0.1,
        diameter: Infinity,
        gravity: 0,
      },
      jupiter: {
        name: 'Jupiter',
        description:
          'Jupiter is a giant gas planet. It is the largest planet in the Solar System, larger and more massive than all the other planets combined, and the fifth planet by its distance from the Sun. ',
        cartoonImage: jupiterCartoon,
        realImage:
          'https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/jupapr3color-jd-170304.png?itok=H3AGeVPH',
        position: {
          x: 1460,
          y: 645,
        },
        size: 220,
        density: 0,
        diameter: 0,
        gravity: 0,
      },
      saturn: {
        name: 'Saturn',
        description:
          'Saturn is the sixth planet in the Solar System in order of distance from the Sun, and the second largest in size and mass after Jupiter, which is like it a giant gas planet. ',
        cartoonImage: saturnCartoon,
        realImage:
          'https://images-assets.nasa.gov/image/PIA11141/PIA11141~small.jpg',
        position: {
          x: 1330,
          y: 62,
        },
        size: 300,
        density: 0,
        diameter: 0,
        gravity: 0,
      },
      meteorite: {
        name: 'Meteorite',
        description: '',
        cartoonImage: meteoriteCartoon,
        realImage:
          'https://france3-regions.francetvinfo.fr/image/1QKKfcbwGUzhDoEYBcay5vf4oBU/930x620//filters:format(webp)/regions/2021/04/25/608524ec03987_photo_meteorite-5287824.jpeg',
        position: {
          x: 1200,
          y: 350,
        },
        size: 80,
        density: 10,
        diameter: 0.01,
        gravity: 0,
      },
    });
  }, []);

  useEffect(() => {
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(({ data }) => {
        const bodies = data.bodies;

        // Grab the planet object
        const [moon] = bodies.filter(planetName =>
          planetName.englishName.includes('Moon')
        );
        // Set CB info with the rest ...cBinfoList, planet : {...celestialBodyInfoList.planet}
        setCelestialBodyInfoList(celestialBodyInfoList => ({
          ...celestialBodyInfoList,
          moon: {
            ...celestialBodyInfoList.moon,
            density: moon.density,
            gravity: moon.gravity,
            diameter: 2 * moon.meanRadius,
          },
        }));

        const [mars] = bodies.filter(planetName =>
          planetName.englishName.includes('Mars')
        );
        // Set CB info with the rest ...cBinfoList, planet : {...celestialBodyInfoList.planet}
        setCelestialBodyInfoList(celestialBodyInfoList => ({
          ...celestialBodyInfoList,
          mars: {
            ...celestialBodyInfoList.mars,
            density: mars.density,
            gravity: mars.gravity,
            diameter: 2 * mars.meanRadius,
          },
        }));

        const [earth] = bodies.filter(planetName =>
          planetName.englishName.includes('Earth')
        );
        // Set CB info with the rest ...cBinfoList, planet : {...celestialBodyInfoList.planet}
        setCelestialBodyInfoList(celestialBodyInfoList => ({
          ...celestialBodyInfoList,
          earth: {
            ...celestialBodyInfoList.earth,
            density: earth.density,
            gravity: earth.gravity,
            diameter: 2 * earth.meanRadius,
          },
        }));

        const [jupiter] = bodies.filter(planetName =>
          planetName.englishName.includes('Jupiter')
        );
        // Set CB info with the rest ...cBinfoList, planet : {...celestialBodyInfoList.planet}
        setCelestialBodyInfoList(celestialBodyInfoList => ({
          ...celestialBodyInfoList,
          jupiter: {
            ...celestialBodyInfoList.jupiter,
            density: jupiter.density,
            gravity: jupiter.gravity,
            diameter: 2 * jupiter.meanRadius,
          },
        }));

        const [sun] = bodies.filter(planetName =>
          planetName.englishName.includes('Sun')
        );
        // Set CB info with the rest ...cBinfoList, planet : {...celestialBodyInfoList.planet}
        setCelestialBodyInfoList(celestialBodyInfoList => ({
          ...celestialBodyInfoList,
          sun: {
            ...celestialBodyInfoList.sun,
            density: sun.density,
            gravity: sun.gravity,
            diameter: 2 * sun.meanRadius,
          },
        }));
      });
  }, []);

  // density, gravity, meanRadius, englishName, moons (moon)

  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      <Title />
      {/* Change the object into an array to be able to map on it */}
      {celestialBodyInfoList &&
        Object.values(celestialBodyInfoList).map(celestialBodyInfo => (
          <CelestialBody
            key={celestialBodyInfo.name}
            realImage={celestialBodyInfo.realImage}
            ship={ship}
            celestialBodyInfo={celestialBodyInfo}
          />
        ))}
      <Ship ship={ship} setShip={setShip} />
      <Player />
    </div>
  );
}
