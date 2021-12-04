import React from 'react'
import styled from "styled-components";
import {colors} from "../components/variables";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import sapinho from "../img/Froggit.gif"

export const NotFound = () => {
    return (
        <Background>
            <Navbar/>
            <section>
                <FourOFour>404</FourOFour>
                <p>Página não encontrada. Volte ao <a href="/">início</a>.</p>
                <br/>
                <img src={sapinho} alt="Sapinho"/>
            </section>
            <Footer/>
        </Background>
    )
}

const FourOFour = styled.h1`
  color: ${colors.yellow};
  font-size: 4rem;
`

const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    text-align: center;

    p {
      color: ${colors.white};
    }
    
    a {
      color: ${colors.yellow};
    }
  }
`