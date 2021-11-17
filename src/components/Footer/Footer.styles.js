import styled from "styled-components";
import {colors} from "../variables";

export const FooterSection = styled.footer`
  // Mudar isso aqui pq n faz sentido
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: ${colors.black2};

  p {
    color: ${colors.white};
    font-weight: 300;

    a {
      color: ${colors.yellow};
      font-weight: 600;
    }
  }
`;

