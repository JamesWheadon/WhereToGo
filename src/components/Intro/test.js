import Intro from '.';
import { render, screen } from '@testing-library/react';

describe('Intro', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  test("renders the header and p tag with the correct content", () => {
    const heading = screen.getByRole('heading', {className: 'Intro'});
    expect(heading).toBeInTheDocument();
  });
});