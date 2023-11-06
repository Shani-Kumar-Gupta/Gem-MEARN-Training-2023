import React from 'react'

function Fragment() {
  return (
    <React.Fragment>
      <h1>Hello Fragment!</h1>
      <p>Hi there!</p>
      <ChildFragment />
    </React.Fragment>
  )
}

function ChildFragment() {
  return(
    <>
      <h2>Hi! Child Fragment!</h2>
    </>
  )
};

export default Fragment