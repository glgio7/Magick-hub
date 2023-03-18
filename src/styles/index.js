import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	min-height: calc(100vh - 108px);

	padding-top: 3rem;

	display: flex;
	flex-direction: column;

	background: rgb(255, 0, 0);
	background: linear-gradient(
		0deg,
		rgba(50, 0, 150, 1) 0%,
		rgba(0, 0, 0, 1) 75%
	);

	img {
		width: 100%;
	}

	.loading {
		position: fixed;
		top: 0;

		z-index: 9;

		background-color: #000;

		display: flex;
		justify-content: center;
		align-items: center;

		height: 100vh;
		width: 100vw;

		img {
			width: 300px;
			height: 300px;

			object-fit: cover;

			border-radius: 50%;

			animation: looping linear 2.5s infinite;
		}

		@keyframes looping {
			0% {
				transform: rotateZ(0deg);
			}

			100% {
				transform: rotateZ(360deg);
			}
		}
	}

	section {
		width: 100%;

		padding: 0 2rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.wrapper {
		z-index: 5;

		position: relative;

		width: 45vw;
		min-height: 50vh;

		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;

		margin-block: 2rem;

		border-radius: 10px;
	}

	.wrapper h2 {
		width: 100%;

		align-items: flex-start;

		text-align: center;
	}

	.wrapper h3 {
		display: flex;
		flex-direction: column;

		aspect-ratio: 9/16;

		width: calc(100% / 3);

		background-color: orange;

		border-radius: 10px;

		img {
			height: 90%;

			object-fit: cover;

			border-radius: 10px 10px 0 0;
		}

		span {
			height: 10%;

			color: #000;

			display: flex;
			align-items: center;
			justify-content: center;

			order: 1;
		}
	}

	.wrapper ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: space-between;

		width: 65%;
		height: 100%;

		background-color: rgba(0, 0, 0, 0.75);

		border-radius: 10px;
	}

	.wrapper li {
		text-align: center;

		width: 30%;

		img {
			border-radius: 12px;

			object-fit: cover;

			aspect-ratio: 1/1;
		}
	}

	.see-more {
		height: 10%;
		width: 100%;

		border-radius: 0 0 10px 10px;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: #252525;

		order: 1;

		transition: all 300ms;

		&:hover {
			background-color: #ddd;
			color: #000;
		}
	}

	.coming-soon {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 10px;

		z-index: 5;

		width: 100%;
		height: 100%;

		font-size: 4rem;

		background-color: rgba(0, 0, 0, 0.75);

		p {
			color: #fff;

			font-family: "Oleo Script", cursive;
			font-size: 5rem;
		}
	}

	@media screen and (max-width: 900px) {
		margin-top: 2rem;

		section {
			padding: 0 1rem;
		}

		.wrapper {
			width: 100vw;
			height: 100%;
		}

		.wrapper h3 {
			width: 100%;

			aspect-ratio: 16/9;

			border-radius: 10px;

			span {
				padding: 1rem;

				order: -1;
			}

			img {
				border-radius: 0;

				object-position: top;
			}
		}

		.wrapper h2 {
			padding: 1rem 0;

			border-radius: 0 0 10px 10px;
		}

		.wrapper ul {
			width: 100%;

			border-radius: 0 0 10px 10px;
		}
		.wrapper li {
			margin: 1rem 0;
		}

		.see-more {
			padding: 1rem 0;

			height: 20%;

			border-radius: 10px;
		}
	}
`;
