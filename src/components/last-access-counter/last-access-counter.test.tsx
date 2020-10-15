import React from 'react';
import { render } from '@testing-library/react';
import LastAccessCounter from './last-access-counter';

test('renders last access counter render 4 sub components', () => {
  const time = new Date();
  time.setDate(time.getDate() - 1);
  const { container } = render(<LastAccessCounter lastAccessTime={time} />);
  const items = container.firstChild?.childNodes;
  expect(items?.length).toBe(4);
});
