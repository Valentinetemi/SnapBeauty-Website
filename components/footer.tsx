export default function Footer() {
  return (
    <footer className="bg-background/95 border-t-2 border-accent py-16 px-4 md:px-8 pattern-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-accent mb-3 drop-shadow-lg">Snapbeauty</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Capturing timeless African beauty through authentic storytelling and artistic vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#home" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent-secondary mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent-secondary transition-colors hover:translate-x-1 inline-block">
                  Portrait
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-secondary transition-colors hover:translate-x-1 inline-block">
                  Wedding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-secondary transition-colors hover:translate-x-1 inline-block">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-secondary transition-colors hover:translate-x-1 inline-block">
                  Corporate
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-accent-tertiary mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent-tertiary transition-colors hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-tertiary transition-colors hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-tertiary transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent/20 pt-8">
          <p className="text-center text-foreground/60 text-sm font-medium">
            © 2025 Snapbeauty. All rights reserved. Celebrating African beauty and storytelling.
          </p>
        </div>
      </div>
    </footer>
  )
}
