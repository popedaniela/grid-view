import styled from 'styled-components';

export const StyledApp = styled.div`
	padding: 16px;

	@media (min-width: 768px) {
		padding: 32px;
	}
`
export const StyledWrapperFilters = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	border: 1px solid;
	border-radius: 4px;
	padding: 24px 8px;


	@media (min-width: 768px) {
		max-width: 50%;
		flex-direction: row;
		align-items: end;
		justify-content: space-between;
	}
`;