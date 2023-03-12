import styled from "styled-components";

const ListContainer = styled.div`
	z-index: 5;
	position: relative;

	width: 45vw;
	min-height: 50vh;

	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;

	margin-block: 2rem;
	border-radius: 10px;

	pointer-events: ${({ emptyList }) => (emptyList ? "none" : "all")};

	h2 {
		width: 100%;

		text-align: center;
	}

	h3 {
		margin-top: 0.25rem;

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

	ul {
		display: flex;
		justify-content: space-around;
		align-content: space-between;
		flex-wrap: wrap;

		width: 65%;
		height: 100%;

		background-color: rgba(0, 0, 0, 0.75);
		border-radius: 10px;
	}

	li {
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

		z-index: 5;

		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;

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
		width: 100vw;
		height: 100%;

		h3 {
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

		h2 {
			padding: 1rem 0;

			border-radius: 0 0 10px 10px;
		}

		ul {
			width: 100%;

			border-radius: 0 0 10px 10px;
		}
		li {
			margin: 1rem 0;
		}

		.see-more {
			padding: 1rem 0;

			height: 20%;

			border-radius: 10px;
		}
	}
`;

export default ListContainer;
