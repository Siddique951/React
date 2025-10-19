
const App = () => {

  const user = {
    username: 'Siddique',
    age: 23,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  return (
    <div>App</div>
  )
}

export default App