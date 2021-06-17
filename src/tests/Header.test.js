import { render, screen } from '@testing-library/react';
import Header from '../components/Header';


test('renders Portfolios', () => {
  render(<Header />);
  const stringElement = screen.getByText(/Portfolios/i);
  expect(stringElement).toBeInTheDocument();
});
