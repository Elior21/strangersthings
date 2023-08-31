import { useState } from 'react'
import './App.css'
import Authentication from './components/Authentication'
import Home from './components/Home' 
import Profile from './components/Profile'
import Post from './components/post'
import {Routes,Route, Link} from 'react-router-dom'


const App = () => {
const [authToken, setAuthToken] = useState(null)

  return (
    <>
      
      <nav>
        <ul>
          <li> 
            <Link to="/">Home </Link>
          </li>
          <li> 
            <Link to="/authTest"> Authentication  </Link>
          </li>
          <li> 
            <Link to="/Post">Posts </Link>
          </li>
          <li> 
            <Link to="/profile">Profile </Link>
          </li>
        </ul>
      </nav>

      <h2>Hi</h2>
      {authToken && <h5> here is the token: {authToken}</h5>}
      <Routes>
        <Route path='/' element={<Home setAuthToken={setAuthToken} />} />
        <Route path='/authTest' element={<Authentication setAuthToken={setAuthToken} />} />
        <Route path='/posts' element={<Post />} />
        <Route path='/profile' element={<Profile authToken={authToken}/>} />
      </Routes>
    </>
  )
}


export default App
