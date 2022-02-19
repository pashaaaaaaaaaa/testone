import React from 'react';
// import { useSelector } from 'react-redux';
import './App.css';
import Login  from './components/LoginPage/Login'

function App() {
  // const state = useSelector(state => state.auth)

  return (
    <div className="App">
      <h1>hello world</h1>
      <Login/>
    </div>
  );
}

export default App;
