import styled from "styled-components";

const AppContainer = styled.main`
	width: 100%;
	height: 100%;

	padding: 3rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;

	background: rgb(255, 0, 0);
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(50, 0, 150, 1) 75%
	);
`;

export default AppContainer;
