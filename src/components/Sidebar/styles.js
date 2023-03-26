import styled from "styled-components";

const Aside = styled.aside`
	position: absolute;
	top: 0;

	pointer-events: none;

	width: 100vw;
	height: 100vh;

	img {
		width: 100%;
	}

	nav {
		pointer-events: all;

		width: 0vw;
		height: 100%;

		z-index: 99;
		position: fixed;
		top: 0%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		background-color: rgba(15, 15, 15, 0.99);

		transition: all 300ms;
	}

	nav.active {
		width: 15vw;
	}

	button {
		cursor: pointer;

		width: 100%;

		background-color: transparent;

		border: none;

		opacity: ${({ displayed }) => (displayed ? "1" : "0")};
		pointer-events: ${({ displayed }) => (displayed ? "all" : "none")};

		transition: all 300ms;
	}

	.button__icon {
		font-size: 1.5rem;

		color: #fff;

		width: 100%;

		opacity: 0.75;

		transition: all 250ms;
	}

	span {
		font-family: "Quicksand", sans-serif;
		font-weight: bold;

		color: #fff;

		margin: 0 auto;
	}

	button:hover .button__icon {
		opacity: 1;

		scale: 1.1;

		color: #ffa900;
	}

	// Container for displaying content

	.container {
		z-index: 99;
		position: fixed;
		top: 0;
		left: 15vw;

		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: #000;

		overflow-y: auto;
		overflow-x: hidden;

		padding: 2rem 1rem;
		padding-bottom: 52px;

		height: 100%;
		width: 85vw;

		pointer-events: none;
		opacity: 0;

		transition: all 500ms;
	}

	.container h2 {
		width: 90%;
		font-family: "Oleo Script", cursive;

		margin: 0 auto;

		text-align: center;
		color: #ffa900;
		font-weight: bold;
	}

	.container p {
		font-family: "Quicksand", sans-serif;
		color: #fff;

		margin: 0 auto;
		margin-block: 0.5rem;

		width: 90%;

		line-height: 1.75rem;
		text-align: center;
	}

	.container.active {
		pointer-events: all;
		opacity: 1;
	}

	.container button {
		font-size: 1.5rem;

		width: 50%;

		display: inline-flex;
		align-items: center;

		background-color: rgba(30, 30, 30, 0.99);
		color: #fff;

		opacity: 1;

		transition: all 250ms;

		border-radius: 10px;

		padding: 0.5rem;
		margin-top: 2rem;

		&:hover {
			background-color: #ffa900;
			span {
				color: #000;
			}
		}
	}

	.container img {
		width: 2.5rem;
		height: 2.5rem;
	}

	.container span {
		font-size: 1rem;
	}

	@media screen and (max-width: 900px) {
		.close-button {
			display: none;
		}
		nav,
		nav.active {
			border-radius: 0;

			bottom: 0;
			top: initial;

			flex-direction: row;
			justify-content: space-around;

			height: 54px;
			width: 100%;
		}

		button {
			width: 20vw;

			opacity: 1;
			pointer-events: all;
		}

		.button__icon {
			line-height: 1rem;
		}

		span {
			font-size: 0.7rem;
		}

		.container {
			top: 0;
			left: 0;

			z-index: 9;

			width: 100vw;
		}

		.container.active {
			width: 100vw;
		}

		.container button {
			width: 80%;
		}
	}
`;

export default Aside;
