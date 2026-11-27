import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])
  const link = (id, label) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
      className={`relative py-1 text-sm transition after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-white after:transition-all ${active === id ? 'text-white after:w-full' : 'text-white/70 after:w-0 hover:text-white hover:after:w-full'}`}>
      {label}
    </a>
  )
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${scrolled || open ? 'border-b border-white/10 bg-burgundy/80 backdrop-blur-lg' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-3xl tracking-wider">{profile.name.toUpperCase()}</a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">{nav.map(([id, l]) => link(id, l))}</nav>
        <button className="rounded-full p-2 hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="flex flex-col gap-4 px-6 pb-6 lg:hidden" aria-label="Mobile">{nav.map(([id, l]) => link(id, l))}</nav>}
    </header>
  )
}
