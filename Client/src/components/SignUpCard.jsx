import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import AnimeLoader from "./AnimeLoader.jsx";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

const Anime2 = () =>{

    const anime2 = useGLTF('./transformers_5_optimus_prime/scene.gltf');
    const anime3 = useGLTF('./one_piece_straw_hat_2_years copy/scene.gltf');
    const anime4 = useGLTF('./luffy_nika_3d_one_piece_luffy_gear_5/scene.gltf');


    return(
        <mesh>
            <hemisphereLight intensity={2.4} groundColor="black" />
            <pointLight intensity={0.1}/>
            <spotLight intensity={6}/>
            <primitive
                object={anime2.scene}
                position={[0, -3, 0]}
                rotation={[0, 0, 0]}
                scale={0.3} // Reduce the scale
            />
        </mesh>
        //  {/* <mesh>*/}
        // {/*    <hemisphereLight intensity={2.5} groundColor="black" />*/}
        // {/*    <pointLight intensity={1.5}/>*/}
        // {/*    <spotLight intensity={1}/>*/}
        // {/*    <primitive*/}
        // {/*        object={anime2.scene}*/}
        // {/*        position={[0, -2, 0]}*/}
        // {/*        rotation={[0, 0, 0]}*/}
        // {/*        scale={0.5} // Reduce the scale*/}
        // {/*    />*/}
        // {/*</mesh>*/}
    )

}
const SignUpCard = () => {
    return (
        <Canvas frameloop="demand" shadows="basic" camera={{position: [5, 0, 15],fov:30}} gl={{preserveDrawingBuffer:true}}>
            <Suspense fallback={<AnimeLoader/>}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/ 2} minPolarAngle={Math.PI/ 2}/>
                <Anime2/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}
export default SignUpCard
