import styled from 'styled-components';

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

export const StyledInput = styled.input`
	border: none;
	border-bottom: 2px solid cornflowerblue;
	padding: 4px;
	outline: none;

	&::placeholder {
		color: cornflowerblue;
	}
`;

export const StyledButton = styled.button`
	height: 32px;
	width: 32px;
	border: 1px solid cornflowerblue;
	color: darkblue;
	border-radius: 4px;
	margin-right: 4px;
	cursor: pointer;

	&.selected {
		background-color: #d3d3d3;
	}
`;