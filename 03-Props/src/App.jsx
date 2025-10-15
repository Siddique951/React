import Card from "./Components/Card"

const App = () => {
  return (
    <div className="parent">
      <Card user='Shaikh' age={18} img='https://images.unsplash.com/photo-1756034198936-4df9d581d39c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880' />
      <Card user='Siddique' age={23} img='https://images.unsplash.com/photo-1751182782142-000e62239d85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332' />
    </div>
  )
}

export default App