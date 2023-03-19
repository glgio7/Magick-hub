import styled from "styled-components";

const Aside = styled.aside`
	position: absolute;
	top: 0;

	pointer-events: none;

	width: 100vw;
	height: 100vh;

	img {
		width: 100%;
		/* object-fit: contain; */
	}

	.container {
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

	.container.active {
		width: 15vw;
	}

	.text-container {
		z-index: 99;
		position: fixed;
		top: 0;
		left: 15vw;

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

	.text-container.active {
		pointer-events: all;
		opacity: 1;
	}

	h2 {
		width: 90%;

		margin: 0 auto;

		text-align: center;
		color: #ffa900;
		font-weight: bold;
	}

	p {
		font-family: "Quicksand", sans-serif;
		color: #fff;

		margin: 0 auto;
		margin-block: 0.5rem;

		width: 90%;

		line-height: 1.75rem;
		text-align: center;
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

	button:hover .button__icon {
		opacity: 1;

		scale: 1.1;

		color: #ffa900;
	}

	.share-button {
		font-size: 1.5rem;

		width: auto;
		display: block;
		margin: 0 auto;

		color: #fff;

		opacity: 1;

		transition: all 250ms;

		margin-top: 2rem;

		img {
			width: 2.5rem;
			height: 2.5rem;
		}

		span {
			display: block;
			font-size: 1.25rem;
		}
	}

	.button__icon {
		font-size: 1.5rem;

		color: #fff;

		width: 100%;

		opacity: 0.75;

		transition: all 250ms;
	}

	span {
		font-family: "Oleo Script", sans-serif;
		font-weight: bold;

		color: #fff;

		margin: 0 auto;
	}
	@media screen and (max-width: 900px) {
		.container,
		.container.active {
			border-radius: 0;

			bottom: 0;
			top: initial;

			flex-direction: row;
			justify-content: space-around;

			height: 52px;
			width: 100%;
		}

		.text-container {
			top: 0;
			left: 0;

			height: 100%;
			width: 100vw;
		}

		.text-container.active {
			width: 100vw;
		}

		.close-button {
			display: none;
		}

		button {
			width: 20vw;

			opacity: 1;
			pointer-events: all;
		}

		span {
			font-size: 0.75rem;
		}
	}
`;

export default Aside;
