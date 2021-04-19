import MapTagline from '.';
import { render, screen } from '@testing-library/react';

describe('MapTagline', () => {
    beforeEach(() => {
        render(<MapTagline />);
    });

    test("renders the header tag", () => {
        const heading = screen.getByRole('heading', { className: 'Intro' });
        expect(heading).toBeInTheDocument();
    });
});