import { img, profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-24">
      <h1 className="sr-only">Portfolio — {profile.name}, Graphic Designer and Video Editor</h1>
      {/* mobile */}
      <div aria-hidden className="font-display text-[26vw] leading-[.85] tracking-wide md:hidden">PORTFOLIO</div>
      {/* desktop: lettering split around the character, like the cover slide */}
      <div aria-hidden className="hidden w-full max-w-7xl items-end justify-center md:flex">
        <div className="flex-1 pb-24 text-right">
          <div className="font-display text-[12vw] leading-[.85] tracking-wider lg:text-[10.5rem]">PORT</div>
          <p className="mt-3 pr-6 text-xl font-light">Graphic Designer</p>
        </div>
        <img src={img('hero.png')} alt="" className="-mx-6 z-10 h-[62vh] max-h-[640px] w-auto animate-float drop-shadow-[0_25px_30px_rgba(20,0,12,.5)]" />
        <div className="flex-1 pb-24">
          <div className="font-display text-[12vw] leading-[.85] tracking-wider lg:text-[10.5rem]">FOLIO</div>
          <p className="mt-3 pl-6 text-xl font-light">Video Editor</p>
        </div>
      </div>
      <img src={img('hero.png')} alt="Illustrated portrait of Aiman Ali" className="-mt-4 h-[52vh] w-auto md:hidden" />
      <div className="relative z-20 -mt-2 text-center md:-mt-10">
        <p className="font-display text-4xl tracking-widest sm:text-5xl">{profile.name}</p>
        <p className="mt-2 text-sm text-white/80 md:hidden">Graphic Designer &amp; Video Editor</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="#work" className="btn btn-solid">Explore My Work</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
