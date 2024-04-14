import './App.css'
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Movie from './pages/Movie'
import Home from './pages/Home'
import Movies from './pages/Movies'
function App() {


  return (
    <>
        <Nav/>
        <div className="glass container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='/Movies/:search' element={<Movies/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
        </div>
    </>
  )
}

export default App
