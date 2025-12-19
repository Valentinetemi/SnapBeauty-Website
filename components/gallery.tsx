"use client"

import { useState, useRef, useEffect } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const images = [
    "/image2.jpg",
    "/artistic-nude-photography-aesthetic.jpg",
    "/image5.png",
    "/image3.jpg",
    "/image4.jpg",
    "/image1.jpg",
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section id="gallery" ref={ref} className="py-20 px-4 md:px-8 bg-background pattern-accent">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">Our Work</p>
            <div className="w-12 h-1 bg-accent" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">Gallery</h2>
          <p className="text-foreground/70 text-lg">A celebration of beauty captured through our lens</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden aspect-square cursor-pointer group transition-all duration-1000 transform ring-2 ring-accent/20 hover:ring-accent/60 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <p className="text-white font-serif text-lg drop-shadow-lg">View</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-accent hover:text-accent/80 transition-colors hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-accent hover:text-accent/80 transition-colors hover:scale-110"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`Full size ${selectedImage + 1}`}
            className="max-w-4xl max-h-[80vh] object-contain animate-in zoom-in duration-300 shadow-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-accent hover:text-accent/80 transition-colors hover:scale-110"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-accent/80 font-serif flex gap-2">
            <span className="text-accent font-bold">{selectedImage + 1}</span>
            <span className="text-foreground/60">/</span>
            <span className="text-foreground/60">{images.length}</span>
          </div>
        </div>
      )}
    </section>
  )
}
