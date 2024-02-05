import React, { useEffect, useState } from 'react';
import './App.scss';
import { UpvotelistComponent } from './components/upvotelist/upvotelist.component';
import VoteListContext from './store';

function App() {
  const [ store, setStore ] = useState({ list1: { value: 'default', count: 0 }, list2: { value: 'default', count: 0 }, list3: { value: 'default', count: 0 } });
  const updateStore = (key, prop, value) => {
    let newStore = { ...store, [key]: { ...store[key], [prop]: value } };
    setStore(newStore);
    sessionStorage.setItem('vote-list-data', JSON.stringify(newStore));
  };
  useEffect(() => {
    let cachedValue = sessionStorage.getItem('vote-list-data');
    if ( cachedValue ) {
      cachedValue = JSON.parse(cachedValue);
      setStore(cachedValue);
    }
  }, []);
  return (
    <div className="App">
      <VoteListContext.Provider value={store}>
        <div className='vote-list-wrapper'>
          <div className='vote-list-container'>
            <UpvotelistComponent listKey='list1' updateVoteState={updateStore}></UpvotelistComponent>
            <UpvotelistComponent listKey='list2' updateVoteState={updateStore}></UpvotelistComponent>
            <UpvotelistComponent listKey='list3' updateVoteState={updateStore}></UpvotelistComponent>
          </div>
        </div>
      </VoteListContext.Provider>
    </div>
  );
}

export default App;
