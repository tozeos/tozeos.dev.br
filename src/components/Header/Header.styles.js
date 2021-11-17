import styled from "styled-components";
import {colors} from "../variables";
import underline from "../../img/underline.svg"

export const HeaderContainer = styled.div`
  color: ${colors.white};
  min-height: 400px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-family: Poppins, serif;
    font-size: 4rem;

    span {
      position: relative;
      font-family: Poppins, serif;
      z-index: 2;

      :after {
        position: absolute;
        content: '';
        background: url(${underline});
        width: 283px;
        height: 18px;
        left: -5%;
        top: 90%;

        @media (max-width: 670px) {
          width: 230px;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }
}

@media (max-width: 670px) {
  h1, span {
    font-size: clamp(3.5rem, 2.5vw, 4rem);
    text-align: center;
  }
}

.fa-angle-down {
  font-size: 24px;
  position: absolute;
  color: ${colors.yellow};
  cursor: pointer;
  bottom: 6rem;
}
`;