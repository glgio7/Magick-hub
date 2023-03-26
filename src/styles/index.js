import styled from "styled-components";

const StyledHome = styled.section`
	width: 100%;

	padding: 0 0.5rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	img {
		width: 100%;
	}

	.loading {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		z-index: 9;

		background-color: #000;

		display: flex;
		justify-content: center;
		align-items: center;

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

	article {
		width: 100%;

		padding: 0 2rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;

		article {
			padding: 0 1rem;
		}
	}
`;

export default StyledHome;
