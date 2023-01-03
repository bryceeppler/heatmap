import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeatMap from './HeatMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeatMap/>
    </div>
  )
}

export default App
