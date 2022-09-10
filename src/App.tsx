import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'

const App2 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="inicio" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App2
