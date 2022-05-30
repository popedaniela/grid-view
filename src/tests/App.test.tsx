import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('Basic rendering', () => {
	render(<App />);
	
	expect(screen.getByText('Grid View Project')).toBeInTheDocument();
});
