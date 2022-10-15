import React, { useRef, useMemo } from 'react';
import AnimatedLetters from './animation/animatedLetters';
import { SocialIcon } from 'react-social-icons';
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";
import moon from '../assets/images/moon.jpg';


import './home.scss';

export default function Home() {
  

  return (
    <div id="home" className="home">
      <div className="social-icons">
        <SocialIcon url="https://www.linkedin.com/in/jade-andrie-rosales-2a4706223/" target='_blank' fgColor='white'/>
        <SocialIcon url="https://github.com/Frooge" target='_blank' fgColor='white'/>
        <SocialIcon url="https://www.facebook.com/jade.rosales.90857/" target='_blank' fgColor='white'/>
      </div>
      <div className="content container row">
        <div className="text-zone col-6">
          <h1>
            <AnimatedLetters text="Hey There," idx="1"/>
            <br/>
            <AnimatedLetters text="I'm " idx="8"/>
            <span className="name"><AnimatedLetters text="Jade Andrie" idx="11"/></span>
            <br/>
            <AnimatedLetters text="web developer." idx="24"/>
          </h1>
          <h2 className="animate__animated animate__fadeIn animate__delay-3s">An Aspiring Full Stack Developer</h2>    
          <br/>
          <a href="#contacts"><button className="btn btn-outline-warning animate__animated animate__fadeIn animate__delay-4s">Contact Me</button></a>
        </div>
        <div className="col-6">
          <Canvas camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <RotatingObject/>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

const RotatingObject = () => {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    myMesh.current.rotation.x += 0.001;
    myMesh.current.rotation.y += 0.002;
  });
  const texture = useMemo(() => new THREE.TextureLoader().load(moon), []);

  return (
    <mesh ref={myMesh}>
      <sphereGeometry scale={{x: 100, y: 100}}/>
      <meshBasicMaterial color='white' attach='material'>
        <primitive attach='map' object={texture}/>
      </meshBasicMaterial>
    </mesh>
  )
};

