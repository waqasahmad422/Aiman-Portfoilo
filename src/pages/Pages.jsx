import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Services from '../components/Services'
import LangHobbies from '../components/LangHobbies'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import PageHeader from '../components/PageHeader'
import { Stats, Featured, CTA } from '../components/HomeBlocks'

export const Home = () => (<><Hero /><Stats /><About /><Featured /><CTA /></>)
export const AboutPage = () => (<><PageHeader title="ABOUT ME" sub="Political Science graduate and certified graphic designer from Peshawar." /><About /><Education /><LangHobbies /><CTA /></>)
export const ServicesPage = () => (<><PageHeader title="WHAT I DO" crumb="Services" sub="The tools I work with and the design services I offer." /><Skills /><Services /><CTA /></>)
export const PortfolioPage = () => (<><PageHeader title="MY WORK" crumb="Portfolio" sub="Social media posts, carousels, logos, print, web layouts and more." /><Gallery /><CTA /></>)
export const ContactPage = () => (<Contact />)
