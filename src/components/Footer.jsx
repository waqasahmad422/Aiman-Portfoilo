import { profile } from '../data'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-burgundy/60 py-10 text-center">
      <p className="font-display text-4xl tracking-widest">{profile.name.toUpperCase()}</p>
      <p className="mt-1 text-sm font-light text-white/70">Graphic Designer &amp; Video Editor · {profile.location}</p>
      <p className="mt-4 text-xs text-white/50">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
