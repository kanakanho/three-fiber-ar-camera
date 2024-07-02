"use client";

import { ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { Box, PerspectiveCamera } from "@react-three/drei";
import { Euler, Vector3 } from "three";
import { useEffect, useState } from "react";

export default function Home() {
  const cameraPosition = new Vector3(0, 0, 0);
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(
        (prevRotation) =>
          new Euler(0, prevRotation.y + Math.abs(Math.random() / 2), prevRotation.z + Math.abs(Math.random() / 1000))
      );
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ARButton />
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <PerspectiveCamera fov={90} makeDefault position={cameraPosition} near={1} far={200} />
        <Box args={[2, 2, 2]} position={[0, 0, -5]} rotation={rotation} />
        <EffectComposer>
          <SSAO />
        </EffectComposer>
      </Canvas>
    </>
  );
}
