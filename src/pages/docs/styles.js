import styled from "styled-components";

export const StyledSection = styled.section`
	display: flex;
	min-height: calc(100vh - 152px);
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */

	h2 {
		font-family: "Oleo Script", cursive;
	}
	h4:first-child {
		margin-top: 2rem;
	}

	h2,
	h4,
	p {
		margin-top: 1rem;
	}
	.code {
		background-color: #444;

		line-height: 1.5rem;

		word-break: break-word;

		border-radius: 10px;

		padding: 1rem;
	}

	article {
		width: 80%;
	}
`;
