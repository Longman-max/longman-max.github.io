import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const sections = [
  { id: 'experience', Component: Experience },
  { id: 'projects', Component: Projects },
  { id: 'writing', Component: Writing },
  { id: 'contact', Component: Contact },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="page-shell">
        <Hero />
        {sections.map(({ id, Component }, index) => (
          <Component key={id} count={String(index + 1).padStart(2, '0')} />
        ))}
        <Footer />
      </main>
    </>
  );
}
