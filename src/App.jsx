import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Images() {
  const { width, height } = useThree((state) => state.viewport);

  const groupRef = useRef();
  const data = useScroll();

  useFrame(() => {
    groupRef.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    groupRef.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
  });

  return (
    <group ref={groupRef}>
      <Image
        url="/img1.jpg"
        scale={[4, height, 1]}
        position={[width / 100, -1, 1]}
      />
      <Image url="/img2.jpg" scale={3} position={[width / 7, -height / 2, 1]} />
      <Image
        url="/img3.jpg"
        scale={[1, 3.5, 1]}
        position={[-width / 6, -height + 1, 2]}
      />
      <Image
        url="/img4.jpg"
        scale={[1.4, 2, 1]}
        position={[width / 10, -height, 3.2]}
      />
    </group>
  );
}

function H1Scroll() {
  const { width } = useThree((state) => state.viewport);

  return (
    <Scroll html>
      <h1 style={{ position: "absolute", top: "40vh", left: "5vw" }}>Be</h1>
      <h2
        style={{
          position: "absolute",
          top: "140vh",
          left: width < 10 ? "20vw" : "50vw",
          fontSize: width < 5 ? "8em" : "12em",
        }}
      >
        Creative
      </h2>
    </Scroll>
  );
}
function App() {
  return (
    <>
      <Canvas>
        <ScrollControls
          pages={2}
          damping={3}
          horizontal={false}
          infinite={false}
        >
          <Scroll>
            <Images />
          </Scroll>
          <H1Scroll />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
