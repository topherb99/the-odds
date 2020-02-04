import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('displays hello world on front page', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText(/hello world/i);
  expect(helloWorld).toBeInTheDocument();
});
