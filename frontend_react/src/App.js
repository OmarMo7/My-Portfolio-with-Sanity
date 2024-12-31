import React from 'react'
import { About, Footer, Header, Skills, Testimonials, Work, TOEFL, ResearchAchievements } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <ResearchAchievements />
      <Skills />
      <TOEFL />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App