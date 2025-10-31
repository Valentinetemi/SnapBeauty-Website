"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToGallery = () => {
    const element = document.getElementById("gallery")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/portrait-photography-artist.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-black/70 to-background/60" />
        <div className="absolute inset-0 opacity-10 pattern-accent" />
      </div>

      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`font-serif text-6xl md:text-8xl font-bold text-accent mb-4 transition-all duration-1000 transform drop-shadow-2xl ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Snapbeauty
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mb-8" />
        <p
          className={`text-xl md:text-2xl text-white/95 mb-8 max-w-2xl transition-all duration-1000 delay-300 transform font-light ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Capturing timeless beauty through an African lens
        </p>
        <button
          onClick={scrollToGallery}
          className={`mt-8 px-8 py-3 bg-accent text-background font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-500 transform shadow-lg hover:shadow-xl uppercase tracking-wider ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          View Gallery
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  )
}
