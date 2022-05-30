import styled, {css} from 'styled-components';

export const StyledContainer = styled.div`
	display: grid;
	grid-row-gap: 4px;
	padding: 8px;
	border-radius: 4px;
	border: 1px solid #a3b7da;
`;

export const StyledColumn = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4px 0;
`;

interface RowProps {
	readonly isHeader?: boolean,
	readonly key?: string|number,
}

export const StyledRow = styled.div<RowProps>`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 8px;
	border-bottom: 1px solid #a3b7da;

	&:last-child {
		border: none;
	}

	${p => p.isHeader && css`
		padding-bottom: 16px;
		padding-top: 8px;

		${StyledColumn} {
			&:not(:last-child):after {
				content: "";
				width: 2px;
				height: 100%;
				background-color: cornflowerblue;
			}
		}
	`}
`;
