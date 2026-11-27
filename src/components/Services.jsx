import { Shapes, Printer, PenTool, Smartphone, Package, Monitor, Type, Clapperboard } from 'lucide-react'
const Icons = { Shapes, Printer, PenTool, Smartphone, Package, Monitor, Type, Clapperboard }
import { services } from '../data'
import { Reveal, SectionTitle } from './Shared'

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle file="h-services.png" text="My Services" className="flex flex-col items-center" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(([title, desc, icon], i) => {
          const Icon = Icons[icon]
          return (
            <Reveal key={title} delay={(i % 4) * 70}>
              <article className="glass glass-hover group h-full p-7 text-center">
                <Icon strokeWidth={1.4} className="mx-auto h-14 w-14 transition duration-300 group-hover:scale-110 group-hover:text-soft" />
                <h3 className="mt-5 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/80">{desc}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
