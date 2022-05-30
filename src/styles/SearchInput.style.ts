import styled from 'styled-components';

export const StyledInput = styled.input`
	border-bottom: 2px solid cornflowerblue;
	padding: 4px;
	outline: none;

	&::placeholder {
		color: cornflowerblue;
	}
`;

export const StyledSearhInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 280px;
	margin-bottom: 8px;
`;

export const StyledLabel = styled.label`
	padding-bottom: 4px;
	font-weight: 400;
`;