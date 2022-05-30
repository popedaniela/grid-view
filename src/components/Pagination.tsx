import React, { FC, MouseEventHandler } from 'react';
import { StyledButton } from "../styles/Pagination.style"

interface PaginationProps {
	currentPage?: number,
	onClick?: MouseEventHandler,
	numberOfPages?: number,
};

const Pagination:FC <PaginationProps> = ({currentPage = 0, onClick, numberOfPages = 1}) => {
	return (
		<div className='pagination'>
			{[...Array(numberOfPages)]
				.map((_, page) => <StyledButton
					className={`item-pagination ${page === currentPage ? 'selected' : ''}`}
					onClick={onClick}
					data-page-number={page}
					key={page}
				>
					{page+1}
				</StyledButton>)
			}
		</div>
	)
}

export default Pagination;