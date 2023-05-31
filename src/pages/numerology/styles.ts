import styled from "styled-components";

const Container = styled.main`
	width: 100%;
	min-height: calc(100vh - 108px);
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 3rem 0;

	section {
		position: relative;

		width: 100vw;

		padding: 1rem 2vw;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		color: #fff;

		text-shadow: 0 1px 9px #8000ff;
		text-align: center;
	}

	.intro-container {
		margin: 0 auto;

		width: 90%;

		text-align: center;
	}

	.intro-container__letters {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.intro-container p {
		margin-block: 1rem;
	}

	p {
		max-width: 90%;
		color: #fff;

		font-family: "Quicksand", sans-serif;

		line-height: 1.5rem;
		text-align: center;

		margin: 0 auto;
	}

	span {
		position: relative;
	}

	span:after {
		content: ",";
		position: absolute;
		bottom: 0;
		right: -0.25rem;
	}

	span:first-letter {
		margin-left: 1rem;
		color: #ffa900;
	}

	span:last-child {
		&::after {
			content: ".";
			position: absolute;
			bottom: 0;
			right: -0.25rem;
		}
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

	h3 {
		max-width: 90%;

		margin-block: 2rem;

		color: #fff;

		font-weight: normal;
		text-align: center;
	}

	article {
		width: 100%;

		padding: 1rem 0;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (max-width: 900px) {
		margin-top: 2rem;

		h2,
		p {
			margin-top: 1rem;
		}

		section {
			padding: 0;
		}

		.intro-container__letters {
			justify-content: flex-start;
		}

		.intro-container__letters span {
			margin: 0.25rem 0;
			width: 30%;
			text-align: justify;

			&::after {
				display: none;
			}
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
