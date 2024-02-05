import { render, screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { UpvotelistComponent } from './upvotelist.component';
import VoteListContext from '../../store';
function TestComponent() {
    return <VoteListContext.Provider value={{ list1: { value: 'default', count: 0 }}}>
        <UpvotelistComponent listKey='list1' updateVoteState={() => {}} />
    </VoteListContext.Provider>
}
test('renders upvote list component', () => {
    render(<TestComponent/>);
    const linkElement = screen.getByTestId('upvote-list-test');
    expect(linkElement).toBeInTheDocument();
});
