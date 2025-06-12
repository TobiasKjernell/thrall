import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import Characters from "@/components/Characters";
import AboutTheGame from "@/components/AboutTheGameSection";
import StorylineSection from "@/components/StorylineSection";

export default function Home() {
  return (
    <div>
      <HomeWelcomeSection />
      <AboutTheGame />
      <Characters/>
      <StorylineSection/>
    </div>
  )
}

