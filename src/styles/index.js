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
			justify-content: center;
		}
	}
`;

export default StyledHome;
