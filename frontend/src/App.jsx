import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetails from './pages/NoteDetalisPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/create' element = {<CreatePage/>}/>
        <Route path='/details' element = {<NoteDetails/>}/>
      </Routes>
    </div>
  )
}

export default App