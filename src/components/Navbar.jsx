import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  const cls = ({ isActive }) =>
    `relative py-1 text-sm transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:transition-all ${isActive ? 'text-white after:w-full' : 'text-white/70 after:w-0 hover:text-white hover:after:w-full'}`
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${scrolled || open ? 'border-b border-white/10 bg-burgundy/85 shadow-lg backdrop-blur-lg' : ''}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Aiman Ali home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/30 bg-white/10 font-display text-2xl leading-none">AA</span>
          <span className="leading-tight"><span className="block font-display text-2xl tracking-widest">AIMAN ALI</span><span className="block text-[11px] text-white/65">Graphic Designer &amp; Video Editor</span></span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{l}</NavLink>)}
          <Link to="/contact" className="btn btn-solid !px-5 !py-2">Hire Me</Link>
        </nav>
        <button className="rounded-full p-2 hover:bg-white/10 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 px-6 pb-7 pt-2 md:hidden" aria-label="Mobile">
          {nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{l}</NavLink>)}
        </nav>
      )}
    </header>
  )
}
