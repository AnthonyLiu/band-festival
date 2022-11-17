import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Festival schedule for Bands in each Record Label/i);
  expect(linkElement).toBeInTheDocument();
});
