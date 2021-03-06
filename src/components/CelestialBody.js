import { useEffect, useState } from 'react';
import Modal from './Modal';

export default function CelestialBody(props) {
  const {
    ship,
    celestialBodyInfo: {
      cartoonImage,
      realImage,
      name,
      description,
      position,
      size,
      density,
      diameter,
      gravity,
    },
  } = props;
  const [hasRocketLanded, setHasRocketLanded] = useState(false);

  const cBXMin = position.x;
  const cBXMax = position.x + size;
  const cBYMin = position.y;
  const cBYMax = position.y + size;

  useEffect(() => {
    const rocket = document.querySelector('.rocket');
    const rocketHeight = rocket.offsetHeight;
    const rocketWidth = rocket.offsetWidth;
    const shipX = ship.position.x + rocketWidth / 2;
    const shipY = ship.position.y + rocketHeight / 2;
    setHasRocketLanded(
      cBXMin <= shipX && shipX <= cBXMax && cBYMin <= shipY && shipY <= cBYMax
    );
  }, [
    cBXMax,
    cBXMin,
    cBYMax,
    cBYMin,
    position.x,
    position.y,
    ship.position.x,
    ship.position.y,
    size,
  ]);

  if (!position) return 'Coming...';
  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img
        src={cartoonImage}
        alt={name}
        style={{ maxHeight: `${size}px`, maxWidth: `${size}px` }}
        onClick={() => {
          setHasRocketLanded(!hasRocketLanded);
        }}
      />
      <Modal
        hasRocketLanded={hasRocketLanded}
        description={description}
        name={name}
        realImage={realImage}
        density={density}
        diameter={diameter}
        gravity={gravity}
      />
    </div>
  );
}
