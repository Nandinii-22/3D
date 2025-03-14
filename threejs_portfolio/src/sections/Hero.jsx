import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import{ Leva, useControls } from "leva";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      {/* Text Section */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi! I am Nandini Gupta <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">
          Building Personal Brand
        </p>
      </div> 

      {/* 3D Model Section */}
      <div className="w-full h-full absolute inset-0">
        <Leva/>
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            
            <PerspectiveCamera makeDefault position={[0, 5, 25]} />

            <HackerRoom 
            position={[1, -8, 1]} 
            rotation={[0.1, Math.PI, 0]} 
            scale = {0.1}
            />

            <ambientLight intensity={2.5} />
            <directionalLight position={[15, 20, 10]} intensity={1.8} castShadow />
            <spotLight position={[5, 10, 10]} angle={0.3} intensity={2.2} castShadow />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
