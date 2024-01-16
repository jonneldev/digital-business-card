import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interest from './components/Interest'

export default function App() {
  return (
    <>
      <div className='main_section'>
        <Info />
        <About />
        <Interest />
      </div>
      <div className='footer_section'>
        <Footer />
      </div>
    </>
  )
}
 