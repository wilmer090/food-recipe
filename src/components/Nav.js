import React, {useState, useEffect, useContext} from 'react'
import {useForm} from 'react-hook-form'
import {Typography, AppBar, Toolbar, InputBase} from '@material-ui/core'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from '../style'
import {contextApi} from '../ContextApi'


const Nav = () =>{

    const classes = useStyles()
    const {register, handleSubmit, reset} = useForm()
    const {setQuery} = useContext(contextApi)

    const getSearch = (data, e) =>{
      e.preventDefault()
      setQuery(data.text)
      reset({})
    }
    

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