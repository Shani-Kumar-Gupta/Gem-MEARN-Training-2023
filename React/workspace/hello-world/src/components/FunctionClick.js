import React from 'react'

function FunctionClick() {
  function clickHandler() {
    console.log("Function Clicked!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Function Clik</button>
    </div>
  )
}

export default FunctionClick