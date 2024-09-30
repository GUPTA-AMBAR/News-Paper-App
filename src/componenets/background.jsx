import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Star Component
const Star = () => {
  const mesh = useRef();
  const [position] = React.useState(() => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  ]);
  const [scale] = React.useState(() => Math.random() * 0.1);

  // Animation loop to rotate stars
  useFrame(() => {
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[0.05, 24, 24]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

// Starfield Component
const StarField = () => {
  const stars = Array.from({ length: 1000 }, (_, i) => <Star key={i} />);
  return (
    <Canvas
      camera={{ fov: 75, position: [0, 0, 5] }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {stars}
    </Canvas>
  );

};

export default StarField;

