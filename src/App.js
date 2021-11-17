import "./App.css";
import {Navbar} from "./components/Navbar";
import {Header} from "./components/Header";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Container} from "./components/variables";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Navbar/>
            <Container>
                <Header/>
                <About/>
                <Projects/>
                <Contact/>
            </Container>
            <Footer/></>
    );
}

export default App;
