import React from 'react'
import {Typography,Container,Grid} from '@material-ui/core'
import useStyles from '../style'
import Recipe from '../Recipe'


const Cards = ({ recipes, searchParams }) =>{
    const classes = useStyles()
    console.log(recipes)
    return(
        <>
         <main>
        <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom className={classes.mainTitle}>{`Food recipe for ${searchParams}`}</Typography>
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
        </>
    )
}

export default Cards