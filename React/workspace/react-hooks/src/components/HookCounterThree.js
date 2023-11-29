import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <div className="hook__counter__three">
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName((prevState) => ({ ...prevState, firstName: e.target.value }))}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName((prevState) => ({ ...prevState, lastName: e.target.value }))}
        />
        <h2>Your first Name is - {name.firstName}</h2>
        <h2>Your last Name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
