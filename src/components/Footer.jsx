import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook, Palette, GraduationCap } from 'lucide-react'
import { profile, nav, services, img } from '../data'

export default function Footer() {
  const social = [[Linkedin, 'LinkedIn', profile.socials.linkedin], [Instagram, 'Instagram', profile.socials.instagram], [Facebook, 'Facebook', profile.socials.facebook], [Palette, 'Behance', profile.socials.behance]]
  const h = 'mb-5 font-display text-2xl tracking-widest text-soft'
  const a = 'text-sm font-light text-white/75 transition hover:text-white'
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-plum/70 to-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/30 bg-white/10 font-display text-2xl">AA</span>
            <span className="font-display text-3xl tracking-widest">AIMAN ALI</span>
          </div>
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/75">Graphic designer and video editor specializing in logo design, branding and creative digital content. Designing ideas into reality.</p>
          <p className="mt-4 flex items-start gap-2 text-xs font-light text-white/65"><GraduationCap size={16} className="mt-0.5 shrink-0" />Certified Graphic Designer — Arfa Karim Technology Incubator, Peshawar</p>
          <div className="mt-6 flex gap-3">
            {social.map(([Icon, label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition hover:-translate-y-1 hover:bg-white hover:text-plum"><Icon size={17} /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className={h}>Quick Links</h3>
          <ul className="space-y-3">{nav.map(([to, l]) => <li key={to}><Link className={a} to={to}>{l}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={h}>Services</h3>
          <ul className="space-y-3">{services.map(([t]) => <li key={t}><Link className={a} to="/services">{t}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={h}>Get In Touch</h3>
          <ul className="space-y-4 text-sm font-light text-white/80">
            <li><a className="flex gap-3 hover:text-white" href={`mailto:${profile.email}`}><Mail size={18} className="shrink-0" /><span className="break-all">{profile.email}</span></a></li>
            <li><a className="flex gap-3 hover:text-white" href={profile.whatsapp}><MessageCircle size={18} className="shrink-0" />WhatsApp: {profile.phone}</a></li>
            <li><a className="flex gap-3 hover:text-white" href={`tel:${profile.phone}`}><Phone size={18} className="shrink-0" />{profile.phone}</a></li>
            <li className="flex gap-3"><MapPin size={18} className="shrink-0" />{profile.location}</li>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <img src={img('linkedin-qr.png')} alt="QR code for Aiman's LinkedIn profile" className="h-20 w-auto rounded-lg" />
            <p className="text-xs font-light text-white/65">Scan to view my LinkedIn profile</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Aiman Ali. All rights reserved.</p>
          <p>Designed &amp; created by Aiman Ali · {profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
