import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	background: rgb(255, 0, 0);
	background: radial-gradient(
		circle,
		rgba(96, 0, 255, 0.25) 0%,
		rgba(0, 0, 0, 0.25) 75%
	);

	padding: 3rem 0;

	h3 {
		font-family: "Oleo Script", cursive;
		font-weight: normal;
		text-align: center;

		max-width: 90%;

		color: #fff;
	}

	h2 {
		font-family: "Oleo Script", cursive;
		text-shadow: 0 1px 9px #8000ff;
		text-align: center;

		color: #fff;

		margin-block: 1rem;
	}

	.wrapper {
		position: relative;

		margin-block: 1rem;
		padding: 0 2vw;

		width: 100vw;
	}

	.wrapper:hover .arrow {
		width: 48px;

		&:hover {
			scale: 0.9;
		}
	}
	.arrow {
		cursor: pointer;

		overflow: hidden;

		z-index: 9;

		color: #fff;
		background-color: rgba(0, 0, 0, 0.1);
		box-shadow: 0px 0px 15px #000;

		position: absolute;
		bottom: 25%;

		height: 30%;
		width: 0px;

		font-size: 2rem;

		transition: all ease 300ms;
	}

	.left {
		left: 0;
	}

	.right {
		right: 0;
	}

	.wrapper ul {
		padding: 0.5rem;

		list-style: none;

		width: 100%;

		overflow-x: scroll;
		overflow-y: hidden;
		scrollbar-width: none;

		display: flex;

		transition: all ease 200ms;
	}

	.wrapper li {
		cursor: pointer;

		position: relative;

		margin-right: 0.75rem;

		display: flex;
		flex-direction: column;
		align-items: center;

		width: 10vw;
		height: max-content;

		border-radius: 6px;

		&:last-child {
			margin-right: 0;
		}
	}

	.wrapper img {
		aspect-ratio: 9/16;

		border-radius: 6px;

		object-fit: cover;

		width: 10vw;

		opacity: 1;

		transition: all ease 200ms;

		&:hover {
			border: 2px outset #6000ff;
		}
	}

	.wrapper span {
		width: 100%;

		color: #fff;

		margin-top: 0.5rem;

		font-weight: bold;
		text-shadow: 0 0 9px #8000ff;
		text-align: center;
	}

	article {
		width: 100%;
		min-height: 75vh;

		padding: 1rem 0;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	article img {
		width: 300px;

		border-radius: 50%;

		aspect-ratio: 1;

		object-fit: cover;
		object-position: top;
	}

	p {
		font-family: "Quicksand", sans-serif;
		line-height: 1.5rem;
		text-align: center;

		color: #fff;

		margin-block: 1rem;

		max-width: 90%;
	}

	@media screen and (max-width: 900px) {
		margin-top: 2rem;

		h1 {
			width: 100%;
		}

		.arrow {
			display: none;
		}

		.wrapper {
			padding: 0;
		}

		.wrapper li,
		.wrapper span {
			width: 20vw;
		}

		.wrapper li:first-child {
			margin-left: 0.5rem;
		}

		.wrapper img {
			width: 20vw;
		}
	}
`;
