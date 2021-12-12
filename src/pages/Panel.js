import React, {useState, useEffect} from 'react';
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import {getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
import {colors, Container, projectsCollectionRef} from "../components/variables";
import styled from "styled-components";
import {db} from "../firebase-config";
import {GlobalStyle} from "../components/GlobalStyles/GlobalStyles";

export const Panel = () => {
    const [projects, setProjects] = useState([])
    const [newTitle, setTitle] = useState("")
    const [newDescription, setDescription] = useState("")
    const [newDemo, setDemo] = useState("")
    const [newSource, setSource] = useState("")

    const [newTag1, setTag1] = useState("")
    const [newTag2, setTag2] = useState("")
    const [newTag3, setTag3] = useState("")

    const createProject = async () => {
        await addDoc(projectsCollectionRef, {
            title: newTitle,
            description: newDescription,
            source: newSource,
            demo: newDemo,
            tags: [newTag1, newTag2, newTag3]
        })
    }

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef)
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getProjects()
    }, [])

    const deleteProject = async (id) => {
        const projectDoc = doc(db, "projects", id)
        await deleteDoc(projectDoc)
        alert("Project successfully deleted. Please, refresh the page.")
    }

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Container>
                <PanelWrapper>
                    <br/>
                    <br/>
                    <Legend>Add a new project</Legend>
                    <br/>
                    <FieldSet>
                        <label htmlFor="title">Title</label><br/>
                        <Input name="title"
                               placeholder="Project name"
                               onChange={(event) => {
                                   setTitle(event.target.value)
                               }}/>
                        <br/>

                        <label htmlFor="description">Description</label><br/>
                        <Input name="description"
                               placeholder="Project description"
                               onChange={(event) => {
                                   setDescription(event.target.value)
                               }}/>
                        <br/>

                        <label htmlFor="demo">Demo</label><br/>
                        <Input name="demo"
                               placeholder="Project demo link"
                               onChange={(event) => {
                                   setDemo(event.target.value)
                               }}/>
                        <br/>

                        <label htmlFor="source">Source</label><br/>
                        <Input name="source"
                               placeholder="Project source link"
                               onChange={(event) => {
                                   setSource(event.target.value)
                               }}/>
                        <br/>

                        <label htmlFor="tags">Tags</label><br/>
                        <TagWrapper>
                            <Tags name="tags" type="text" placeholder="Tag 1"
                                  onChange={(event) => {
                                      setTag1(event.target.value)
                                  }}/>
                            <Tags name="tags" type="text" placeholder="Tag 2"
                                  onChange={(event) => {
                                      setTag2(event.target.value)
                                  }}/>
                            <Tags name="tags" type="text" placeholder="Tag 3"
                                  onChange={(event) => {
                                      setTag3(event.target.value)
                                  }}/>
                        </TagWrapper>
                        <br/>
                        <br/>
                        <Submit onClick={createProject}>Create project</Submit>
                        {/*This one doens't need to pass arguments, so it is simple.*/}
                    </FieldSet>
                    <br/>
                    <br/>
                    <Legend>List of projects</Legend>
                    <br/>
                    {projects.map(({id, title, description}) => {
                        return (
                            <ProjectItem key={id}>
                                <b>{title}:</b>{description}
                                <br/>
                                <br/>
                                <Delete onClick={() => {
                                    deleteProject(id)
                                }}>Delete project</Delete>
                                {/* This one has arguments, and we need to pass them in order to make it work */}
                            </ProjectItem>)
                    })}
                </PanelWrapper>
            </Container>
            <Footer/>
        </>
    );
};

const PanelWrapper = styled.div`
  max-width: 600px;;
  margin: 0 auto;
  padding-top: 1rem;

  @media (min-width: 230px) {
    padding: 1rem .5rem;
  }
`

const Legend = styled.legend`
  color: ${colors.yellow};
  text-transform: uppercase;
  padding-bottom: .3rem;
  border-bottom: 3px solid ${colors.yellow};
`

const FieldSet = styled.fieldset`
  border: 0 none;
  background: ${colors.black2};
  padding: 1rem;
  margin-bottom: .5rem;
  border-radius: .3rem;

  legend {
    padding-bottom: 1rem;
  }
`

const Input = styled.input`
  height: 2rem;
  margin: .3rem 0 .7rem 0;
  width: 100%;
  padding-left: .5rem;
`

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  margin-top: .3rem;
`

const Tags = styled.input`
  height: 2rem;
  margin-bottom: .7rem;
  width: 170px;
  padding-left: .5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Submit = styled.button`
  padding: .5rem;
  cursor: pointer;
`

const Delete = styled.button`
  padding: .2rem;
  cursor: pointer;
`

const ProjectItem = styled.p`
  background: ${colors.black2};
  padding: 1rem;
  margin-bottom: .5rem;
  border-radius: .3rem;

  b {
    color: ${colors.yellow};
    text-transform: uppercase;
    font-weight: 700;
  }
`
