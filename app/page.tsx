import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <section id="hero">Hero</section>
      <section id="about">About</section>
      <section id="skills">Skills</section>
      <section id="works">Works</section>
      <section id="contact">Contact</section>
    </main>
  );
}
