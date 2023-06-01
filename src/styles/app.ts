import styled from "styled-components";

const AppContainer = styled.main`
	width: 100%;
	height: 100%;

	padding: 3rem 0;
	padding-top: 0.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-image: url("/data/background.jpg");
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;

	z-index: 5;

	position: relative;

	.background {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;

		z-index: -1;

		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export default AppContainer;
