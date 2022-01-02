import styled from "styled-components";
import {colors} from "../variables";
import ReactPaginate from 'react-paginate';

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  @media screen and (max-width: 425px) {
    margin: 0 1rem;
    padding: 1rem 0;
  }
`;

export const MyPaginate = styled(ReactPaginate).attrs({
    activeClassName: 'active',
})`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    cursor: pointer;
  }

  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }

  li.active a {
    background-color: ${colors.yellow} ;
    border-color: transparent;
    color: ${colors.black1};
    min-width: 32px;
  }

  li.disabled a {
    color: grey;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1rem;
  row-gap: 1.2rem;

  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 40px;
  color: ${colors.yellow};
  font-family: Poppins, serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 425px) {
    padding-top: 1rem;
    font-size: 2rem;
  }
`;

// Card Styles

export const Card = styled.div`
  width: 550px;
  background-color: ${colors.black2};
  border-radius: 8px;
  padding: 26px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 570px) {
    width: 100%;
    border-radius: 3px;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }

  h3 {
    font-family: 'Poppins', serif;
    font-size: 1.625rem;
    text-transform: uppercase;
    padding-bottom: .5rem;
  }

  p {
    margin: 1.4rem 0;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: .5rem;

  li {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    background-color ${colors.yellow};
    padding: .3rem;
    border-radius: 4px;
    color: ${colors.black1};
  }
`;

export const ProjectLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;

  @media (max-width: 425px) {
    justify-content: center;
  }

  li {
    a {
      width: 100%;
      font-size: 12px;
      color: ${colors.yellow};
      background-color: ${colors.yellow2};
      padding: .5rem;
      border-radius: 5px;
      transition: all 0.3s ease-in-out 0s;
      display: block;

      @media (max-width: 374px) {
        width: 25vw;
        display: flex;
        justify-content: center;
      }

      span {
        font-size: 12px;
        font-family: 'Poppins', serif;
        font-weight: 600;

        @media (max-width: 374px) {
          display: none;
        }

      }

      :hover {
        background-color: ${colors.yellow};
        color: ${colors.black1};
      }
    }
  }
`;