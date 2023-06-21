import { useState } from 'react'
import './App.css'
import { Board } from './components/Board'
import Global from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Todo list</h1>
     <Board/>
     <Global/>
    </>
  )
}

export default App
