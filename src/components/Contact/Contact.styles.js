import styled from "styled-components";
import {colors} from "../variables";
import highlight from "../../img/highlight2.svg"

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  @media screen and (max-width: 350px) {
    padding: 1rem 0 3rem 0;
  }

  a {
    padding-top: 3rem;
    font-size: 1rem;
    color: ${colors.yellow};
    text-align: center;
  }
`;

export const Email = styled.p`
  font-family: Poppins, serif;
  font-weight: 600;
  text-align: center;
  font-size: clamp(1.4rem, 2.5vw, 2.8rem);
  position: relative;

  :after {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    background: url(${highlight}) no-repeat center;
    background-size: contain;
  }

  @media (max-width: 768px) {
    :after {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 375px) {
    :after {
      content: '';
      width: 100%;
      height: 20px;
      background: url("/underline2.svg") no-repeat center;
      padding-top: 2rem;
      display: block;
    }

    padding-bottom: 2rem;
  }
`;

export const ContactTitle = styled.h2`
  color: ${colors.yellow};
  font-family: Poppins, serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 425px) {
    padding-top: 1rem;
    font-size: 2rem;
    margin-bottom: 5px;
  }
`;