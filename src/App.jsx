import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import About from "./sections/about";
import Tech from "./sections/Tech";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About/>
    <Experience />
    <ShowcaseSection />
    <Tech/>
    {/* <TechStack /> */}
    <Contact />
    <Footer />
  </>
);

export default App;
