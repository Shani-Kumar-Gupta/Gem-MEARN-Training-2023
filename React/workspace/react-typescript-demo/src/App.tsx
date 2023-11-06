import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const personName = {
    firstName: 'John',
    lastName: 'Smith',
  };
  return (
    <div className="App">
      <Greet name="Shani" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
