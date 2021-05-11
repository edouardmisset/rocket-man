import React, { useEffect } from 'react';
import './Ship.css';

function convertDegToRad(deg) {
  return (Math.PI * deg) / 180;
}
// Speed factor
const speed = 10;
function Ship({ ship, setShip }) {
  const { angle, position } = ship;
  const { x, y } = position;

  function moveShip(e) {

    switch (e.key) {
      case 'ArrowLeft':
        setShip(ship => ({ ...ship, angle: ship.angle - 1 }));
        break;
      case 'ArrowRight':
        setShip(ship => ({ ...ship, angle: ship.angle + 1 }));
        break;
      case 'ArrowUp':
        // redefinir position
        
        setShip(ship => ({
          ...ship,
          position: {
            x:
              ship.position.x <= 0
                ? (ship.position.x = 1)
                : ship.position.x +
                  speed * Math.cos(speed * convertDegToRad(ship.angle)),
            y:
              ship.position.y <= 0
                ? (ship.position.y = 1)
                : ship.position.y +
                  speed * Math.sin(speed * convertDegToRad(ship.angle)),
          },
        }));
        break;
      default:
        console.log('key pressed');
    }
  }
  console.log(position);
  useEffect(() => {
    const rocket = document.querySelector('.rocket');
    rocket.style.transform = `rotate(${90 + speed * angle}deg)`;
    rocket.style.top = `${y}px`;
    rocket.style.left = `${x}px`;
  }, [angle, x, y]);

  useEffect(() => {
    window.addEventListener('keydown', moveShip);
    return () => {
      window.removeEventListener('keydown', moveShip);
    };
  }, []);

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
