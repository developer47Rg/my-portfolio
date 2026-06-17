import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home (){
    return(
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </>
    );
}

export default Home;