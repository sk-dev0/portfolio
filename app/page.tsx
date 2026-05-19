import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History"
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <History />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}
