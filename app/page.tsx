import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import Articles from "@/components/Articles"
import Featured from "@/components/Featured"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import Skills from "@/components/Skills"
import Spotify from "@/components/Spotify"



export default function Home() {

  return (
    <main>
      <Navigation/>
      <Hero/>
      <Featured/>
      <Articles/>
      <Projects/>
      <Skills/>
      <Footer/>
      <Spotify/>
    </main>
  )
}
