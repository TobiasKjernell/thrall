import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import Characters from "@/components/Characters";
import AboutTheGame from "@/components/AboutTheGameSection";

export default function Home() {
  return (
    <div>
      <HomeWelcomeSection />
      <AboutTheGame />
      <Characters/>
    </div>
  )
}