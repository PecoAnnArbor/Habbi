import './App.css'
import Home from './components/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  return (
    <>
      <NavBar/>
      <div className="content">
        <Home />
      </div>
    </>
  )
}

export default App
