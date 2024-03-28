import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

type T3DModel = {
  isRotating: boolean;
};

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky({ isRotating }: T3DModel) {
  const sky = useGLTF<string>('src/assets/3d/sky.glb');
  const skyRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
