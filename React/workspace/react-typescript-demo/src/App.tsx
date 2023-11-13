import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';

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
      <Status status='loading' />
      <Heading>My Placeholder Text</Heading>
    </div>
  );
}

export default App;
