import { render, screen } from '@testing-library/react';
import OpenGround from './OpenGround';

test('renders Open Ground', () => {
  render(<OpenGround />);
  const linkElement = screen.getByText(/Open Ground/i);
  expect(linkElement).toBeInTheDocument();
});
