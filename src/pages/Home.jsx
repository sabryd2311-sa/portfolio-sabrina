import Hero from '../components/sections/Hero'
import ChiSono from '../components/sections/ChiSono'
import AutomazioniTeaser from '../components/sections/AutomazioniTeaser'
import ProgettiTeaser from '../components/sections/ProgettiTeaser'
import Certificazioni from '../components/sections/Certificazioni'
import Contatti from '../components/sections/Contatti'

export default function Home() {
  return (
    <>
      <Hero />
      <ChiSono />
      <AutomazioniTeaser />
      <ProgettiTeaser />
      <Certificazioni />
      <Contatti />
    </>
  )
}
