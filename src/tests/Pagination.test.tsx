import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../components/Pagination';

test('Basic rendering', () => {
	render(<Pagination/>);
	
	expect(screen.getAllByRole('button')).toHaveLength(1);
});

test('Pagination shows the selected page', () => {
	render(<Pagination currentPage={0} numberOfPages={3}/>);
	
	expect(screen.getAllByRole('button')[0]).toHaveClass('selected');
	expect(screen.getAllByRole('button')[1]).not.toHaveClass('selected');
});
