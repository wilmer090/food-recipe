import React from 'react'
import Home from './Home'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {ContextApiProvider} from './ContextApi'
import {CssBaseline} from '@material-ui/core'

const  App = () => {
  return (
   
    <ContextApiProvider>
     <CssBaseline />
     <Nav />
     <Home /> 
     <Footer />
    </ContextApiProvider>
  )
}
export default App
