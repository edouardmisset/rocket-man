import React, { useEffect } from 'react';
import './Ship.css';

function convertDegToRad(deg) {
  return (Math.PI * deg) / 180;
}

function Ship({ ship, setShip }) {
  const { angle, position } = ship;
  const { x, y } = position;

  function moveShip(e) {
    // Speed factor
    const speed = 10;

    switch (e.key) {
      case 'ArrowLeft':
        setShip({ ...ship, angle: angle - 1 });
        break;
      case 'ArrowRight':
        setShip({ ...ship, angle: angle + 1 });
        break;
      case 'ArrowUp':
        // redefinir position
        setShip({
          ...ship,
          position: {
            x: x + speed * Math.sin(speed * convertDegToRad(angle)),
            y: y + speed * Math.cos(speed * convertDegToRad(angle)),
          },
        });
        break;
      default:
        console.log('key pressed');
    }
    const rocket = document.querySelector('.rocket');
    console.log(angle);
    rocket.style.transform = `rotate(${90 + speed * angle}deg)`;
    rocket.style.top = `${x}px`;
    rocket.style.left = `${y}px`;
  }

  useEffect(() => {
    window.addEventListener('keydown', moveShip);
    return () => {
      window.removeEventListener('keydown', moveShip);
    };
  }, [ship]);

  return (
    <div>
      <img
        className='rocket'
        src='https://media.discordapp.net/attachments/841585178626490379/841648727763976212/x-wing.png?width=529&height=617'
        alt='StarWars'
      />
    </div>
  );
}
export default Ship;
