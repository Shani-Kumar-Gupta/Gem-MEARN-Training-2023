import React from 'react';

const Hello = () => {
  // JSX SYNTAX
  // Simple and elegant syntax
  // return (
  //   <div className='hello__container'>
  //     <h1 className='greetTxt'>Hello Shani!!</h1>
  //   </div>
  // );

  // USING React.createElement()
  return React.createElement(
    'div',
    {
      className: 'hello__container',
    },
    React.createElement(
      'h1',
      {
        className: 'greetTxt',
        style: {
          backgroundColor: 'lightgreen',
        }
      },
      'Hello Shani!!!'
    )
  );
};

export default Hello;
