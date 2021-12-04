import {Card, CardContainer, H2, ProjectLinks, ProjectsSection, Tags} from "./Projects.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faExternalLinkAlt, faTags} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import {getDocs} from "firebase/firestore";
import {projectsCollectionRef} from "../variables";

export const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef)
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getProjects()
    }, [])



    return (
        <ProjectsSection id="projetos">
            <H2>Meus projetos</H2>
            <CardContainer>
                {projects.map(({id, title, description, tags, demo, source}) => (
                    <Card key={id}>
                        <h3>{title}</h3>
                        <Tags>
                            <FontAwesomeIcon icon={faTags}/>
                            {tags.map((tag, i) => (
                                <li key={i}>{tag}</li>
                            ))}
                        </Tags>
                        <p>{description}</p>
                        <ProjectLinks>
                            <li style={{
                                display: `${
                                    source === "#" ? "none" : "block"
                                }`,
                            }}>
                                <a href={source} target="_blank" rel="noopener noreferrer nofollow">
                                    <FontAwesomeIcon icon={faCode}/> Código-fonte
                                </a>
                            </li>
                            <li style={{
                                display: `${
                                    demo === "#" ? "none" : "block"
                                }`,
                            }}>
                                <a href={demo} target="_blank" rel="noopener noreferrer nofollow">
                                    <FontAwesomeIcon icon={faExternalLinkAlt}/> Demonstração
                                </a>
                            </li>
                        </ProjectLinks>
                    </Card>
                ))}
            </CardContainer>
        </ProjectsSection>
    );
};
