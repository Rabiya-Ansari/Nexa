import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ThemeProvider from './context/ThemeContext'

const ThemedApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
const App = () => {
  return (
    <>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </>
  )
}
export default App