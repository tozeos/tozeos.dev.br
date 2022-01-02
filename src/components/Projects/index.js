import {MyPaginate, Card, CardContainer, H2, ProjectLinks, ProjectsSection, Tags} from "./Projects.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faExternalLinkAlt, faTags} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import {getDocs} from "firebase/firestore";
import {projectsCollectionRef} from "../variables";

export const ProjectsList = () => {
    const [projects, setProjects] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const projectsPerPage = 4
    const pagesVisited = pageNumber * projectsPerPage

    const displayProjects = projects.slice(pagesVisited, pagesVisited + projectsPerPage).map(({id, title, description, tags, demo, source}) => {
        return (
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
                            <FontAwesomeIcon icon={faCode}/> <span>Código-fonte</span>
                        </a>
                    </li>
                    <li style={{
                        display: `${
                            demo === "#" ? "none" : "block"
                        }`,
                    }}>
                        <a href={demo} target="_blank" rel="noopener noreferrer nofollow">
                            <FontAwesomeIcon icon={faExternalLinkAlt}/> <span>Demonstração</span>
                        </a>
                    </li>
                </ProjectLinks>
            </Card>
        )
    })

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef)
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getProjects()
    }, [])

    const pageCount = Math.ceil(projects.length / projectsPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <ProjectsSection id="projetos">
            <H2>Meus projetos</H2>
            <CardContainer>
                {displayProjects}
            </CardContainer>
            <MyPaginate
                previousLabel={"Anterior"}
                nextLabel={"Próximo"}
                pageCount={pageCount}
                onPageChange={changePage}
            />
        </ProjectsSection>
    );
};
