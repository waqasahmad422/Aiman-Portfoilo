import { education } from '../data'
import { Reveal, SectionTitle } from './Shared'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle file="h-education.png" text="Education & Certification" className="flex flex-col items-center" />
      <Reveal className="glass p-8 sm:p-12">
        <h3 className="mb-8 font-display text-3xl tracking-wide text-soft">Education</h3>
        <div className="grid gap-9 md:grid-cols-3">
          {education.map((e) => (
            <div key={e.year} className="bar-label">
              <p className="text-2xl font-light">{e.year}</p>
              <p className="text-xl font-medium leading-snug">{e.title}</p>
              <p className="mt-1 text-sm font-light text-white/85">{e.place}</p>
              <p className="text-sm font-light text-white/85">{e.note}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120} className="glass mt-6 p-8 sm:p-12">
        <h3 className="mb-8 font-display text-3xl tracking-wide text-soft">Certification</h3>
        <div className="grid gap-9 md:grid-cols-2">
          <div className="bar-label">
            <p className="text-2xl font-medium">Graphic Designing Certificate</p>
            <p className="mt-1 font-light text-white/85">Arfa Karim Technology Incubator, Peshawar</p>
          </div>
          <div className="bar-label">
            <p className="text-2xl font-medium">3 Months — Fully Certified</p>
            <p className="mt-1 font-light text-white/85">Sep 19, 2025</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
