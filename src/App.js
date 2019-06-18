import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Actions } from './redux/counter'
import './App.css';

const countSelector = state => state

function App() {
  const dispatch = useDispatch()
  const count = useSelector(countSelector)
  const handleIncrement = () => dispatch(Actions.INCREMENT)
  const handleDecrement = () => dispatch(Actions.DECREMENT)

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+ 1</button>
      <button onClick={handleDecrement}>- 1</button>
    </div>
  );
}

export default App;
