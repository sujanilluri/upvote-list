import React from 'react';
import './upvote.component.scss';
import { ReactComponent as ArrowUpImg } from '../../assets/images/arrow-up.svg';
import { ReactComponent as ArrowDownImg } from '../../assets/images/arrow-down.svg';

export function UpvoteComponent({ cmpState, clickHandler }) {
    let clsName = cmpState === 'default'? 'vote-btn default': 'vote-btn selected';
    return <div className={clsName} onClick={clickHandler} data-testid="upvote-test">{ cmpState === 'default'?<ArrowDownImg/>: <ArrowUpImg/>}</div>;
}