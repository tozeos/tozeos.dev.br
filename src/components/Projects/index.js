import {Card, CardContainer, H2, ProjectLinks, ProjectsSection, Tags} from "./Projects.style";
import {projects} from "../variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faExternalLinkAlt, faTags} from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
    return (
        <ProjectsSection id="projetos">
            <H2>Meus projetos</H2>
            <CardContainer>
                {projects.map(({id, title, description, tags, main, demo, source}) => (
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
