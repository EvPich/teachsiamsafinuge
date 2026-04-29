import { Link } from 'react-router-dom'
import { Mic2, Music, BookOpen } from 'lucide-react'

const pillars = [
  {
    icon: Mic2,
    title: 'Folk Theatre',
    desc: 'Original folk dramas rooted in the seasonal rituals, work traditions, and community celebrations of North Kerry. Our productions bring heritage to life on stage.',
  },
  {
    icon: Music,
    title: 'Traditional Music',
    desc: 'From the fiddle and concertina to the bodhrán and tin whistle, we nurture the musical traditions passed down through generations of North Kerry musicians.',
  },
  {
    icon: BookOpen,
    title: 'Heritage Education',
    desc: 'Workshops, school programmes, and community classes that ensure our folk traditions are passed to the next generation with skill and authenticity.',
  },
]

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="min-h-[360px] flex items-center justify-center"
        style={{ backgroundColor: '#2A2119' }}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col items-center gap-4 text-center">
          <span className="font-mono text-accent-gold text-xs uppercase tracking-[3px]">
            ABOUT
          </span>
          <h1 className="font-playfair text-5xl lg:text-[56px] text-fg-inv font-normal">
            Our Story
          </h1>
          <p
            className="font-inter text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.67)', maxWidth: 600 }}
          >
            Half a century of preserving North Kerry's folk arts heritage
          </p>
        </div>
      </section>

      {/* ── History ──────────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex flex-col gap-6 flex-1">
            <span className="font-mono text-accent text-xs uppercase tracking-[3px]">
              OUR HISTORY
            </span>
            <h2 className="font-playfair text-[48px] text-fg-primary font-normal leading-[1.1]">
              A Centre Born<br />of Tradition
            </h2>
            <p className="font-inter text-base text-fg-secondary leading-[1.7]">
              Teach Siamsa Finuge was founded in 1974 by a group of dedicated community members who
              saw the folk traditions of North Kerry slipping away. Inspired by the vision of
              Mícheál Ó Riabhaigh — the driving force behind Siamsa Tíre, Ireland's National Folk
              Theatre — they created a centre where music, dance, drama, and storytelling could
              flourish.
            </p>
            <p className="font-inter text-base text-fg-secondary leading-[1.7]">
              For over fifty years, the centre has served as a living repository of North Kerry's
              cultural identity. It has nurtured generations of performers, preserved ancient
              traditions, and brought the community together through the power of folk arts.
            </p>
          </div>
          {/* Image */}
          <div
            className="w-full lg:w-[500px] h-[440px] rounded overflow-hidden flex-shrink-0"
            style={{ backgroundColor: '#D4CBB8' }}
          >
            <img
              src="/images/about-history.jpg"
              alt="A Centre Born of Tradition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div
            className="w-full lg:w-[500px] h-[440px] rounded overflow-hidden flex-shrink-0"
            style={{ backgroundColor: '#D4CBB8' }}
          >
            <img
              src="/images/about-mission.jpg"
              alt="Keeping Traditions Alive"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col gap-6 flex-1">
            <span className="font-mono text-accent text-xs uppercase tracking-[3px]">
              OUR MISSION
            </span>
            <h2 className="font-playfair text-[48px] text-fg-primary font-normal leading-[1.1]">
              Keeping Traditions<br />Alive
            </h2>
            <p className="font-inter text-base text-fg-secondary leading-[1.7]">
              Teach Siamsa Finuge is dedicated to the preservation and promotion of the folk arts of
              North Kerry. Our mission is threefold: to safeguard the traditional music, dance, and
              drama of the region; to pass these skills to new generations; and to share our
              heritage with visitors from Ireland and around the world.
            </p>
            <p className="font-inter text-base text-fg-secondary leading-[1.7]">
              We believe that folk arts are not relics of the past but living, breathing expressions
              of community identity that grow richer with every generation that embraces them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-accent text-xs uppercase tracking-[3px]">
              WHAT WE DO
            </span>
            <h2 className="font-playfair text-[42px] text-fg-primary font-normal text-center">
              Three Pillars of Folk Arts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-5 text-center">
                <div
                  className="relative flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: '#F2EDE2' }}
                >
                  <Icon size={28} style={{ color: '#5A3A28' }} />
                </div>
                <h3 className="font-playfair text-[24px] font-semibold text-fg-primary">
                  {title}
                </h3>
                <p className="font-inter text-sm text-fg-secondary leading-[1.6]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Venue ────────────────────────────────────────────────────────── */}
      <section
        className="relative h-[500px] flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/about-venue.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1B3A28',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(27,58,40,0.53) 50%, rgba(27,58,40,0.87) 100%)',
          }}
        />
        <div className="relative w-full max-w-[1440px] mx-auto px-5 lg:px-20 pb-16">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <span className="font-mono text-accent-gold text-xs uppercase tracking-[3px]">
              THE VENUE
            </span>
            <h2 className="font-playfair text-[48px] text-fg-inv font-normal leading-tight">
              In the Heart of Finuge
            </h2>
            <p
              className="font-inter text-base leading-[1.7]"
              style={{ color: 'rgba(255,255,255,0.73)' }}
            >
              Nestled in the village of Finuge, just outside Listowel in County Kerry, our centre
              sits at the crossroads of tradition and community. The intimate theatre space and
              surrounding grounds offer a unique setting for experiencing the soul of North Kerry's
              folk culture.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#2A2119' }}>
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col items-center gap-6 text-center">
          <h2 className="font-playfair text-5xl text-fg-inv font-normal leading-tight">
            Visit Teach Siamsa
          </h2>
          <p
            className="font-inter text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.67)', maxWidth: 500 }}
          >
            Experience the living traditions of North Kerry. Plan your visit today.
          </p>
          <Link
            to="/visit"
            className="bg-accent-gold text-fg-primary font-inter text-sm font-semibold px-8 py-[14px] rounded hover:opacity-90 transition-opacity mt-2"
            style={{ color: '#2A2119' }}
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
}
