import React from 'react';
import { CounterContext, } from './context/context'
import CounterMutation from './components/Counter/CounterMutation'
import CounterView from './components/Counter/CounterView'
import { counterReducer, } from './context/counterReducer'

function App() {

  const [ counter, dispatch, ] = React.useReducer(counterReducer, 0) 


  return (
    <>
      <CounterContext.Provider value={({ counter, dispatch,  })}>
        <CounterMutation />
        <CounterView />
      </CounterContext.Provider>
    </>
  );
}

export default App;
