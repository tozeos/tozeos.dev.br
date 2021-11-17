import styled from "styled-components";
import {colors} from "../variables";

export const Logo = styled.p`
  padding: 1rem 0;
  color: ${colors.white};
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;

  span {
    color: ${colors.yellow};
    font-family: Poppins, serif;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: ${colors.white};

  :hover {
    border-bottom: 5px solid ${colors.yellow};
    margin-bottom: -5px;
  }

  @media (max-width: 768px) {
    :hover {
      border: none;
      margin-bottom: 0;
      background: ${colors.yellow};
      width: 100%;
      color: ${colors.black2};
    }
  }
`;

export const Bars = styled.div`
  color: ${colors.yellow};
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

