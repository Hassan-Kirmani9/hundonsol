'use client'
import { useEffect, useState } from 'react'

export default function FlowingBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }) // default to center

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transition: 'background 0.3s ease',
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgb(180, 83, 9) 0%, rgb(15, 23, 42) 50%, rgb(3, 7, 18) 100%)`
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.7,
          background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to bottom right, rgba(234, 88, 12, 0.1), rgba(234, 88, 12, 0))',
        }}
      />
    </div>
  )
}