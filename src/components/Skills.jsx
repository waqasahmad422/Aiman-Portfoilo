import { Reveal, SectionTitle, SkillIcon } from './Shared'
const skills = [['ai', 'Adobe Illustrator'], ['ps', 'Adobe Photoshop'], ['pr', 'Adobe Premiere Pro'], ['canva', 'Canva'], ['corel', 'CorelDRAW'], ['office', 'MS Office']]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle file="h-skills.png" text="My Skills" className="flex flex-col items-center" />
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:gap-7 md:grid-cols-3">
        {skills.map(([id, name], i) => (
          <Reveal key={id} delay={i * 70}>
            <div className="glass glass-hover group flex flex-col items-center gap-5 px-4 py-9">
              <div className="transition duration-300 group-hover:scale-110"><SkillIcon id={id} /></div>
              <p className="text-center text-lg font-light">{name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
