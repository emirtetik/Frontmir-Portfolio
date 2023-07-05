import React from "react";
import { BoxGeometry, Mesh, MeshPhysicalMaterial } from "three";

function Floor(props) {
  return (
    <mesh {...props} receiveShadow>
      <boxGeometry args={[20, 1, 10]} attach="geometry" />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
