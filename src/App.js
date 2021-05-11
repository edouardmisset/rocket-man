import './App.css';
import Particles from 'react-particles-js';
import Ship from './components/Ship';
import { useState } from 'react';

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
  const [ship, setShip] = useState({
    position: {
      x: 0,
      y: 0,
    },
    angle: 0

  })

  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      <Ship ship={ship} setShip={setShip} />
    </div>
  );
}

export default App;
