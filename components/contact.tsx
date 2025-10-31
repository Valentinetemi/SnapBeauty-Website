"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 md:px-8 bg-background pattern-accent">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent" />
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">Get in Touch</p>
            <div className="w-12 h-1 bg-accent" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">Let's Connect</h2>
          <p className="text-foreground/70 text-lg">Let's create something beautiful together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-accent uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border-2 border-accent/30 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground placeholder-foreground/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-accent uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border-2 border-accent/30 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground placeholder-foreground/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-accent uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-background/50 border-2 border-accent/30 px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none text-foreground placeholder-foreground/40"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-background font-semibold py-3 hover:bg-accent/90 transition-all hover:scale-105 uppercase tracking-wider shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="space-y-8">
              <div className="flex gap-4 p-6 bg-background/50 border-l-4 border-accent hover:bg-background/70 transition-colors">
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1 text-accent uppercase tracking-wider text-sm">Email</h3>
                  <p className="text-foreground/70">snapbeauty@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background/50 border-l-4 border-accent-secondary hover:bg-background/70 transition-colors">
                <svg
                  className="w-6 h-6 text-accent-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.029a11.042 11.042 0 01-5.516 5.516l-1.029-2.048a1 1 0 00-.756-.502l-4.493-1.498a1 1 0 00-.684-.948A2 2 0 013 5z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1 text-accent-secondary uppercase tracking-wider text-sm">Phone</h3>
                  <p className="text-foreground/70">+234 555 123 4567</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-background/50 border-l-4 border-accent-tertiary hover:bg-background/70 transition-colors">
                <svg
                  className="w-6 h-6 text-accent-tertiary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1 text-accent-tertiary uppercase tracking-wider text-sm">Location</h3>
                  <p className="text-foreground/70">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-accent/20">
                <h3 className="font-semibold mb-4 text-accent uppercase tracking-wider text-sm">Follow Us</h3>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-accent hover:text-accent/70 transition-all hover:scale-110 text-sm font-semibold"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
