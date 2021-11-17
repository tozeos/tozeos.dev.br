import {FooterSection} from "./Footer.styles";
import Link from "next/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {colors} from "../variables";

export const Footer = () => {
    return (
        <FooterSection>
            <p>Designed and coded by me with <FontAwesomeIcon icon={faHeart} color={colors.yellow}/>.</p>
            <p>Drawing by
                <Link href="https://twitter.com/Furr_Ed" passHref>
                    <a target="_blank" rel="noopener noreferrer nofollow"> @Furr_Ed</a>
                </Link>.
            </p>
        </FooterSection>
    );
};