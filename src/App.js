import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions/counter.actions';
import { fetchUser } from './store/actions/user.actions';

import { useEffect } from 'react';
function App() {
  const count = useSelector(state => state.counter.count);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(count));
  }, [dispatch, count]);
  return (
    <div className="App">
      <header className="App-header">
        Count: { count }
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
      <h1>User data</h1>
      { user && <div>
        <p>Name: { user.name }</p>
        <p>Email: { user.email }</p>
      </div> }
    </div>
  );
}

export default App;
