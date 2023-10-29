import React, { memo } from 'react';

const Greet = (props) => {
  // destrcuture on the fly using { greetPeopleName }
  const { greetPeopleName } = props;
  
  return (
    <div classNames="greet">
      <h1>Hello {greetPeopleName}!</h1>
    </div>
  );
};

export default memo(Greet);
