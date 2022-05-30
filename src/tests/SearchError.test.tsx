import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchError from '../components/SearchError';

test('Basic rendering', () => {
	const {container} = render(<SearchError/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Has children', () => {
	render(<SearchError/>);
	
	expect(screen.getByText('No results found.')).toBeInTheDocument();
	expect(screen.getByText('Try searching for something else…')).toBeInTheDocument();
	expect(screen.getAllByRole('img')).toHaveLength(1);
})
