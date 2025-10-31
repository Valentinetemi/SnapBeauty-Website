"use client"

import { useState, useRef, useEffect } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Designer",
      quote:
        "Snapbeauty captured the essence of my brand perfectly. Their attention to detail and creative vision exceeded all my expectations.",
      image: "/professional-headshot.png",
    },
    {
      name: "Michael Chen",
      role: "CEO, Tech Startup",
      quote:
        "The professionalism and artistry displayed in our corporate portraits were outstanding. Highly recommended for any serious business.",
      image: "/professional-corporate-portrait.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Bride",
      quote:
        "Our wedding photos are absolutely breathtaking. Every moment was captured with elegance and love. We treasure these memories forever.",
      image: "/wedding-portrait-elegant.jpg",
    },
    {
      name: "David Park",
      role: "Artist",
      quote:
        "Working with Snapbeauty was a collaborative masterpiece. They understood my vision and brought it to life beautifully.",
      image: "/artist-portrait-creative.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-background/50 to-background pattern-accent"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">Testimonials</p>
            <div className="w-12 h-1 bg-accent" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">Client Stories</h2>
          <p className="text-foreground/70 text-lg">What our clients say about us</p>
        </div>

        <div
          className={`relative transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative p-1 bg-gradient-to-r from-accent via-accent/30 to-accent-secondary mb-8">
            <div className="bg-background/80 backdrop-blur-xl p-8 md:p-12 min-h-96 flex flex-col justify-between rounded-sm">
              {/* Quote */}
              <p className="font-serif text-2xl md:text-3xl text-foreground mb-8 italic leading-relaxed">
                {`"${testimonials[currentIndex].quote}"`}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-accent/20 pt-6">
                <div className="flex items-center gap-4">
                  <div className="ring-2 ring-accent p-1">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-accent text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-foreground/60 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-3 hover:bg-accent/10 rounded-full transition-all hover:scale-110 text-accent"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 hover:bg-accent/10 rounded-full transition-all hover:scale-110 text-accent"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-accent w-8" : "bg-accent/40 w-2 hover:bg-accent/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
