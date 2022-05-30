import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 32px;
	color: darkblue;
	margin-right: 4px;

	&.selected {
		background-color: #d3d3d3;
	}

	&:focus {
		background-color: #b3b4c2;
	}
`;