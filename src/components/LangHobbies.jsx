import { languages, hobbies } from '../data'
import { Reveal, SectionTitle } from './Shared'

export default function LangHobbies() {
  return (
    <section id="more" className="section">
      <SectionTitle file="h-lang.png" text="Language & Hobbies" className="flex flex-col items-center" />
      <Reveal className="glass grid gap-8 p-8 sm:grid-cols-3 sm:p-12">
        {languages.map(([l, lvl]) => (
          <div key={l} className="bar-label"><p className="text-xl font-medium uppercase">{l}</p><p className="font-light text-white/80">({lvl})</p></div>
        ))}
      </Reveal>
      <Reveal delay={120} className="glass mt-6 grid gap-8 p-8 sm:grid-cols-3 sm:p-12">
        {hobbies.map((h) => <div key={h} className="bar-label"><p className="text-xl font-medium uppercase">{h}</p></div>)}
      </Reveal>
    </section>
  )
}
