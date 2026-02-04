import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Home from '../src/components/Home'
import Note from '../src/components/Note'
import Notes_form from './components/Notes_form'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path='/form' element = {<Notes_form/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App