import React, { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Html } from "@react-three/drei";
import * as THREE from "three";
import BadgesData from "./BadgesData";
import "./index.css";
import employeeTexture from "./textures/sun.jpg";

export default function SolarSystem() {
return (
    <>
    <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
    <Lights />
        <Employee />
        <Suspense fallback={null}>
        {BadgesData.map((badge) => (
            <Badges badge={badge} key={badge.id} />
        ))}
        
            <OrbitControls />
        </Suspense>
    </Canvas>
    </>
);
}
function Employee() {
const texture = useLoader(THREE.TextureLoader,employeeTexture);
return (
    <mesh>
    <sphereGeometry args={[2.5, 32, 32]} />
    <meshStandardMaterial map={texture} />
    </mesh>
);
}
function Badges({ badge: { 
    xRadius,
    zRadius, 
    size, 
    speed,
    offset,
    rotationSpeed,
    textureMap,
    name,
} }) {
const badgeRef = React.useRef();
const texture =useLoader(THREE.TextureLoader,textureMap);

useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    badgeRef.current.position.x = x;
    badgeRef.current.position.z = z;
    badgeRef.current.rotation.y += rotationSpeed;
});

return (
    <>
    <mesh ref={badgeRef}  >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
        <Html distanceFactor={15}>
        <div className ="annotation">{name}</div>
        </Html>
    </mesh>
    <Orbit xRadius={xRadius} zRadius={zRadius} />
    </>
);
}

function Lights() {
return (
    <>
    <ambientLight />
    <pointLight position={[0, 0, 0]} />
    </>
);
}

function Orbit({ xRadius = 1, zRadius = 1 }) {
const points = [];
for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0 , z));
}

points.push(points[0]);

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
return (
    <line geometry={lineGeometry}>
    <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
);
}
