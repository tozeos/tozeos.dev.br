import styled from "styled-components";

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


export const projects = [
    {
        id: 0,
        title: "IPA Training",
        description: "Projeto criado com o intuito de ajudar no estudo das classificações dos fonemas da Língua Inglesa com o auxilio do International Phonetic Alphabet (IPA).",
        tags: ["html", "css", "javascript"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/ipa-app",
        demo: "https://tozeos.dev.br/ipa-app/",
    },

    {
        id: 1,
        title: "PokéCotação",
        description: "Utilizando a PokeAPI e a Open Exchange Rates API, busquei criar uma aplicação simples que muda o pokémon a cada mudança na cotação do Dólar em relação ao Real.",
        tags: ["html", "css", "javascript"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/pokecotacao",
        demo: "https://pokecotacao.netlify.app",
    },

    {
        id: 2,
        title: "União Brasileira de Regiões",
        description: "Freelance feito para uma comunidade de RPG de geopolítica. O site foi desenhado e codado por mim. Utilizei apenas HTML, CSS e JavaScript puro para realizá-lo.",
        tags: ["html", "css", "javascript"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/ubr",
        demo: "http://ubr.world",
    },

    {
        id: 3,
        title: "Sunnyside agency landing page",
        description: "Desafio do Frontend Mentor para a construção de uma landing page. Para a realização deste, utilizei apenas HTML, CSS e JavaScript. Tive que estudar um pouco sobre posicionamento e flexbox para deixar as coisas como queria.",
        tags: ["html", "css", "javascript"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/sunnyside-agency-landing-page-main",
        demo: "https://clever-wiles-d8f153.netlify.app",
    },

    {
        id: 4,
        title: "To do List",
        description: "Projeto criado para estudo do Angular. Nele eu criei um aplicativo de browser em que você pode criar uma lista de coisas para fazer. Utiliza local storage para armazenamento.",
        tags: ["angular"],
        main: ["Angular"],
        source: "https://github.com/caike72/todo-list",
        demo: "https://caike-todo.netlify.app/",
    },

    {
        id: 5,
        title: "IP Address Tracker",
        description: "Projeto em desenvolvimento para o treinamento das minhas habilidades no frontend. Estudei um pouco sobre como APIs funcionam, e como fazer um fetch de uma API. Desafio do FrontEnd Mentors.",
        tags: ["html", "css", "javascript", "api"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/ip-address-tracker-master",
        demo: "https://tozeos.dev.br/ip-address-tracker/",
    },

    {
        id: 6,
        title: "Studio Lupuz",
        description: "Este projeto foi criado com o NextJS, serviu de base para aprender a utilizar bibliotecas JavaScript como o Swiper (slides), Sass (estilos) e de icones com o Font Awesome.",
        tags: ["html", "css", "javascript", "sass", "nextjs"],
        main: ["React"],
        source: "https://github.com/tozeos/lupuz-studio",
        demo: "https://www.studiolupuz.com.br/",
    },


    {
        id: 7,
        title: "Soluções beecrowd",
        description: "Minhas soluções de desafios do beecrowd (antigo URI Online Judge) em JavaScript, PHP e posteriormente em Python. Estes eu faço quando não tenho muita coisa para fazer e fico entediado.",
        tags: ["javascript", "php", "python"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/beecrowd-challenges",
        demo: "#",
    },

        {
        id: 8,
        title: "Rest Countries API with color theme switcher",
        description: "The challenge is to integrate with the REST Countries V2 API to pull country data and display it like in the designs.",
        tags: ["javascript", "react", "styled components"],
        main: ["JavaScript"],
        source: "https://github.com/tozeos/rest-countries-api-with-color-theme-switcher-master",
        demo: "https://rest-countries-api-with-color-theme-switcher-master-eight.vercel.app/",
    },
];