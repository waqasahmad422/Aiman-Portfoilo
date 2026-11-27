import { useEffect, useRef, useState } from 'react'
import { img } from '../data'

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.12 })
    ref.current && io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}>
      {children}
    </div>
  )
}

// Lettering cropped from the original slides (white on transparent) or plain display text.
export function SectionTitle({ file, text, className = '' }) {
  return (
    <Reveal className={`mb-12 ${className}`}>
      {file ? (
        <h2 className="flex"><img src={img(file)} alt={text} className="h-14 w-auto max-w-full sm:h-20 md:h-24" /></h2>
      ) : (
        <h2 className="font-display text-6xl leading-none tracking-wide sm:text-8xl">{text}</h2>
      )}
      <span className="mt-4 block h-[3px] w-24 rounded bg-gradient-to-r from-white to-accent" />
    </Reveal>
  )
}

export function Background() {
  const dots = Array.from({ length: 28 }, (_, i) => ({ l: (i * 37) % 100, t: (i * 53) % 100, d: (i % 7) * 0.8, s: 2 + (i % 3) }))
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#E9D6E2" strokeWidth="1">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} className="animate-drift" strokeDasharray="300 300" opacity={0.5 - i * 0.06}
            d={`M-100 ${700 - i * 90} C 300 ${300 + i * 60}, 700 ${1000 - i * 70}, 1700 ${200 + i * 110}`} />
        ))}
        <path d="M-50 150 C 400 -50, 900 450, 1650 80" opacity=".35" />
      </svg>
      {dots.map((d, i) => (
        <span key={i} className="absolute animate-twinkle rounded-full bg-soft"
          style={{ left: `${d.l}%`, top: `${d.t}%`, width: d.s, height: d.s, animationDelay: `${d.d}s`, boxShadow: '0 0 8px 2px rgba(233,214,226,.6)' }} />
      ))}
    </div>
  )
}

// Simple original software marks (SVG) so they stay crisp at any size.
export function SkillIcon({ id }) {
  const sq = (c1, c2, t) => (
    <svg viewBox="0 0 100 100" className="h-20 w-20">
      <rect x="22" y="6" width="72" height="72" rx="10" fill={c2} />
      <rect x="6" y="22" width="72" height="72" rx="10" fill={c1} />
      <text x="42" y="70" textAnchor="middle" fontFamily="Poppins,sans-serif" fontWeight="600" fontSize="38" fill={c2}>{t}</text>
    </svg>
  )
  switch (id) {
    case 'ai': return sq('#330000', '#FF9A00', 'Ai')
    case 'ps': return sq('#001E36', '#31C5F0', 'Ps')
    case 'pr': return sq('#1F0030', '#EA77FF', 'Pr')
    case 'canva': return (
      <svg viewBox="0 0 100 100" className="h-20 w-20"><defs><linearGradient id="cv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00C4CC" /><stop offset=".55" stopColor="#2F8EF0" /><stop offset="1" stopColor="#7D2AE8" /></linearGradient></defs>
        <circle cx="50" cy="50" r="46" fill="url(#cv)" /><text x="50" y="72" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" fontSize="62" fill="#fff">C</text></svg>)
    case 'corel': return (
      <svg viewBox="0 0 100 100" className="h-20 w-20"><circle cx="50" cy="50" r="45" fill="none" stroke="#6AA121" strokeWidth="4" />
        <path d="M50 16c-16 0-24 12-24 26 0 12 8 22 20 30h8c12-8 20-18 20-30 0-14-8-26-24-26z" fill="#6AA121" /><path d="M50 16v56M38 20c-6 14-4 34 8 52M62 20c6 14 4 34-8 52" stroke="#1d3a05" strokeWidth="2" fill="none" /><rect x="43" y="76" width="14" height="7" rx="2" fill="#6AA121" /></svg>)
    default: return (
      <svg viewBox="0 0 100 100" className="h-20 w-20"><path d="M18 26 58 8l24 8v68l-24 8-40-18z" fill="#EB3C00" /><path d="M58 8v84M18 26v48l40-12V30z" fill="none" /><path d="M42 36 58 31v38l-16-5z" fill="#8a1f00" opacity=".0" /><path d="M42 34 66 27v46l-24-7z" fill="#5a0d00" opacity=".55" /><path d="M18 74 58 92l24-8-40-14z" fill="#FF7A45" opacity=".8" /></svg>)
  }
}
