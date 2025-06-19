import StorylineSection from "@/components/StorylineSection";
import ConceptArea from "@/components/ConceptArea";
import AboutTheGame from "@/components/AboutTheGameSection";
import HomeWelcomeSection from "@/components/HomeWelcomeSection";

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