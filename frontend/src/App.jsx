import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Secret from './components/Secret'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/secret' element={<Secret/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
