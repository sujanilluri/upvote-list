import { render, screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { UpvoteComponent } from './upvote.component';
function TestComponent() {
    const mockHandleClick = () => {
        setVState(vState === 'default'?'selected':'default');
    };
    const [vState, setVState] = useState('default');
    return <UpvoteComponent cmpState={vState} clickHandler={mockHandleClick} />
}
test('renders upvote component', () => {
    render(<UpvoteComponent cmpState='' clickHandler={() => { }} />);
    const linkElement = screen.getByTestId('upvote-test');
    expect(linkElement).toBeInTheDocument();
});
test('upvote component calls clickHandler when user clicks on it', async () => {
    const mockHandleClick = jest.fn();
    render(<UpvoteComponent cmpState='' clickHandler={mockHandleClick} />);
    await userEvent.click(screen.getByTestId('upvote-test'))
    expect(mockHandleClick).toHaveBeenCalled();
});
test('upvote component state changes when user clicks on it', async () => {    
    const { container } = render(<TestComponent/>);
    await userEvent.click(screen.getByTestId('upvote-test'));
    expect(container.firstChild.classList.contains('selected')).toBe(true);
    await userEvent.click(screen.getByTestId('upvote-test'));
    await screen.getByTestId('upvote-test');
    expect(container.firstChild.classList.contains('default')).toBe(true);
});
