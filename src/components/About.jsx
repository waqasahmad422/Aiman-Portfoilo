import { img } from '../data'
import { Reveal, SectionTitle } from './Shared'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xl font-light text-white/90">My Name Is</p>
          <h3 className="font-display text-6xl leading-none tracking-wide sm:text-7xl">AIMAN ALI.</h3>
          <div className="mt-8 max-w-xl space-y-5 text-[17px] font-light leading-relaxed text-white/90">
            <p>A motivated and results-driven <b className="font-semibold">Political Science</b> graduate with an outstanding <b className="font-semibold">CGPA of 3.88/4.0</b> and a certified <b className="font-semibold">Graphic Designer</b> from <b className="font-semibold">Arfa Karim Technology Incubator, Peshawar</b>.</p>
            <p>I combine analytical thinking and research skills gained through political studies with creative design expertise to deliver impactful visual solutions.</p>
            <p>Known for strong communication, collaborative spirit, and the ability to adapt effectively in fast-paced environments.</p>
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionTitle file="h-about.png" text="About Me" className="lg:flex lg:flex-col lg:items-end" />
          <Reveal delay={150} className="flex justify-center lg:justify-end">
            <img src={img('camera.png')} alt="Pink digital camera framing a character illustration of Aiman" className="w-full max-w-md animate-float drop-shadow-[0_30px_40px_rgba(20,0,12,.55)]" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
