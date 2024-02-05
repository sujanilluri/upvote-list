import React, { useState, useContext, useEffect } from 'react';
import AddIcon from '../../assets/images/plus-solid.svg';
import './upvotelist.component.scss';
import { UpvoteComponent } from '../upvote/upvote.component';
import VoteListContext from '../../store';


export function UpvotelistComponent({listKey, updateVoteState, updateCount }) {
    const voteList = useContext(VoteListContext);
    const [cmpList, setCmpList] = useState(Array(voteList[listKey].count).fill(0));
    useEffect(() => {        
        setCmpList(Array(voteList[listKey].count).fill(0));
    }, [voteList]);
    const addUpVote = () => {
        updateVoteState(listKey, 'count', cmpList.length + 1 )
    }
    const toggleSelection = () => {
        updateVoteState(listKey, 'state', voteList[listKey].state === 'default'? 'selected': 'default');
        
    }
    return <div className='upvote-list' data-testid="upvote-list-test">
        <div className='container'>
            {
                cmpList.map((cmp, index) => {
                    return <UpvoteComponent cmpState={voteList[listKey].state} clickHandler={toggleSelection} key={index}></UpvoteComponent>
                })
            }
        </div>
        <button className='add-btn' onClick={addUpVote}><img src={AddIcon}></img></button>
    </div>;
} 