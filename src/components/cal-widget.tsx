"use client"

import type React from "react"

import Link from "next/link"
import { Calendar, Clock, Target, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface WidgetState {
  url: string
  title: string
  subtitle: string
  description: string
  duration: string
  icon: React.ReactNode
  color: string
}

const widgetStates: WidgetState[] = [
  {
    url: "https://cal.com/saiiyen",
    title: "General Meeting",
    subtitle: "Let's connect!",
    description: "Schedule a call to discuss your project and explore opportunities.",
    duration: "Flexible",
    icon: <Calendar className="w-4 h-4" />,
    color: "from-blue-50 to-indigo-50 border-blue-200",
  },
  {
    url: "https://cal.com/saiiyen/getmvpbuilt-15min?overlayCalendar=true",
    title: "Quick Talk",
    subtitle: "15 Min Meeting",
    description: "Brief introductions and getting familiar with your vision.",
    duration: "15 min",
    icon: <Lightbulb className="w-4 h-4" />,
    color: "from-green-50 to-emerald-50 border-green-200",
  },
  {
    url: "https://cal.com/saiiyen/getmvpbuilt-30min?overlayCalendar=true",
    title: "Get MVP Built",
    subtitle: "30 Min Meeting",
    description: "Deep dive into your project and build a comprehensive plan.",
    duration: "30 min",
    icon: <Target className="w-4 h-4" />,
    color: "from-purple-50 to-violet-50 border-purple-200",
  },
]

export function CalWidget() {
  const [currentState, setCurrentState] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % widgetStates.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const current = widgetStates[currentState]

  return (
    <Link
      href={current.url}
      target="_blank"
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl bg-gradient-to-br ${current.color}
          border p-6 shadow-lg transition-all duration-500 ease-out
          hover:shadow-xl hover:scale-105 hover:-translate-y-1
          ${isHovered ? `bg-gradient-to-br ${current.color}` : ""}
        `}
        style={{ width: "280px", height: "160px" }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-blue-500"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-purple-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src="https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/meh.JPG"
                  alt="Saikumar Katravath"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Cal.com</h3>
                <p className="text-xs text-gray-500">Saikumar K.</p>
              </div>
            </div>
            <div className={`transition-transform duration-300 ${isHovered ? "translate-x-1 -translate-y-1" : ""}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-1">
            <h4 className="font-medium text-gray-900 text-sm">{current.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{current.description}</p>
          </div>

          {/* Footer indicators */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">{current.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                {current.icon}
                <span className="text-xs text-gray-500">1-on-1</span>
              </div>
            </div>
            <div className="flex space-x-1">
              {widgetStates.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    index === currentState ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
            transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
    </Link>
  )
}
