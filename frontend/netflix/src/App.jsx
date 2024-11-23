import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NetflixLogin from './components/NetflixLogin'
import Catalog from './components/Catalog'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<NetflixLogin />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

