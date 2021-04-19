import Location from '.';
import { render, screen } from '@testing-library/react';

describe('Location', () => {
    beforeEach(() => {
        const testData = {name: 'Test', image: 'link', summary: 'test text'};
        render(<Location place={testData}/>);
    });

    test("renders the header and image tags", () => {
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });
});