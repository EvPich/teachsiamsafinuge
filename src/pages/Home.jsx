import { Link } from 'react-router-dom'

const events = [
  {
    img: '/images/event-festival.jpg',
    date: 'JUL 12–20',
    title: 'Summer Festival of Folk Arts',
    desc: 'A week-long celebration of traditional music, dance, drama, and storytelling featuring performers from across Ireland.',
  },
  {
    img: '/images/event-workshop.jpg',
    date: 'AUG 3',
    title: 'Traditional Music Workshop',
    desc: 'Learn the fundamentals of tin whistle and bodhrán with master musicians in an intimate workshop setting.',
  },
  {
    img: '/images/event-storytelling.jpg',
    date: 'AUG 15',
    title: 'Heritage Storytelling Night',
    desc: 'An evening of tales from North Kerry — ancient myths, local legends, and personal memories shared by tradition bearers.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative h-[700px] flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1B3A28',
        }}
      >
        {/* Gradient overlay — top transparent → dark forest green at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, rgba(27,58,40,0.4) 40%, rgba(27,58,40,0.87) 100%)',
          }}
        />
        <div className="relative w-full max-w-[1440px] mx-auto px-5 lg:px-20 pb-20">
          <div className="flex flex-col gap-5 max-w-[700px]">
            <span className="font-mono text-accent-gold text-[13px] uppercase tracking-[3px]">
              CENTRE FOR FOLK ARTS &amp; CULTURE
            </span>
            <h1
              className="font-playfair text-[56px] lg:text-[80px] font-light text-fg-inv leading-[1.05]"
            >
              Teach Siamsa<br />Finuge
            </h1>
            <p
              className="font-inter text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.73)', maxWidth: 550 }}
            >
              Preserving and celebrating the folk traditions of North Kerry since 1974
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/whats-on"
                className="bg-accent text-fg-inv font-inter text-sm font-semibold px-8 py-[14px] rounded hover:opacity-90 transition-opacity"
              >
                What's On
              </Link>
              <Link
                to="/visit"
                className="font-inter text-sm font-semibold text-fg-inv px-8 py-[14px] rounded hover:bg-white/10 transition-colors"
                style={{ border: '2px solid rgba(255,255,255,0.8)' }}
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Label strip ──────────────────────────────────────────────────── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-5 flex items-center justify-center gap-8">
          {['EST. 1974', 'FOLK ARTS', 'CULTURE', 'COMMUNITY'].map((label, i, arr) => (
            <div key={label} className="flex items-center gap-8">
              <span className="font-mono text-[11px] text-fg-secondary uppercase tracking-[2px]">
                {label}
              </span>
              {i < arr.length - 1 && (
                <span className="h-3.5 w-px bg-border block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── About teaser ─────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex flex-col gap-6 flex-1">
            <span className="font-mono text-accent-olive text-xs uppercase tracking-[3px]">
              ABOUT
            </span>
            <h2 className="font-playfair text-[48px] text-fg-primary font-normal leading-tight">
              A Living Tradition
            </h2>
            <p className="font-inter text-base text-fg-secondary leading-[1.7]">
              Teach Siamsa Finuge is the home of folk theatre and traditional arts in North Kerry.
              Since 1974, the centre has been a beacon for the preservation of Ireland's rich folk
              heritage — from music and dance to drama and storytelling.
            </p>
            <p className="font-inter text-base text-fg-secondary leading-[1.7]">
              Rooted in the community of Finuge village, we continue the tradition begun by Mícheál
              Ó Riabhaigh and the founders of Siamsa Tíre, Ireland's National Folk Theatre.
            </p>
            <Link
              to="/about"
              className="font-inter text-sm font-semibold text-accent-olive hover:opacity-75 transition-opacity self-start"
            >
              Learn More →
            </Link>
          </div>
          {/* Image */}
          <div
            className="w-full lg:w-[480px] h-[400px] rounded overflow-hidden flex-shrink-0"
            style={{ backgroundColor: '#D4CBB8' }}
          >
            <img
              src="/images/about-illustration.jpg"
              alt="Traditional folk arts illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ──────────────────────────────────────────────── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20">
          <div className="flex flex-col items-center gap-3 mb-12">
            <span className="font-mono text-accent-olive text-xs uppercase tracking-[3px]">
              WHAT'S ON
            </span>
            <h2 className="font-playfair text-[42px] text-fg-primary font-normal text-center">
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map(({ img, date, title, desc }) => (
              <div
                key={title}
                className="bg-surface rounded overflow-hidden flex flex-col"
              >
                <div className="h-[220px] overflow-hidden" style={{ backgroundColor: '#C8C0B0' }}>
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="font-mono text-[11px] text-accent-olive uppercase tracking-[2px]">
                    {date}
                  </span>
                  <h3 className="font-playfair text-[22px] text-fg-primary font-semibold leading-snug">
                    {title}
                  </h3>
                  <p className="font-inter text-sm text-fg-secondary leading-[1.6]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage / 50 Years ──────────────────────────────────────────── */}
      <section className="bg-surface-inv">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex flex-col gap-6 flex-1">
            <span className="font-mono text-accent-gold text-xs uppercase tracking-[3px]">
              OUR HERITAGE
            </span>
            <h2
              className="font-playfair text-[48px] font-normal leading-[1.1]"
              style={{ color: '#FFFFFF' }}
            >
              50 Years of<br />Folk Arts
            </h2>
            <p
              className="font-inter text-base leading-[1.7]"
              style={{ color: 'rgba(255,255,255,0.67)' }}
            >
              Since 1974, Teach Siamsa Finuge has stood as a guardian of North Kerry's folk
              traditions. What began as a humble community initiative has grown into one of
              Ireland's most cherished centres for folk arts and culture.
            </p>
            <p
              className="font-inter text-base leading-[1.7]"
              style={{ color: 'rgba(255,255,255,0.67)' }}
            >
              From the sean-nós singing and set dancing of our ancestors to the folk dramas that
              bring our heritage to life on stage, every performance at Teach Siamsa is a thread
              connecting past to present.
            </p>
          </div>
          {/* Image */}
          <div
            className="w-full lg:w-[480px] h-[400px] rounded overflow-hidden flex-shrink-0"
            style={{ backgroundColor: '#2C5040' }}
          >
            <img
              src="/images/heritage.jpg"
              alt="50 years of folk arts at Teach Siamsa Finuge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
