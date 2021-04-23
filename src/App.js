import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Typography, AppBar, Toolbar, Container, CssBaseline, TextField, OutlinedInput, Grid, InputBase, IconButton } from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import Recipe from './Recipe'

const App = () =>{
  
  const classes = useStyles()

  const APP_ID = '84cf712e'
  const APP_KEY = 'acb5b8b842f3e8caba7dde4fb350a64d'

  const {register, handleSubmit} = useForm()
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('çhicken')

  const getRecipe = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  useEffect(() =>{
    getRecipe()
  }, [query])

  const getSearch = (data, e) =>{
    e.preventDefault()
    setQuery(data.text)
    e.target.reset()
  }
  console.log(recipes)
  return (
    <>
    <CssBaseline/>
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
     </div>
     
    </>
  ) 
}
export default App

