import {Navbar} from "../components/Navbar";
import {Header} from "../components/Header";
import {About} from "../components/About";
import {Projects} from "../components/Projects";
import {Contact} from "../components/Contact";
import {Container} from "../components/variables";
import {Footer} from "../components/Footer";

export const Home = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <Header/>
                <About/>
                <Projects/>
                <Contact/>
            </Container>
            <Footer/>
        </>
    );
}