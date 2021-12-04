import styled from "styled-components";
import {collection} from "firebase/firestore";
import {db} from "../firebase-config";

export const projectsCollectionRef = collection(db, "projects")

export const colors = {
    yellow: "#FED215",
    white: "#FFFFFF",
    black1: "#121212",
    black2: "#1A1A1A",
    blue: "#3ABEF0",
    purple: "#3A2D78"
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  gap: 5rem;
  color: ${colors.white};
`;

export const socialLinks = {
    github: "https://github.com/tozeos",
    twitter: "https://twitter.com/IceIceBbi",
    twitch: "https://twitch.tv/tozeos",
    linkedin: "https://www.linkedin.com/in/caike-laurentino-4085a91b4/",
    email: "mailto:contato@tozeos.dev.br",
};

export const paragraph = {
    first: "Atualmente estudo Letras em Língua Inglesa na Universidade do Estado da Bahia (UNEB) em Teixeira de Freitas, mas a área de TI sempre me chamou a atenção. Por isso, estou aprendendo a programar por conta própria no meu tempo livre.",
    second: "Tenho conhecimento em HTML, CSS e JavaScript. Estou atualmente estudando React criando projetos pequenos aqui e ali.",
};