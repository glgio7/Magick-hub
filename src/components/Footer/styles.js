import styled from "styled-components";

const StyledFooter = styled.footer`
	text-align: center;
	width: 100%;
	min-height: 128px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	background-color: #141414;

	h4 {
		color: #fff;
		font-size: 1.2rem;
		font-family: "Oleo Script", cursive;
	}

	.useful-links {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	a {
		background-color: #fff;
		color: #222;

		border-radius: 10px;

		padding: 0.25rem 1rem;

		font-size: 0.85rem;
		font-weight: bold;
	}

	@media screen and (max-width: 900px) {
		margin-bottom: 54px;
		padding: 0.5rem 0;

		h4 {
			max-width: 80%;
		}

		.useful-links {
			margin-top: 0.75rem;
		}
		.useful-links a {
			width: 80%;
			margin-block: 0.25rem;
		}
	}
`;

export default StyledFooter;
