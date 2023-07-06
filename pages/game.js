import Layout from '@/components/layout/Layout'
import {Suspense, useRef} from "react";
import Meta from '@/components/Meta'
import OrbitControls from "../components/Game/Control/OrbitControls"
import Draggable from '@/components/Game/Control/Draggable'
import Floor from '@/components/Game/Floor'
import LightBulb from '@/components/Game/LightBulb'
import Box from '@/components/Game/Box'
import gamecss from '@/styles/game.module.css'
import { Canvas } from "@react-three/fiber";

function Game() {
  const canvasRef = useRef();
  return (
    <Layout>
        <Meta 
      title={"Game"}
      description={"WebGL with Threejs"}
      keywords={"WebGL,Threejs,Game,design,art"}
      />


   <div className={gamecss.scene}>
   <Canvas
        shadows
        className={gamecss.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >

         <ambientLight color={"white"} intensity={0.3} />

          <Draggable>
          <Suspense fallback={null}>
          <LightBulb position={[0, 3, 0]} />
            <Box rotateX={3} rotateY={0.2} />
        </Suspense>
          </Draggable>

          <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
</div>

    </Layout>
  )
}

export default Game
