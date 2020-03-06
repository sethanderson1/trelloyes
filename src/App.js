import React from 'react';
import List from './composition/List'
import Card from './composition/Card'
import STORE from './store.js'


function App(props) {

  console.log('props', props)
  console.log(STORE.allCards['a'].title)
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.STORE.lists.map(list => (

          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => props.STORE.allCards[id])}
          >

          </List>
        )
        )
        }

      </div>
    </main>
  );
}

export default App;