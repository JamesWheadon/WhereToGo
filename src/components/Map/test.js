import Map from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Interactive Map', () => {
    beforeEach(() => {
        const testStops = []
        render(<Map interactive={true} stops={testStops}/>);
    });

    test("renders the canvas", () => {
        const canvas = screen.getByRole('img', { id: 'map' });
        expect(canvas).toBeInTheDocument();
    });
});