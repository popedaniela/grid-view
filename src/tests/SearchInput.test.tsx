import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '../components/SearchInput';

test('Rendering and change event', () => {
	const handleChange = jest.fn();
	render(<SearchInput onChange={handleChange}/>);

	expect(screen.getByLabelText('Search here')).toBeInTheDocument();
	expect(screen.getByRole('textbox')).toBeInTheDocument();

	fireEvent.change(screen.getByRole('textbox'), {target: {value: 'abc'}});
	expect(handleChange).toHaveBeenCalledTimes(1);
});