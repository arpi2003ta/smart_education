"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { Beaker, BookOpen, Atom, Zap, Thermometer, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import '../app/globals.css'

const RotatingFlask = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </svg>
)

const MicroscopeSymbol = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
)

export default function PhysicsHomePage() {
  const [particleCount, setParticleCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setParticleCount(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const experiments = [
    { title: "Kinematics", icon: Zap, description: "Study motion and its causes" },
    { title: "Thermodynamics", icon: Thermometer, description: "Investigate heat and energy transfer" },
    { title: "Optics", icon: Eye, description: "Discover the behavior of light" },
    { title: "Quantum Mechanics", icon: Atom, description: "Explore the subatomic world" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f8ff] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <RotatingFlask />
        </motion.div>
      </div>

      <header className="w-full py-4 bg-[#1a237e] text-white relative z-10">
        <div className="container px-4 md:px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Virtual Physics Lab</h1>
          <nav className="space-x-2">
            <Button
              variant="ghost"
              asChild
              className={cn(
                "hover:bg-blue-400 hover:text-white transition-colors duration-200",
                "focus:ring-2 focus:ring-blue-400 focus:outline-none"
              )}
            >
              <Link href="#experiments">Experiments</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className={cn(
                "hover:bg-blue-400 hover:text-white transition-colors duration-200",
                "focus:ring-2 focus:ring-blue-400 focus:outline-none"
              )}
            >
              <Link href="#ar-textbooks">AR Textbooks</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        <section className="w-full py-12 md:py-24 bg-[#1a237e] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <MicroscopeSymbol />
            </motion.div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Your Virtual Lab
                </h2>
                <p className="mx-auto max-w-[700px] mt-4 text-lg text-blue-200">
                  Explore the wonders of physics through interactive experiments and AR textbooks
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild className="bg-white text-[#1a237e] hover:bg-blue-100">
                  <Link href="#experiments">Start Experimenting</Link>
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: i < particleCount ? 1 : 0,
                  scale: i < particleCount ? 1 : 0,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </section>

        <section id="experiments" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1a237e]">
              Virtual Experiments
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {experiments.map((experiment, index) => (
                <motion.div
                  key={experiment.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-[#1a237e] hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <experiment.icon className="w-12 h-12 mb-2 text-[#1a237e]" />
                      <CardTitle className="text-[#1a237e]">{experiment.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{experiment.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="ar-textbooks" className="w-full py-12 md:py-24 bg-[#e8eaf6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1a237e] mb-4">
                  AR Textbooks
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Bring physics concepts to life with our augmented reality textbooks. See 3D models and animations right on your device.
                </p>
                <Button asChild className="bg-[#1a237e] text-white hover:bg-[#3f51b5]">
                  <Link href="/ar-textbooks">Explore AR Textbooks</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  className="relative w-full h-64 bg-[#1a237e] rounded-lg overflow-hidden"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-[#1a237e] text-white relative z-10">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm">
            © 2023 Virtual Science Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}