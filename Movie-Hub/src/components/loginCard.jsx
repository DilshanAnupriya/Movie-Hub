import React from 'react'
import { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,SpotLight,useGLTF ,Float} from "@react-three/drei";
import AnimeLoader from "./AnimeLoader.jsx";

const Anime = () =>{

    const anime2 = useGLTF('./knuckles_movie__free 2/scene.gltf');


    return(
        <mesh>
            <hemisphereLight intensity={2.5} groundColor="black" />
            <pointLight intensity={0.5}/>
            <spotLight intensity={1}/>
            <primitive
                object={anime2.scene}
                position={[0,-1.6,0]}
                rotation={[0,0,0]}
                scale={2.5}/>
        </mesh>
    )

}
const LoginCard = () => {
    return (
        <Canvas frameloop="demand" shadows="basic" camera={{position:[0,2,10],fov:30}} gl={{preserveDrawingBuffer:true}}>
            <Suspense fallback={<AnimeLoader/>}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/ 2} minPolarAngle={Math.PI/ 2}/>
                <Anime/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}
export default LoginCard
