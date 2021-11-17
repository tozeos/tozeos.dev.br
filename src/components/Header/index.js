import {HeaderContainer} from "./Header.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Olá, sou o <span>tozeos!</span></h1>
            <a href="#quem-sou-eu" aria-label="Setinha"><FontAwesomeIcon icon={faAngleDown}/></a>
        </HeaderContainer>
    );
};