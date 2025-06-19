import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import AboutTheGame from "@/components/AboutTheGameSection";
import ConceptArea from "@/components/ConceptArea";
import StorylineSection from "@/components/StorylineSection";
//import Characters from "@/components/Characters";

export default function Home() {
  return (
    <div className="topPadding">
      <HomeWelcomeSection />
      <AboutTheGame />
      <StorylineSection />
      <ConceptArea />
    </div>
  );
}