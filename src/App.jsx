import { Routes, Route, useLocation} from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Auth from './components/Auth/Auth.jsx'

function App() {
  const location = useLocation();

  return (
    <>
      {!["/auth"].includes(location.pathname) && <NavBar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  )
}

export default App
