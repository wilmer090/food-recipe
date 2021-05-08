import React, {useState, useEffect, useContext} from 'react'
import {useForm} from 'react-hook-form'
import {Typography, AppBar, Toolbar, Container, CssBaseline, TextField, OutlinedInput, Grid, InputBase, IconButton } from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import Recipe from './Recipe'
import {contextApi} from './ContextApi'

const Home = () =>{
  const {recipes, getRecipe} = useContext(contextApi)
  
  useEffect(()=>{
    getRecipe()
}, [])

  recipes.map(recipe => console.log(recipe))

  return (
    <>
    {/* <CssBaseline/>
     <div className="App">
     <AppBar position="static" className={classes.bgColorBlack}>
        <Toolbar>
          <FastfoodIcon />
          <Typography className={classes.title} variant="h6" noWrap>
            RECIPE
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit(getSearch)}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              {...register("text")}
            />
            </form>
          </div>
        </Toolbar>
      </AppBar>
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
     </div> */}
     
    </>
  ) 
}
export default Home

