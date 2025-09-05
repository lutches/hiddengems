import { Hero } from "./components/Hero";
import { FeaturedBusinesses } from "./components/FeaturedBusinesses";
import { WhyThisGuide } from "./components/WhyThisGuide";
import { BusinessCTA } from "./components/BusinessCTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedBusinesses />
      <WhyThisGuide />
      <BusinessCTA />
    </div>
  );
}