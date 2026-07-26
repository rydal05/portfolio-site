import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Layout from './Layout'
import WindWakerWater from './components/ParallaxBG'

const navigation = [
  { name: 'Home', href: '', element: Home },
  { name: 'About', href: '/about', element: About },
  { name: 'Portfolio', href: '/portfolio', element: Portfolio },
  { name: 'Contact', href: '/contact', element: Contact },
]

function App() {

  return (
    <>
      <WindWakerWater />

      <Router>
        <Routes>

          <Route element={<Layout />}>
            {navigation.map((item) => {
              const Component = item.element;
              return (
                <Route
                  key={item.name}
                  path={item.href}
                  element={<Component />}
                />
              );
            })}
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
