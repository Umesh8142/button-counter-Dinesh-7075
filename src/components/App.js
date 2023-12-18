
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [a,fun]=useState(0);
  function increase(){
    fun(a+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Cliked {a} times</p>
        <button onClick={increase}>Click me</button>
    </div>
  )
}

export default App
