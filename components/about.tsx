"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-background to-background/80 pattern-accent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative p-1 bg-gradient-to-br from-accent via-accent/50 to-accent-secondary/50">
              <img
                src="/portrait-photography-artist.jpg"
                alt="About Snapbeauty"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-accent" />
              <p className="text-accent font-semibold uppercase tracking-widest text-sm">Our Story</p>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Capturing <span className="text-accent">African</span> Beauty
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Snapbeauty was founded on the belief that every moment deserves to be captured with elegance and
              authenticity. Our team of passionate photographers brings years of experience and a keen eye for detail to
              every project.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              We specialize in creating timeless imagery that tells your unique story. From intimate portraits to grand
              events, we're committed to delivering exceptional quality and unforgettable experiences rooted in
              authentic African culture and aesthetics.
            </p>
            <div className="flex gap-8">
              <div className="flex-1 p-4 border-l-4 border-accent bg-background/50">
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-foreground/60 text-sm">Happy Clients</p>
              </div>
              <div className="flex-1 p-4 border-l-4 border-accent-secondary bg-background/50">
                <p className="text-3xl font-bold text-accent-secondary">12+</p>
                <p className="text-foreground/60 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
