import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {colors, paragraph, socialLinks} from "../variables";
import {faEnvelope, faCompactDisc} from "@fortawesome/free-solid-svg-icons";
import {AboutSection, AboutText, Donate, Drawing, SocialIcons, Song} from "./About.styles";
import {faGithubAlt, faLinkedinIn, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";
import tozeos from "../../img/tozeos.webp"

import {useLastFM} from 'use-last-fm';

const CurrentlyPlaying = () => {
    const lastFM = useLastFM('tozeos', process.env.REACT_APP_LASTFM_API_KEY);

    if (lastFM.status !== 'playing') {
        return <Song href="https://www.last.fm/user/tozeos">Não estou escutando nada.</Song>;
    }

    return (
        <Song href={lastFM.song.url}>
            <FontAwesomeIcon icon={faCompactDisc} color={lastFM.song.artist === 'Queen' ? colors.yellow : colors.white}
                             fixedWidth pulse/>
            <p>
                Ouvindo <b>{lastFM.song.name}</b> de <b>{lastFM.song.artist}</b>.
            </p>
        </Song>
    );
};

export const About = () => {
    const pix = "9f54fff1-0097-4338-9201-60cfa41ce33e";
    return (
        <AboutSection id="quem-sou-eu">
            <Drawing>
                <img src={tozeos} alt="tozeos"/>
            </Drawing>
            <AboutText>
                <h2>Quem sou eu?</h2>
                <p>{paragraph.first}</p>
                <p>{paragraph.second}</p>
                <SocialIcons>
                    <li>
                        <a href={socialLinks.github} aria-label="Github" target="_blank"
                           rel="noopener noreferrer nofollow">
                            <FontAwesomeIcon icon={faGithubAlt} fixedWidth/>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks.twitter} aria-label="Twitter" target="_blank"
                           rel="noopener noreferrer nofollow">
                            <FontAwesomeIcon icon={faTwitter} fixedWidth/>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks.twitch} aria-label="Twitch" target="_blank"
                           rel="noopener noreferrer nofollow">
                            <FontAwesomeIcon icon={faTwitch} fixedWidth/>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank"
                           rel="noopener noreferrer nofollow">
                            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks.email} aria-label="E-mail" target="_blank"
                           rel="noopener noreferrer nofollow">
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth/>
                        </a>
                    </li>
                </SocialIcons>
                <Donate onClick={() => {
                    navigator.clipboard.writeText(pix);
                    alert("Chave Pix copiada com sucesso!");
                }}>
                    Hey, quer contribuir no meu aprendizado? Faça uma doação e me ajude a comprar um café! Clique para
                    copiar a Chave Pix.
                </Donate>
                <CurrentlyPlaying/>
            </AboutText>
        </AboutSection>
    );
};