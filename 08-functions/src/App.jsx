
const App = () => {


  function btnClick() {
    console.log('Button is Clicked')
  }

  function mouseEnter() {
    console.log('Mouse Enter')
  }

  return (
    <div>
      <button onClick={btnClick}>Click Here</button>

      <button onMouseEnter={mouseEnter} >Mouse Enter</button>

      <div>

        <button onClick={function () {
          console.log('hello')  //ak tarika yh bhi hota hai function banane ka or isme arrow function bi bana sakte hai
        }}>Click Here</button>

      </div>

      <div>
        <input onChange={function (elem) {
          console.log(elem.target.value)
        }} type="text" placeholder="Enter Name" />
      </div>
      <div onMouseMove={(elem) => {
        console.log(elem.clientY)
      }} className="box"></div>
    </div>

  )
}

export default App