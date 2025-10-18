import React, { useState } from "react"


const App = () => {

  // const [num, setNum] = useState({ user: 'Siddique', age: 22 })

  // const btnClicked = () => {

  //   const newNum = { ...num }

  //   newNum.user = 'Shaikh'
  //   newNum.age = 23
  //   setNum(newNum)

  // }

  // const [num, setNum] = useState([20, 20, 30])


  //    const btnClicked = () =>{
  //     const newNum = [...num]
  //     newNum.push(99)

  //     setNum(newNum)
  //    }


  const [num, setNum] = useState({ user: 'Siddique', age: 22 })

  const btnClicked = () => {
    setNum(prev => ({ ...prev, age: 23 }))
  }



  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      {/* <h1>{num}</h1> */}
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default App