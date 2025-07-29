import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ministry from "@/components/Ministry";
import CommunityImpact from "@/components/CommunityImpact";
import Sermons from "@/components/Sermons";
import Videos from "@/components/Videos";
import Events from "@/components/Events";
import Donations from "@/components/Donations";
import EducationInitiative from "@/components/EducationInitiative";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="ministry">
          <Ministry />
        </section>
        <section id="community">
          <CommunityImpact />
        </section>
        <section id="sermons">
          <Sermons />
        </section>
        <section id="videos">
          <Videos />
        </section>
        <section id="events">
          <Events />
        </section>
        {/* <section id="donations">
          <Donations />
        </section>
        <section id="education">
          <EducationInitiative />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
