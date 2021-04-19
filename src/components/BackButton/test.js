import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from '.';

describe('BackButton', () => {
  beforeEach(() => {
    render(<BackButton />, { wrapper: MemoryRouter });
  });

  test('renders a back button', () => {
    const btn = screen.getByRole('button', { id: 'back-button' });
    expect(btn).toBeInTheDocument();
  });
});