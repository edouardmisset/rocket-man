import { useState } from 'react';
import Modal from './Modal';

export default function CelestialBody(celestialBodyInfo) {
  const {
    celestialBodyInfo: {
      cartoonImage,
      realImage,
      name,
      description,
      position,
      size,
    },
  } = celestialBodyInfo;
  const [hasRocketLanded, setHasRocketLanded] = useState(false);

  if (!position) return 'Coming...';
  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        bottom: `${position.y}px`,
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
