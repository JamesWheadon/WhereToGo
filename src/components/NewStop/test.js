import NewStop from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('NewStop', () => {
    let click = jest.fn()
    beforeEach(() => {
        render(<NewStop clickFunction={click}/>);
    });

    test("renders the button", () => {
        const button = screen.getByRole('button', { id: 'newStop' });
        expect(button).toBeInTheDocument();
    });

    test("calls function on click", () => {
        const button = screen.getByRole('button', { id: 'newStop' });
        userEvent.click(button);
        expect(click).toBeCalled();
    });
});