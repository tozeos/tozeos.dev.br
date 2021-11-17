import styled from "styled-components";
import {colors} from "../variables";


export const Donate = styled.p`
  display: flex;
  background-color: ${colors.black2};
  color: ${colors.white};
  padding: 1.2rem 1.5rem;
  border-radius: 8px;
  align-items: center;
  margin-top: 3rem;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 14px !important;
  transition: all 0.3s ease-in-out 0s;

  :hover {
    background: ${colors.yellow};
    color: ${colors.black2};
  }
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5rem 0;

  @media screen and (max-width: 1250px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 425px) {
    margin: 0 1rem;
  }
`;

export const Drawing = styled.div`
  background: url("/blob.svg") no-repeat center;
  background-size: contain;
  width: min(75%, 600px);

  img {
    width: inherit;
  }

  @media screen and (max-width: 1250px) {
    width: min(75%, 370px);
    margin: 0 auto;
  }

`;

export const AboutText = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 426px) {
    padding: 0 1rem;
  }

  h2 {
    color: ${colors.yellow};
    font-family: Poppins, serif;
    font-size: 3rem;
    font-weight: 700;

    @media screen and (max-width: 425px) {
      padding-top: 1rem;
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.125rem;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;

export const SocialIcons = styled.ul`
  color: ${colors.black1};
  list-style: none;
  font-size: 30px;
  padding-top: 3rem;
  gap: .2rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1250px) {
    font-size: 26px;
  }

  @media screen and (max-width: 425px) {
    padding-top: 1rem;
  }

  a {
    background-color: ${colors.yellow};
    padding: 18px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
    color: ${colors.black2};
    display: block;

    :hover {
      background-color: ${colors.purple};
      color: ${colors.white};
    }

    @media screen and (max-width: 1250px) {
      padding: 13px;
    }

    @media (max-width: 400px) {
      padding: .5rem;
    }
  }
`;