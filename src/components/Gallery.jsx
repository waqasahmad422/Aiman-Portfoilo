import { useEffect, useState } from 'react'
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { categories, projects } from '../data'
import { Reveal } from './Shared'

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  const step = (d) => setOpen((i) => (i + d + list.length) % list.length)

  useEffect(() => {
    if (open === null) return
    const key = (e) => (e.key === 'Escape' ? setOpen(null) : e.key === 'ArrowRight' ? step(1) : e.key === 'ArrowLeft' && step(-1))
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', key)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key) }
  }, [open, list.length])

  return (
    <section id="work" className="section !pt-4">
      <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Project categories">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 text-sm transition ${cat === c ? 'border-white bg-white text-plum' : 'border-white/30 hover:bg-white/15'}`}>{c}</button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <button key={p.src} onClick={() => setOpen(i)} aria-label={`View project: ${p.title}`}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white/10 shadow-glass focus-visible:outline focus-visible:outline-2 focus-visible:outline-soft">
            <img src={p.src} alt={p.title} loading="lazy" className="block h-auto w-full transition duration-500 group-hover:scale-[1.04]" />
            <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-burgundy/95 via-burgundy/50 to-transparent p-5 text-left opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="text-xs text-soft">{p.category}</span>
              <span className="text-base font-medium leading-snug">{p.title}</span>
              <span className="mt-2 inline-flex items-center gap-2 text-sm"><Eye size={16} /> View Project</span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && list[open] && (
        <div role="dialog" aria-modal="true" aria-label={list[open].title} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-3 hover:bg-white/25" onClick={() => setOpen(null)} aria-label="Close"><X /></button>
          <button className="absolute left-3 rounded-full bg-white/10 p-3 hover:bg-white/25 sm:left-6" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous"><ChevronLeft /></button>
          <button className="absolute right-3 rounded-full bg-white/10 p-3 hover:bg-white/25 sm:right-6" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next"><ChevronRight /></button>
          <figure className="max-h-full max-w-5xl text-center" onClick={(e) => e.stopPropagation()}>
            <img src={list[open].src} alt={list[open].title} className="mx-auto max-h-[78vh] w-auto max-w-full rounded-xl shadow-2xl" />
            <figcaption className="mt-4"><span className="block text-sm text-soft">{list[open].category}</span><span className="text-lg">{list[open].title}</span></figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
