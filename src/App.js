import './App.css';
import Particles from 'react-particles-js';

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
  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
    </div>
  );
}

export default App;
