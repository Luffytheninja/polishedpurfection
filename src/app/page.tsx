import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Pricing />
      <Booking />
    </main>
  );
}

