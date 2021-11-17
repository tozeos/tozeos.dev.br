import Link from "next/Link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {paragraph, socialLinks} from "../variables";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {AboutSection, AboutText, Donate, Drawing, SocialIcons} from "./About.styles";
import {faGithubAlt, faLinkedinIn, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
    const pix = "9f54fff1-0097-4338-9201-60cfa41ce33e";
    return (
        <AboutSection id="quem-sou-eu">
            <Drawing>
                <Image src="/tozeos.webp" width="480px" height="574px" alt="tozeos" priority/>
            </Drawing>
            <AboutText>
                <h2>Quem sou eu?</h2>
                <p>{paragraph.first}</p>
                <p>{paragraph.second}</p>
                <SocialIcons>
                    <li>
                        <Link href={socialLinks.github} passHref>
                            <a aria-label="Github" target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faGithubAlt} fixedWidth/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={socialLinks.twitter} passHref>
                            <a aria-label="Twitter" target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faTwitter} fixedWidth/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={socialLinks.twitch} passHref>
                            <a aria-label="Twitch" target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faTwitch} fixedWidth/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={socialLinks.linkedin} passHref>
                            <a aria-label="LinkedIn" target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={socialLinks.email} passHref>
                            <a aria-label="E-mail" target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth/>
                            </a>
                        </Link>
                    </li>
                </SocialIcons>
                <Donate onClick={() => {
                    navigator.clipboard.writeText(pix);
                    alert("Chave Pix copiada com sucesso!");
                }}>
                    Hey, quer contribuir no meu aprendizado? Faça uma doação e me ajude a comprar um café! Clique para
                    copiar a Chave Pix.
                </Donate>
            </AboutText>
        </AboutSection>
    );
};