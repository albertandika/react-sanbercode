import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Navbar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Customer/i);
  const linkElement2 = getByText(/Weight/i);
  const linkElement3 = getByText(/Form/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});
