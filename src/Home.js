import React, {useState, useEffect, useContext} from 'react'
import {useForm} from 'react-hook-form'
import {Typography,Container, CssBaseline, Grid, InputBase, IconButton } from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import Recipe from './Recipe'
import {contextApi} from './ContextApi'

const Home = () =>{

  const {recipes, query, getRecipe} = useContext(contextApi)
  const classes = useStyles()

  useEffect(()=>{
    getRecipe()
}, [query])

  return (
    <>
    <CssBaseline/>
     <div className="App">
       <main>
        <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom className={classes.mainTitle}>{`Food recipe for ${query}`}</Typography>
        </Container>
        <Container maxWidth="md">
        <Grid container spacing={2}>
          {recipes.map( (recipe, index) => { return(<Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            cuisine={recipe.recipe.cuisineType}
            url={recipe.recipe.url}
            thumbnail={recipe.recipe.image}/>)})}
          </Grid>
         </Container>

      </main>
     </div>
     
    </>
  ) 
}
export default Home

