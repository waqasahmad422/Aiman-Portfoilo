// ---- Edit your contact details & links here ----
export const profile = {
  name: 'Aiman Ali',
  email: 'sayyedyair623@gmail.com',
  phone: '03138685282',
  whatsapp: 'https://wa.me/923138685282',
  location: 'Peshawar, KPK, Pakistan',
  // TODO: replace '#' with real profile URLs
  socials: { linkedin: '#', instagram: '#', facebook: '#', behance: '#' },
}

export const nav = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['education', 'Education'],
  ['services', 'Services'], ['more', 'Languages'], ['work', 'Work'], ['contact', 'Contact'],
]

export const education = [
  { year: '2020', title: 'Matriculation — SSC', place: 'GGHS Ocha Wala Shabqadar', note: 'Marks: 889 / 1100 (80.8%)' },
  { year: '2022', title: 'Intermediate — FA', place: 'BISE Peshawar', note: 'Marks: 869 / 1100 (79%)' },
  { year: '2025', title: 'Associate Degree in Political Science', place: 'Bacha Khan University, Charsadda, Pakistan', note: 'CGPA: 3.88 / 4.0 — Distinction' },
]

export const services = [
  ['Logo & Branding Design', 'Memorable marks and identity systems that make a business recognisable.', 'Shapes'],
  ['Print Design', 'Flyers, brochures and stationery that look sharp on paper.', 'Printer'],
  ['Graphic Design', 'Clean, purposeful visuals for campaigns, ads and promotions.', 'PenTool'],
  ['Social Media Design', 'Posts and carousels that stop the scroll and carry the message.', 'Smartphone'],
  ['Packaging Design', 'Product packaging and label concepts with shelf presence.', 'Package'],
  ['Web Layout Design', 'Website layouts planned around clarity, hierarchy and flow.', 'Monitor'],
  ['Typography', 'Type-led layouts with strong rhythm and readable hierarchy.', 'Type'],
  ['Video Editing', 'Cuts, pacing and motion that turn raw footage into a story.', 'Clapperboard'],
]

export const languages = [['English', 'Proficient'], ['Urdu', 'Fluent'], ['Pashto', 'Native']]
export const hobbies = ['Reading Books', 'Graphic Designing', 'Learning New Skills']

const img = (f) => `${import.meta.env.BASE_URL}images/${f}`
export const categories = ['All', 'Social Media', 'Logo & Branding', 'Print', 'Web Layout', 'Other Designs']
// Add new work: drop an image in public/images and add a row here.
export const projects = [
  ['post-bcl-hiring', 'We Are Hiring — Graphic Designer', 'Social Media'],
  ['post-digital-marketing', 'Digital Marketing Admissions', 'Social Media'],
  ['post-hiring-wide', 'Join the TechNova X Team', 'Social Media'],
  ['post-explore', 'Explore. Innovate. Excel.', 'Social Media'],
  ['post-future-tech', 'Shaping the Future of Technology', 'Social Media'],
  ['post-technova-partner', 'Innovate. Upgrade. Lead.', 'Social Media'],
  ['post-restaurant', 'Run Your Restaurant Smarter', 'Social Media'],
  ['post-neon-cafe', 'Neon Nexus Cafe Promotion', 'Social Media'],
  ['post-travel', 'Time to Travel Poster', 'Social Media'],
  ['carousel-roadmap', 'Pick a Number & Grow Your Business — Carousel', 'Social Media'],
  ['carousel-restaurant', 'Restaurant Sales Mistakes — Carousel', 'Social Media'],
  ['logo-wall', 'TechNova X Logo — Office Wall', 'Logo & Branding'],
  ['logo-building', 'TechNova X Logo — Building Sign', 'Logo & Branding'],
  ['logo-shah', 'Shah Wraps & Burgers Logo', 'Logo & Branding'],
  ['print-brochure', 'TechNova X Tri-fold Brochure', 'Print'],
  ['print-flyer', 'Complete IT Solutions Flyer', 'Print'],
  ['print-stationery', 'TechNova X Stationery Set', 'Print'],
  ['web-monitor', 'TechNova X Website Hero', 'Web Layout'],
  ['web-technova', 'TechNova X Landing Page', 'Web Layout'],
  ['web-neon', 'Neon Nexus Cafe Website', 'Web Layout'],
  ['other-drinks', 'Fresh Drinks — Strawberry Milkshake', 'Other Designs'],
  ['other-rouge', 'Rouge Velvet Beauty Ad', 'Other Designs'],
  ['other-look', 'Magic World — Look Event Poster', 'Other Designs'],
  ['other-fashion', 'Fashion Expert', 'Other Designs'],
  ['other-memories', 'Memories Never Die', 'Other Designs'],
].map(([f, title, category]) => ({ src: img(f + '.jpg'), title, category }))

export { img }
