import styles from "./App.module.css";
import { About } from "./components/AboutMe/AboutMe";
import { Mwiza } from "./components/Mwiza/Mwiza";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/NavigationBar";
import { Projects } from "./components/PersonalProjects/PersonalProjects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Mwiza />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;