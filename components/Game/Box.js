import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Mesh, BoxGeometry, MeshPhysicalMaterial } from "three";

function Box(props) {
 const texture = useLoader(TextureLoader, "/texture.jpg")
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}

export default Box;
