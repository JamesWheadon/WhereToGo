import Map from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Interactive Map', () => {

    delete window.location

    window.location = {
      assign: jest.fn(),
    }

    beforeEach(() => {
        const testStops = []
        render(<Map interactive={true} stops={testStops}/>);
    });

    afterAll(() => {
        jest.clearAllMocks();
    })

    test("renders the canvas with correct dimensions", () => {
        const canvas = screen.getByRole('img', { id: 'map' });
        expect(canvas).toBeInTheDocument();
        expect(canvas.width).toEqual(900);
        expect(canvas.height).toEqual(1080);
    });

    test("redirects page to closest destination on click", () => {
        const canvas = screen.getByRole('img', { id: 'map' });
        userEvent.click(canvas);
        expect(window.location.assign).toBeCalled();
    });
});

describe('Road Trip Map', () => {

    delete window.location

    window.location = {
      assign: jest.fn(),
    }

    beforeEach(() => {
        const testStops = [0, 1, 2]
        render(<Map interactive={false} stops={testStops}/>);
    });

    test("renders the canvas with correct dimensions", () => {
        const canvas = screen.getByRole('img', { id: 'map' });
        expect(canvas).toBeInTheDocument();
        expect(canvas.width).toEqual(900);
        expect(canvas.height).toEqual(1080);
    });
});