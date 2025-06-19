import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import AboutTheGame from "@/components/AboutTheGameSection";
import ConceptArea from "@/components/ConceptArea";
//import Characters from "@/components/Characters";

export default function Home() {
  return (
    <div className="topPadding">
      <HomeWelcomeSection />
      <AboutTheGame />
      <ConceptArea />
    </div>
  );
}