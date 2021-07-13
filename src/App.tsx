import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { getHasFetchedTodos, getIsFetchingTodos } from './redux/selectors/todo';
import { fetchTodos } from './redux/thunks/todo';
import { IRootState } from './types';
import TodoList from './views/todo-list';


function App() {
  const dispatch = useDispatch();
  const hasFetchedTodos = useSelector((state: IRootState) => getHasFetchedTodos(state));
  const isFetchingTodos = useSelector((state: IRootState) => getIsFetchingTodos(state));


  useEffect(() => {
    if (!hasFetchedTodos && !isFetchingTodos) {
      dispatch(fetchTodos());
    }
  }, [hasFetchedTodos, isFetchingTodos]);



  return (
    <div className="App">
      <TodoList />



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
