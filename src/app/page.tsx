import Characters from "@/components/Characters";
import AboutTheGame from "@/components/AboutTheGameSection";
import StorylineSection from "@/components/StorylineSection";

export default function Home() {
  return (
    <div>
      <AboutTheGame />
      <Characters />
      <StorylineSection />
    </div>
  );
}