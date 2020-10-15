import React from 'react';
import { render } from '@testing-library/react';
import SimpleCounter from './simple-counter';

test('renders simple counter with label and value', () => {
  const { getByText } = render(<SimpleCounter value={10} label="days" />);
  const value = getByText(/10/);
  const label = getByText(/days/);
  expect(value).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});

test('a simple counter with a label and value filled with zeros from the left if the value < 10', () => {
  const { getByText } = render(<SimpleCounter value={1} label="days" />);
  const value = getByText(/01/);
  const label = getByText(/days/);
  expect(value).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});
