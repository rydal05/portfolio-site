import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Layout from './Layout'


function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
