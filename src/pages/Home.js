import {Navbar} from "../components/Navbar";
import {Header} from "../components/Header";
import {About} from "../components/About";
import {ProjectsList} from "../components/Projects";
import {Contact} from "../components/Contact";
import {Footer} from "../components/Footer";
import {Container} from "../components/variables";
import {GlobalStyle} from "../components/GlobalStyles/GlobalStyles";


export const Home = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Container>
                <Header/>
                <About/>
                <ProjectsList/>
                <Contact/>
            </Container>
            <Footer/>
        </>
    );
}