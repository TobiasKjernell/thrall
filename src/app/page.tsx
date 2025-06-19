import Characters from "@/components/Characters";
import StorylineSection from "@/components/StorylineSection";
import ConceptArea from "@/components/ConceptArea";
import AboutTheGame from "@/components/AboutTheGameSection";

export default function Home() {
  return (
    <div>
      <AboutTheGame />
      <Characters />
      <StorylineSection />
      <ConceptArea />
    </div>
  );
}