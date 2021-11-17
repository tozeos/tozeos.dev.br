import {HeaderContainer} from "./Header.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Link from "next/Link";


export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Olá, sou o <span>tozeos!</span></h1>
            <Link href="#quem-sou-eu" passHref>
                <a aria-label="Setinha"><FontAwesomeIcon icon={faAngleDown}/></a>
            </Link>
        </HeaderContainer>
    );
};