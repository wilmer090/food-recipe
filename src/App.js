import React, {useState, useEffect} from 'react'
import Nav from './components/Nav'
import {useForm} from 'react-hook-form'
import {Typography, AppBar, Toolbar, Container, CssBaseline, Grid, InputBase} from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import Recipe from './Recipe'
import Cards from './components/Cards'

const App = () =>{
  
const [recipeData, setRecipeData] = useState([])
const [searchParams, setSearchParams] = useState("chicken")
  return (
    <>
    <CssBaseline/>
     <div className="App">
      <Nav setRecipeData={setRecipeData} setSearchParams={setSearchParams}/> 
      <Cards recipes={recipeData} searchParams={searchParams} />
     </div>
     
    </>
  ) 
}
export default App

