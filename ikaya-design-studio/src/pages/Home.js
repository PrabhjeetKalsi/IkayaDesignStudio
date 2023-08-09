import Navbar from "../components/Navbar";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import FormModal from "../components/FormModal";

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Contact />
      <FormModal />
    </div>
  );
}

export default Home;
