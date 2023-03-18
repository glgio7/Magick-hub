import styled from "styled-components";

const Container = styled.main`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 3rem 0;

	background: rgb(255, 0, 0);
	background: radial-gradient(
		circle,
		rgba(96, 0, 255, 0.25) 0%,
		rgba(0, 0, 0, 0.25) 50%
	);

	h3 {
		max-width: 90%;

		color: #fff;
		font-weight: normal;
		text-align: center;
	}

	h2 {
		color: #fff;
		text-shadow: 0 1px 9px #8000ff;
		text-align: center;

		margin-block: 1rem;
	}

	section {
		position: relative;

		width: 100vw;

		padding: 0 2vw;
		margin-block: 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.search-bar {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		border-radius: 3px;
		border: none;
		padding: 0 1rem;

		height: 30px;
		width: 50%;

		font-family: "Quicksand", sans-serif;

		outline: none;

		color: #fff;
		font-size: 1rem;
		text-align: center;

		background-color: #303030;
	}
	input:focus {
		outline: thin solid #ffa900;
	}

	button {
		cursor: pointer;

		font-size: 1rem;

		color: #fff;
		background-color: rgba(10, 10, 10, 1);

		border-radius: 3px;
		border: none;

		margin-block: 1rem;

		height: 30px;
		width: 10%;

		transition: all 250ms;
		&:hover {
			background-color: rgba(10, 10, 10, 0.75);
		}
	}

	article {
		width: 100%;
		min-height: 75vh;

		padding: 1rem 0;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	p {
		color: #fff;

		font-family: "Quicksand", sans-serif;

		line-height: 1.5rem;
		text-align: center;

		max-width: 90%;

		margin-block: 1rem;
	}

	@media screen and (max-width: 900px) {
		margin-top: 2rem;

		h1 {
			width: 100%;
		}

		section {
			padding: 0;
		}
		.search-bar {
			flex-direction: column;
		}

		input,
		button {
			border-radius: 0;

			margin-block: 1px;

			width: 70%;
		}
	}
`;

export default Container;
