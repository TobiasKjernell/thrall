import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import AboutTheGame from "@/components/AboutTheGameSection";
import Characters from "@/components/Characters";

export default function Home() {
  return (
    <div className="topPadding">
      <HomeWelcomeSection />
      <AboutTheGame />
      <Characters/>
    </div>
  );
}