// import { useState } from 'react';

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
  // const [hasRocketLanded, setHasRocketLanded] = useState(false);

  console.log(name);

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
      />
    </div>
  );
}
