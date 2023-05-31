import styled from "styled-components";

const StyledHeader = styled.header`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	z-index: 90;

	background: linear-gradient(
		180deg,
		rgba(50, 0, 150, 1) 0%,
		rgba(0, 0, 0, 1) 100%
	);

	img {
		width: 100%;
	}

	.container {
		padding: 0.5rem 0;

		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container__image {
		width: 54px;
	}

	h1 {
		font-family: "Oleo Script", "Ubuntu";
		font-size: 3rem;

		z-index: 5;

		background: rgb(255, 130, 0);
		background: linear-gradient(
			180deg,
			rgba(255, 130, 0, 1) 0%,
			rgba(255, 170, 0, 1) 100%
		);
		background-clip: text;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h3 {
		font-family: "Oleo Script", cursive;
		font-weight: normal;
		text-align: center;

		color: #fff;

		width: 100%;
	}

	.menu {
		position: absolute;
		font-size: 2rem;
		color: #fff;
		cursor: pointer;
		left: 1.5rem;
		z-index: 9;
		top: calc(50% 2rem);
		transition: all 250ms;
		&:hover {
			scale: 0.95;
		}
	}

	@media screen and (max-width: 900px) {
		height: auto;
		.menu {
			display: none;
		}
		h3 {
			width: 100%;
			padding: 0.25rem 5%;
			line-height: 1.5rem;
		}

		h1 {
			font-size: 2.5rem;
		}
	}
`;

export default StyledHeader;
