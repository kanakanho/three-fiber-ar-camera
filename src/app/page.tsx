"use client";

import { ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { Box, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";

export default function Home() {
  const cameraPosition = new Vector3(0, 0, 0);
  return (
    <>
      <ARButton />
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <PerspectiveCamera fov={90} makeDefault position={cameraPosition} near={1} far={200} />
        <Box args={[1, 1, 1]} position={[0, 0, -5]} />
        <EffectComposer>
          <SSAO />
        </EffectComposer>
      </Canvas>
    </>
  );
}
