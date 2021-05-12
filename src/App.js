import './App.css';
import Particles from 'react-particles-js';
import Ship from './components/Ship';
import { useEffect, useState } from 'react';
import CelestialBody from './components/CelestialBody';
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
import Player from './components/Player';
import particlesOptions from './components/particlesOptions';

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
    ]);
  }, []);

  if (!celestialBodyInfoList) return 'Loading...';
  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      {celestialBodyInfoList.map(celestialBodyInfo => (
        <CelestialBody
          key={celestialBodyInfo.name}
          ship={ship}
          celestialBodyInfo={celestialBodyInfo}
        />
      ))}
      <Ship ship={ship} setShip={setShip} />
      <Player />
    </div>
  );
}
