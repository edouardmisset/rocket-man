import { useEffect, useState } from 'react';
import './Title.css';

export default function Title() {
  const [track, setTrack] = useState({ x: 0, y: 0 });

  function mouseFollow(e) {
    const [mouseX, mouseY] = [e.clientX, e.clientY];
    console.log(`${mouseX}, ${mouseY}`);
    setTrack(x => ({ ...track, x: (4 * mouseX) / 570 + 40 }));
    setTrack(y => ({ ...track, y: (4 * mouseY) / 570 + 50 }));
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', mouseFollow);
    return () => {
      document.body.removeEventListener('mousemove', mouseFollow);
    };
  }, []);

  return (
    <div className='container'>
      <div
        className='title'
        style={{ backgroundPosition: `${track.x}% ${track.y}%` }}
      >
        Team Rocket
      </div>
    </div>
  );
}
