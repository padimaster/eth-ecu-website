"use client"

import { useEffect, useState } from "react"

export function ScrollingEthereumBg() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      console.log("[v0] Scroll Y:", window.scrollY) // Debug scroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large Ethereum Diamond - Main */}
      <div
        className="absolute opacity-20" // increased opacity from opacity-5 to opacity-20
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`,
          top: "20%",
          right: "10%",
        }}
      >
        <EthereumDiamond size={300} />
      </div>

      {/* Medium Ethereum Diamond */}
      <div
        className="absolute opacity-15" // increased opacity from opacity-3 to opacity-15
        style={{
          transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * -0.05}px)`,
          top: "60%",
          left: "5%",
        }}
      >
        <EthereumDiamond size={200} />
      </div>

      {/* Small Ethereum Diamond */}
      <div
        className="absolute opacity-25" // increased opacity from opacity-4 to opacity-25
        style={{
          transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * -0.08}px)`,
          top: "40%",
          left: "80%",
        }}
      >
        <EthereumDiamond size={150} />
      </div>

      {/* Tiny floating diamonds */}
      <div
        className="absolute opacity-10" // increased opacity from opacity-2 to opacity-10
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          top: "80%",
          right: "30%",
        }}
      >
        <EthereumDiamond size={80} />
      </div>

      <div
        className="absolute opacity-15" // increased opacity from opacity-2 to opacity-15
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          top: "10%",
          left: "30%",
        }}
      >
        <EthereumDiamond size={100} />
      </div>
    </div>
  )
}

function EthereumDiamond({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
      {/* Top triangle - Yellow */}
      <path d="M50 5 L20 45 L50 35 L80 45 Z" fill="#FFD700" className="opacity-90" />

      {/* Middle diamond - Blue with subtle gradient */}
      <defs>
        <linearGradient id={`blueGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d="M20 45 L50 35 L80 45 L50 55 Z" fill={`url(#blueGradient-${size})`} className="opacity-95" />

      {/* Bottom triangle - Red */}
      <path d="M20 45 L50 55 L50 95 Z" fill="#DC2626" className="opacity-80" />
      <path d="M80 45 L50 55 L50 95 Z" fill="#EF4444" className="opacity-80" />
    </svg>
  )
}
