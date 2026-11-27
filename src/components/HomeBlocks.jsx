import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featured } from '../data'
import { Reveal } from './Shared'

export function Stats() {
  const s = [['3.88', 'CGPA out of 4.0'], ['8', 'Design services'], ['25+', 'Projects shown'], ['3', 'Languages spoken']]
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal className="glass grid grid-cols-2 divide-white/15 md:grid-cols-4 md:divide-x">
        {s.map(([n, l]) => (
          <div key={l} className="px-6 py-8 text-center"><p className="font-display text-6xl leading-none">{n}</p><p className="mt-2 text-sm font-light text-white/75">{l}</p></div>
        ))}
      </Reveal>
    </section>
  )
}

export function Featured() {
  return (
    <section className="section">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div><p className="kicker">Selected work</p><h2 className="mt-2 font-display text-6xl leading-none tracking-wide sm:text-7xl">Featured Projects</h2></div>
        <Link to="/portfolio" className="btn btn-ghost">View All Work <ArrowRight size={16} /></Link>
      </Reveal>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {featured.map((p) => (
          <Link key={p.src} to="/portfolio" className="group relative mb-5 block break-inside-avoid overflow-hidden rounded-2xl shadow-glass">
            <img src={p.src} alt={p.title} loading="lazy" className="block h-auto w-full transition duration-500 group-hover:scale-[1.04]" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy/95 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100"><span className="block text-xs text-soft">{p.category}</span><span className="font-medium">{p.title}</span></span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <Reveal className="glass relative overflow-hidden px-8 py-14 text-center sm:px-16">
        <h2 className="mx-auto max-w-3xl font-display text-5xl leading-none tracking-wide sm:text-7xl">Let's create something extraordinary together.</h2>
        <p className="mx-auto mt-4 max-w-xl font-light text-white/80">Have a logo, social media campaign or print project in mind? Send me the details.</p>
        <Link to="/contact" className="btn btn-solid mt-8">Start a Project</Link>
      </Reveal>
    </section>
  )
}
