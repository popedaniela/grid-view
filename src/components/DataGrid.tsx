import React, {FC}  from 'react'
import { StyledColumn, StyledContainer, StyledRow } from '../styles/DataGrid.style';

interface DataGridProps {
	data: Array<{
		title: string,
		description: string,
		imagePath: string
	}>,
}

const DataGrid:FC <DataGridProps> = ({data}) => {
	return (
		<StyledContainer>
			<StyledRow isHeader={true}>
				<StyledColumn>
					Title
				</StyledColumn>
				<StyledColumn>
					Description
				</StyledColumn>
				<StyledColumn>
					Image
				</StyledColumn>
			</StyledRow>
			{
				data.map((item, key) => <StyledRow key={key}>
					<StyledColumn>
						{item.title}
					</StyledColumn>
					<StyledColumn>
						{item.description}
					</StyledColumn>
					<StyledColumn>
						<img alt={item.title} height="100px" width="100px" src={item.imagePath}/>
					</StyledColumn>
				</StyledRow>)
			}
	</StyledContainer>
	)
}

export default DataGrid;