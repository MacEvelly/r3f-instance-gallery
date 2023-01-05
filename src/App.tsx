import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Instances, ShowAll } from './components/3D/office/instances';
import './App.css';

export default function Viewer() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Perf />
        <spotLight
          position={[-100, -100, -100]}
          intensity={0.2}
          angle={0.3}
          penumbra={1}
        />
        <hemisphereLight
          color="white"
          groundColor="white"
          position={[-7, 25, 13]}
          intensity={1}
        />
        <Instances>
          <ShowAll />
        </Instances>
      </Suspense>
      <OrbitControls
        makeDefault
        // minPolarAngle={0}
        // maxPolarAngle={Math.PI / 1.75}
      />
    </Canvas>
  );
}
