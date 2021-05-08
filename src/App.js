import React from 'react'
import Home from './Home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {ContextApiProvider} from './ContextApi'

const  App = () => {
  return (
    <ContextApiProvider>
     <Nav />
     <Home /> 
     <Footer />
    </ContextApiProvider>
  )
}
export default App
