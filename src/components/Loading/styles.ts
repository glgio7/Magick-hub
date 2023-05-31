import styled from "styled-components";

const StyledLoading = styled.div`
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

		object-fit: contain;

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
`;

export default StyledLoading;
