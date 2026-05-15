import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(6)

  return (
    <div className="card">
      <h1>Counter is {count}</h1>
      <div className="buttons">
        <button onClick={() => setCount((count) => count + 1)}>
          Add Value
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Remove Value
        </button>
      </div>
      <p>Starting point: 6</p>
    </div>
  )
}

export default App