import { useState } from 'react'
import './styles/App.css'
import Home from './pages/Home'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Home />
      </div>
    </>
  )
}

export default App
