
import './App.css'
import { Board } from './components/Board'
import Global from './styles/global'
import { NewItemModal } from './components/NewItemModal'

function App() {
 

  return (
    <>
     <h1>Todo list</h1>
     <NewItemModal/>
     <Board/>
     <Global/>
    </>
  )
}

export default App
