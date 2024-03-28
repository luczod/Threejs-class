import { useAnimations, useGLTF } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

type T3DModel = {
  isRotating: boolean;
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
};

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }: T3DModel) {
  const ref = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF<string>('src/assets/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
