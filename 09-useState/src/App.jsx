import React, { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)

  function Increase() {
    setNum(num + 1)
  }

  function Decrease() {
    setNum(num - 1)
  }

  function just5NUm() {
    setNum(num + 5)
  }

  function Down5Num() {
    setNum(num - 5)
  }


  return (
    <div>
      <h1 >{num}</h1>
      <button className="increament" onClick={Increase} >Increment +</button>
      <button className="Decrement" onClick={Decrease}>Decrement -</button>
      <button className="just5NUm" onClick={just5NUm}>Increment 5 +</button>
      <button className="Down5Num" onClick={Down5Num}>Decrement 5 -</button>
    </div>
  )
}

export default App