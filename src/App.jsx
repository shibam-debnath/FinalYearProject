import { useState } from 'react'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
      <div className="app">
        <Routes>
          <Route path="/presentation" element={< />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
