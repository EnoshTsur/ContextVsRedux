import React from 'react';
import { CounterContext, } from './context/context'
import CounterMutation from './components/Counter/CounterMutation'
import CounterView from './components/Counter/CounterView'

function App() {

  const [ counter , setCounter, ] = React.useState(0) 

  function increase(amount) {
    setCounter(pre => pre + amount)
  }

  function decrease(amount) {
    setCounter(pre => pre - amount)
  }

  return (
    <>
      <CounterContext.Provider value={({ counter, increase, decrease,  })}>
        <CounterMutation />
        <CounterView />
      </CounterContext.Provider>
    </>
  );
}

export default App;
