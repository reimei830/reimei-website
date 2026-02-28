'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Shared mouse state
const mouse = { x: 0, y: 0 }

function MouseTracker() {
  useFrame((state) => {
    mouse.x = state.pointer.x
    mouse.y = state.pointer.y
  })
  return null
}

/** Wireframe globe */
function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      // Tilt with mouse
      meshRef.current.rotation.x += (mouse.y * 0.3 - meshRef.current.rotation.x) * 0.02
      meshRef.current.rotation.z += (mouse.x * -0.1 - meshRef.current.rotation.z) * 0.02
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.2, 32, 24]} />
      <meshBasicMaterial color="#00a7e1" wireframe transparent opacity={0.08} />
    </mesh>
  )
}

/** Glowing dots on the globe surface — cities / nodes */
function GlobeNodes() {
  const groupRef = useRef<THREE.Group>(null)
  const RADIUS = 2.22

  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = []
    // Place ~40 nodes on sphere surface using fibonacci distribution
    const n = 40
    const goldenRatio = (1 + Math.sqrt(5)) / 2
    for (let i = 0; i < n; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / n)
      const phi = (2 * Math.PI * i) / goldenRatio
      pts.push(new THREE.Vector3(
        RADIUS * Math.sin(theta) * Math.cos(phi),
        RADIUS * Math.sin(theta) * Math.sin(phi),
        RADIUS * Math.cos(theta)
      ))
    }
    return pts
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(nodes.length * 3)
    nodes.forEach((p, i) => {
      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      positions[i * 3 + 2] = p.z
    })
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [nodes])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x += (mouse.y * 0.3 - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.z += (mouse.x * -0.1 - groupRef.current.rotation.z) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <points geometry={geometry}>
        <pointsMaterial size={0.07} color="#00a7e1" transparent opacity={0.9} sizeAttenuation />
      </points>
    </group>
  )
}

/** Arcs connecting nodes on the globe surface */
function GlobeArcs() {
  const groupRef = useRef<THREE.Group>(null)
  const RADIUS = 2.22

  const arcLines = useMemo(() => {
    const nodes: THREE.Vector3[] = []
    const n = 40
    const goldenRatio = (1 + Math.sqrt(5)) / 2
    for (let i = 0; i < n; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / n)
      const phi = (2 * Math.PI * i) / goldenRatio
      nodes.push(new THREE.Vector3(
        RADIUS * Math.sin(theta) * Math.cos(phi),
        RADIUS * Math.sin(theta) * Math.sin(phi),
        RADIUS * Math.cos(theta)
      ))
    }

    const material = new THREE.LineBasicMaterial({ color: '#00a7e1', transparent: true, opacity: 0.15 })
    const lines: THREE.Line[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j])
        if (dist > 1.5 && dist < 3.0 && lines.length < 25) {
          const pts: THREE.Vector3[] = []
          const segments = 20
          for (let s = 0; s <= segments; s++) {
            const t = s / segments
            const mid = new THREE.Vector3().lerpVectors(nodes[i], nodes[j], t)
            const arcHeight = 1 + Math.sin(t * Math.PI) * 0.3
            mid.normalize().multiplyScalar(RADIUS * arcHeight)
            pts.push(mid)
          }
          const geo = new THREE.BufferGeometry().setFromPoints(pts)
          lines.push(new THREE.Line(geo, material))
        }
      }
    }
    return lines
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x += (mouse.y * 0.3 - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.z += (mouse.x * -0.1 - groupRef.current.rotation.z) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      {arcLines.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}
    </group>
  )
}

/** Orbiting satellites / data packets */
function OrbitRing({ radius, tilt, speed, dotCount, opacity }: {
  radius: number; tilt: number; speed: number; dotCount: number; opacity: number
}) {
  const groupRef = useRef<THREE.Group>(null)

  // Ring line
  const ringLine = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const segments = 64
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const mat = new THREE.LineBasicMaterial({ color: '#00a7e1', transparent: true, opacity: opacity * 0.3 })
    return new THREE.Line(geo, mat)
  }, [radius, opacity])

  // Orbiting dots
  const dotsRef = useRef<THREE.Points>(null)
  const initialAngles = useMemo(() => {
    return Array.from({ length: dotCount }, (_, i) => (i / dotCount) * Math.PI * 2)
  }, [dotCount])

  useFrame((state) => {
    if (groupRef.current) {
      // Mouse slightly shifts the orbit tilt
      groupRef.current.rotation.x = tilt + mouse.y * 0.15
      groupRef.current.rotation.z = mouse.x * 0.1
    }
    if (dotsRef.current) {
      const positions = dotsRef.current.geometry.attributes.position.array as Float32Array
      const t = state.clock.elapsedTime * speed
      for (let i = 0; i < dotCount; i++) {
        const angle = initialAngles[i] + t
        positions[i * 3] = Math.cos(angle) * radius
        positions[i * 3 + 1] = 0
        positions[i * 3 + 2] = Math.sin(angle) * radius
      }
      dotsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const dotsGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(dotCount * 3)
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [dotCount])

  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      {/* Orbit path */}
      <primitive object={ringLine} />
      {/* Moving dots */}
      <points ref={dotsRef} geometry={dotsGeo}>
        <pointsMaterial size={0.1} color="#00a7e1" transparent opacity={opacity} sizeAttenuation />
      </points>
    </group>
  )
}

/** Outer atmosphere glow */
function AtmosphereGlow() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
      // Slight scale pulse
      const s = 1 + Math.sin(Date.now() * 0.001) * 0.02
      meshRef.current.scale.setScalar(s)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 32, 24]} />
      <meshBasicMaterial color="#00a7e1" transparent opacity={0.03} side={THREE.BackSide} />
    </mesh>
  )
}

/** Floating particles in space */
function SpaceParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 120

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01 + mouse.x * 0.05
      ref.current.rotation.x = mouse.y * 0.03
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.015} color="#00a7e1" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

/** Mouse-following glow light */
function GlowOrb() {
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x += (mouse.x * 5 - lightRef.current.position.x) * 0.04
      lightRef.current.position.y += (mouse.y * 4 - lightRef.current.position.y) * 0.04
    }
  })

  return <pointLight ref={lightRef} color="#00a7e1" intensity={0.8} distance={12} position={[0, 0, 4]} />
}

/** Parent group that makes the entire globe follow the mouse */
function MouseFollower({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      // Smoothly move toward mouse position (easing)
      const targetX = mouse.x * 2.5
      const targetY = mouse.y * 1.8
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default function GeometricBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.05} />

        <MouseTracker />
        <GlowOrb />

        {/* Everything follows the mouse */}
        <MouseFollower>
          {/* Central globe */}
          <Globe />
          <AtmosphereGlow />
          <GlobeNodes />
          <GlobeArcs />

          {/* Orbiting network rings */}
          <OrbitRing radius={3.2} tilt={0.4} speed={0.3} dotCount={4} opacity={0.7} />
          <OrbitRing radius={3.8} tilt={-0.6} speed={-0.2} dotCount={3} opacity={0.5} />
          <OrbitRing radius={4.3} tilt={1.0} speed={0.15} dotCount={5} opacity={0.4} />
        </MouseFollower>

        {/* Background particles stay in place */}
        <SpaceParticles />
      </Canvas>
    </div>
  )
}
