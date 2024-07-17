import { Route,Routes } from 'react-router-dom'

import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import './App.css'
import Header from './components/Header'
import Bottom from './components/Bottom'
import Landingpage from './pages/Landingpage'


function App() {
  return (

    <>
    <Header/>
      <Routes>
        <Route path='/'element={<Landingpage/>}/>
        <Route path='/home'element={<Home/>} />
        <Route path='/watchhistory'element={<Watchhistory/>} />
      </Routes>
      <Bottom/>

     
    </>
  )
}

export default App
