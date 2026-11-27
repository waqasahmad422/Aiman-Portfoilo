import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook, Palette } from 'lucide-react'
import { profile, img } from '../data'
import { Reveal } from './Shared'

const field = 'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder:text-white/50 outline-none transition focus:border-white/70 focus:bg-white/15'

export default function Contact() {
  const [sent, setSent] = useState(false)
  // No backend: the form opens the visitor's email app addressed to Aiman.
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.get('subject') || 'Portfolio enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const item = (Icon, label, value, href) => (
    <a href={href} className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-white/10">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15"><Icon size={20} /></span>
      <span><span className="block text-xs text-soft">{label}</span><span className="break-all text-sm">{value}</span></span>
    </a>
  )
  const social = [[Linkedin, 'LinkedIn', profile.socials.linkedin], [Instagram, 'Instagram', profile.socials.instagram], [Facebook, 'Facebook', profile.socials.facebook], [Palette, 'Behance', profile.socials.behance]]
  return (
    <section id="contact" className="section pt-32 md:pt-40">
      <Reveal className="mb-12">
        <h2 className="max-w-3xl font-display text-6xl leading-[.95] tracking-wide sm:text-8xl">LET'S CREATE SOMETHING AMAZING!</h2>
        <p className="mt-5 max-w-xl font-light text-white/85">Designing ideas into reality — tell me about your project and I'll get back to you.</p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={submit} className="glass grid gap-4 p-7 sm:grid-cols-2 sm:p-10">
            <label className="sr-only" htmlFor="n">Name</label><input id="n" name="name" required placeholder="Your name" className={field} />
            <label className="sr-only" htmlFor="e">Email</label><input id="e" name="email" type="email" required placeholder="Your email" className={field} />
            <label className="sr-only" htmlFor="s">Subject</label><input id="s" name="subject" placeholder="Subject" className={`${field} sm:col-span-2`} />
            <label className="sr-only" htmlFor="m">Message</label><textarea id="m" name="message" required rows={5} placeholder="Tell me about your project" className={`${field} sm:col-span-2`} />
            <div className="flex items-center gap-4 sm:col-span-2">
              <button className="btn btn-solid" type="submit">Send Message</button>
              {sent && <span className="text-sm text-soft" role="status">Your email app should open with the message ready to send.</span>}
            </div>
          </form>
        </Reveal>
        <Reveal delay={120} className="glass flex flex-col gap-2 p-7 sm:p-8">
          {item(Mail, 'Email', profile.email, `mailto:${profile.email}`)}
          {item(MessageCircle, 'WhatsApp', profile.phone, profile.whatsapp)}
          {item(Phone, 'Phone', profile.phone, `tel:${profile.phone}`)}
          {item(MapPin, 'Location', profile.location, '#contact')}
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/15 pt-5">
            {social.map(([Icon, label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition hover:-translate-y-1 hover:bg-white hover:text-plum"><Icon size={18} /></a>
            ))}
            <img src={img('linkedin-qr.png')} alt="QR code to view Aiman's LinkedIn profile" className="ml-auto h-24 w-auto rounded-lg" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
