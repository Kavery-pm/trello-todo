
import './App.css'
import { Board } from './components/Board'
import Global from './styles/global'
import { NewItemModal } from './components/NewItemModal'
import { ConfigModal } from './components/ConfigModal'

function App() {
 

  return (
    <>
     <h1>Todo list</h1>
     <NewItemModal/>
     <ConfigModal/>
     <Board/>
     <Global/>
    </>
  )
}

export default App
