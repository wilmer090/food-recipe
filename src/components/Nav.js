import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Typography, AppBar, Toolbar, InputBase} from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from '../style'


const Nav = ({ setRecipeData, setSearchParams }) =>{

    const classes = useStyles()
    const {register, handleSubmit} = useForm()
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('çhicken')
    setRecipeData(recipes)
    setSearchParams(query)
    const api_props = {
      APP_ID: '84cf712e',
      APP_KEY:'acb5b8b842f3e8caba7dde4fb350a64d',
      APP_QUERY: query
    }
    
    const getRecipe = async() =>{
      const response = await fetch(`https://api.edamam.com/search?q=${api_props.APP_QUERY}&app_id=${api_props.APP_ID}&app_key=${api_props.APP_KEY}`)
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

    return(
        <>
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
              {...register("text", {required:true})}
            />
            </form>
          </div>
        </Toolbar>
        </AppBar>
        </>
    )
}

export default Nav 