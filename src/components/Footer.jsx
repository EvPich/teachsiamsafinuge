import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-inv">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-12 pb-10">
        {/* Top columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-10">
          {/* Venue */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent-gold text-[11px] uppercase tracking-[2px]">
              VENUE
            </span>
            <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.67)' }}>
              Finuge, Listowel<br />Co. Kerry, Ireland
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent-gold text-[11px] uppercase tracking-[2px]">
              CONTACT
            </span>
            <a
              href="mailto:info@teachsiamsa.ie"
              className="font-inter text-sm transition-colors"
              style={{ color: 'rgba(255,255,255,0.67)' }}
            >
              info@teachsiamsa.ie
            </a>
            <a
              href="tel:06840555"
              className="font-inter text-sm transition-colors"
              style={{ color: 'rgba(255,255,255,0.67)' }}
            >
              068 40555
            </a>
          </div>

          {/* Follow */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-accent-gold text-[11px] uppercase tracking-[2px]">
              FOLLOW US
            </span>
            <div className="flex items-center gap-4">
              {[
                { label: 'Facebook', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M6.5 2.5h11a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4v-11a4 4 0 0 1 4-4z' },
                { label: 'YouTube', d: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              ].map(({ label, d }) => (
                <a key={label} href="#" aria-label={label} style={{ color: 'rgba(255,255,255,0.67)' }} className="hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-accent-gold text-[11px] uppercase tracking-[2px]">
              EXPLORE
            </span>
            {["What's On", 'About Us', 'Education', 'Support Us'].map((label) => (
              <Link
                key={label}
                to="#"
                className="font-inter text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.67)' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: 'rgba(255,255,255,0.13)' }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-fg-muted">
            © 2026 Teach Siamsa Finuge. All rights reserved.
          </p>
          <span className="font-playfair text-base font-light text-fg-muted">
            Teach Siamsa
          </span>
        </div>
      </div>
    </footer>
  )
}
