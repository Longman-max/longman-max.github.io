import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Writing from '@/components/Writing';
import StatusTerminal from '@/components/StatusTerminal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="page-shell">
        <Hero />
        <Experience />
        <Projects />
        <Writing />
        <StatusTerminal />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
