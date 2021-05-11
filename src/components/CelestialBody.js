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
    },
  } = props;
  const [hasRocketLanded, setHasRocketLanded] = useState(false);

  useEffect(() => {
    setHasRocketLanded(
      ship.position.x >= position.x + size &&
        ship.position.x <= position.x &&
        ship.position.y >= position.y + size &&
        ship.position.y <= position.y
    );

    console.log(`Ship: x = ${ship.position.x}, y = ${ship.position.y}`);
    console.log(`Celestial Body: x = ${position.x}, y = ${position.y}`);
  }, [position.x, position.y, ship, size]);

  console.log(`Ship has landed: ${hasRocketLanded}`);

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
        style={{ maxHeight: size, maxWidth: size }}
        onClick={() => {
          setHasRocketLanded(!hasRocketLanded);
        }}
      />
      <Modal
        hasRocketLanded={hasRocketLanded}
        description={description}
        name={name}
        realImage={realImage}
      />
    </div>
  );
}
