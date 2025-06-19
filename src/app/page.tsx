import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import AboutTheGame from "@/components/AboutTheGameSection";
import Characters from "@/components/Characters";
import StorylineSection from "@/components/StorylineSection";
import ConceptArea from "@/components/ConceptArea";

export default function Home() {
  return (
    <div>
      <HomeWelcomeSection />
      <AboutTheGame />
      <Characters />
      <StorylineSection />
      <ConceptArea />
    </div>
  );
}