import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import SubscribeSection from "../components/SubscribeSection";

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <SubscribeSection />
    </>
  );
}
