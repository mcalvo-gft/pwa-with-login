import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './error-message';

test('renders error message text', () => {
  const errorMessage = 'An error has occured.';
  const { getByText } = render(<ErrorMessage error={new Error(errorMessage)} />);
  const errorText = getByText(errorMessage);
  expect(errorText).toBeInTheDocument();
});
