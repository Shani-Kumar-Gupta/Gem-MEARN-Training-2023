import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    firstName: 'John',
    lastName: 'Smith',
  };

  const nameLists = [
    { firstName: 'John', lastName: 'Smith' },
    { firstName: 'Dany', lastName: 'Joe' },
    { firstName: 'Shani', lastName: 'Gupta' },
  ];
  return (
    <div className="App">
      <Greet name="Shani" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameslist={nameLists} />
    </div>
  );
}

export default App;
