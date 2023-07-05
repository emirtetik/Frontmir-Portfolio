import React from "react";
import { PointLight, Mesh, MeshPhysicalMaterial, SphereGeometry } from "three";

function LightBulb(props) {
  return (
    <group {...props}>
      <pointLight castShadow />
      <mesh>
        <sphereGeometry args={[0.2, 30, 10]} attach="geometry" />
        <meshStandardMaterial emissive="purple" attach="material" />
      </mesh>
    </group>
  );
}

export default LightBulb;
