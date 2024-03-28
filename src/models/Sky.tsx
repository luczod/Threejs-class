import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

type T3DModel = {
  isRotating: boolean;
};

export function Sky({ isRotating }: T3DModel) {
  const skyRef = useRef<Mesh>(null!);
  const sky = useGLTF('../../assets/3d/sky.glb');

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
