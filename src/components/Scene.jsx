// src/components/Scene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{
        background: 'transparent',
        width: '100%',
        height: '300px',
      }}
    >
      {/* свет */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 2, 3]} intensity={2} color='#9373ea' />

      {/* НЕОНОВЫЙ ТЕКСТ */}
      <Text
        fontSize={0.8}
        color='#ffffff'
        anchorX='center'
        anchorY='middle'
        position={[0, 0, 0]}
      >
        ART STICK
        <meshStandardMaterial
          emissive='#9373ea'
          emissiveIntensity={3}
          toneMapped={false}
        />
      </Text>
    </Canvas>
  );
}
