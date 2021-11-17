import {ContactSection, ContactTitle, Email} from "./Contact.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Link from "next/Link";

export const Contact = () => {
    return (
        <ContactSection id="contato">
            <ContactTitle>Entre em contato!</ContactTitle>
            <Email>contato@tozeos.dev.br</Email>
            <Link href="#inicio" passHref>
                <a aria-label="Voltar ao topo">
                    <FontAwesomeIcon icon={faArrowUp}/>
                    <br/>
                    Voltar ao topo
                </a>
            </Link>
        </ContactSection>
    );
};