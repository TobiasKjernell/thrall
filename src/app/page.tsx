import HomeWelcomeSection from "@/components/HomeWelcomeSection";
import AboutTheGame from "@/components/AboutTheGameSection";
import Characters from "@/components/Characters";

export default function Home() {
  return (
    <div>
      <HomeWelcomeSection />
      <AboutTheGame />
      <Characters/>
    </div>
  );
}