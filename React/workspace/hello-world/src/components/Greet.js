import React, { memo } from 'react';

const Greet = () => {
  return (
    <div classNames="greet">
      <h1>Hello Shani!</h1>
    </div>
  );
};

export default memo(Greet);
