import styled from "styled-components";
import { colors } from "../variables";
import blob from "../../img/blob.svg";

export const AboutSection = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	padding: 4rem 0;

	@media screen and (max-width: 1250px) {
		flex-wrap: wrap;
	}

	@media screen and (max-width: 425px) {
		margin: 0 1rem;
	}
`;

export const Drawing = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${blob}) no-repeat 25px;
	background-size: contain;
	max-width: 500px;
	min-width: 250px;

	img {
		width: 400px;
	}

	@media screen and (max-width: 1250px) {
		width: min(75%, 370px);
		margin: 0 auto;
	}
`;

export const AboutText = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	width: 500px;

	@media (max-width: 768px) {
		padding: 0 2rem;
	}

	@media (max-width: 426px) {
		padding: 0 1rem;
	}

	h2 {
		color: ${colors.yellow};
		font-family: Poppins, serif;
		font-size: 2.5rem;
		font-weight: 700;

		@media screen and (max-width: 425px) {
			padding-top: 1rem;
			font-size: 2rem;
		}
	}

	p {
		font-size: 1.125rem;

		@media screen and (max-width: 425px) {
			font-size: 1rem;
		}
	}
`;

export const SocialIcons = styled.ul`
	color: ${colors.black1};
	list-style: none;
	font-size: 30px;
	padding-top: 1rem;
	gap: 0.1rem;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;

	@media screen and (max-width: 1250px) {
		font-size: 26px;
	}

	@media screen and (max-width: 425px) {
		padding-top: 1rem;
	}

	a {
		background-color: ${colors.yellow2};
		padding: 18px;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s ease-in-out 0s;
		color: ${colors.yellow};
		display: block;

		:hover {
			background-color: ${colors.yellow};
			color: ${colors.black1};
		}

		@media screen and (max-width: 1250px) {
			padding: 13px;
		}

		@media (max-width: 400px) {
			padding: 0.5rem;
		}
	}
`;

export const Donate = styled.p`
	display: flex;
	background-color: ${colors.black2};
	color: ${colors.white};
	padding: 1rem;
	border-radius: 8px;
	align-items: center;
	margin-top: 1rem;
	cursor: pointer;
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 13px !important;
	transition: all 0.3s ease-in-out 0s;

	:hover {
		background: ${colors.yellow};
		color: ${colors.black2};
	}
`;

export const Song = styled.a`
	background-color: ${colors.black2};
	color: ${colors.white};
	padding: 0.6rem 1.5rem;
	border-radius: 5px;
	display: flex;
	gap: 1rem;
	align-items: center;

	p {
		font-size: 0.8rem !important;
	}
`;
