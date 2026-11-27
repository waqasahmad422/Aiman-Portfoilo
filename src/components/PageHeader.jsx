import { Link } from 'react-router-dom'
import { Reveal } from './Shared'

export default function PageHeader({ title, sub, crumb }) {
  return (
    <header className="relative px-5 pb-6 pt-36 sm:px-8 md:pt-44">
      <Reveal className="mx-auto max-w-7xl">
        <p className="text-sm font-light text-white/70"><Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> {crumb || title}</p>
        <h1 className="mt-3 font-display text-7xl leading-none tracking-wide sm:text-9xl">{title}</h1>
        <p className="mt-4 max-w-xl font-light text-white/80">{sub}</p>
        <span className="mt-6 block h-[3px] w-24 rounded bg-gradient-to-r from-white to-accent" />
      </Reveal>
    </header>
  )
}
