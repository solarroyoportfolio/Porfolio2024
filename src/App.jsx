import { About } from "./landing/components/About";
import { Contact } from "./landing/components/Contact";
import { Experience } from "./landing/components/Experience";
import { Footer } from "./landing/components/Footer";
import { Header } from "./landing/components/Header";
import { Nav } from "./landing/components/Nav";
import { Projects } from "./landing/components/Projects";

export default function App() {
  return (
    
    <div className="overflow-hidden">
       <Header />
       <Nav />
       <About />
       <Experience />
       <Projects />
       <Contact />
       <Footer />
    </div>

   
  )
}