import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: "What's On", to: '/whats-on' },
  { label: 'About',     to: '/about' },
  { label: 'Visit',     to: '/visit' },
  { label: 'Education', to: '/education' },
  { label: 'Support',   to: '/support' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[72px] px-5 lg:px-20">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Teach Siamsa Finuge"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextSibling.style.display = 'block'
            }}
          />
          <span
            className="font-playfair text-xl font-semibold text-fg-primary hidden"
            style={{ display: 'none' }}
          >
            Teach Siamsa
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-inter text-sm transition-colors ${
                  isActive ? 'text-fg-primary font-medium' : 'text-fg-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/support"
          className="hidden lg:block bg-accent text-fg-inv font-inter text-sm font-semibold px-6 py-[10px] rounded hover:opacity-90 transition-opacity"
        >
          Donate
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open
            ? <X size={24} className="text-fg-primary" />
            : <Menu size={24} className="text-fg-primary" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-surface border-t border-border px-5 pb-5">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 font-inter text-sm border-b border-border ${
                  isActive ? 'text-fg-primary font-medium' : 'text-fg-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/support"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-accent text-fg-inv font-inter text-sm font-semibold px-6 py-3 rounded text-center hover:opacity-90 transition-opacity"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  )
}
