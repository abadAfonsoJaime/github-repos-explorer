import React from 'react';
import { render, screen } from '@testing-library/react';
import RepositoryList from './RepositoryList';

test('renders empty state when no repositories', () => {
  render(<RepositoryList repositories={[]} />);
  expect(screen.getByText('No repositories found.')).toBeInTheDocument();
});
