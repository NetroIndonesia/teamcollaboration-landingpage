import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Stats />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
}