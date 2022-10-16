import React, { Suspense, useRef } from 'react';
import AnimatedLetters from './animation/animatedLetters';
import { SocialIcon } from 'react-social-icons';
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useProgress, OrbitControls, useGLTF } from '@react-three/drei'



import './home.scss';
//import { Model } from '../assets/3dmodels/';
import Model from '../assets/3dmodels/rat.gltf';

export default function Home() {
  

  return (
    <div id="home" className="home">
      <div className="social-icons">
        <SocialIcon url="https://www.linkedin.com/in/jade-andrie-rosales-2a4706223/" target='_blank' fgColor='white'/>
        <SocialIcon url="https://github.com/Frooge" target='_blank' fgColor='white'/>
        <SocialIcon url="https://www.facebook.com/jade.rosales.90857/" target='_blank' fgColor='white'/>
      </div>
      <div className="content container row">
        <div className="text-zone col-lg-6">
          <h1>
            <AnimatedLetters text="Hey There," idx="1"/>
            <br/>
            <AnimatedLetters text="I'm " idx="8"/>
            <span className="name"><AnimatedLetters text="Jade Andrie" idx="11"/></span>
            <br/>
            <AnimatedLetters text="software dev." idx="24"/>
          </h1>
          <h2 className="animate__animated animate__fadeIn animate__delay-3s">An Aspiring Full Stack Developer</h2>    
          <br/>
          <a href="#contacts"><button className="btn btn-outline-warning animate__animated animate__fadeIn animate__delay-4s">Contact Me</button></a>
        </div>
        <div className="banner-zone col-6">
          <div className="canvas">
            <Canvas camera={{ fov: 75, position: [3,2,2] }}>
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.5} />
              <Suspense fallback={<Loader />}>
                <RotatingObject/>
                <OrbitControls/>
              </Suspense> 
            </Canvas>   
          </div>
          <div>
            <p>"Low Quality Horizontally Spinning Rat"</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const RotatingObject = () => {
  const gltf = useGLTF(Model);
  const model = useRef();
  useFrame(() => {
      model.current.rotation.y += 0.02;
  });
  return (
    <mesh ref={model} scale={1.2}>
      <primitive object={gltf.scene} scale={3} />
    </mesh>
  )
};

