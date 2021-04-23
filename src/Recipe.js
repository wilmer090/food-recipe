import React from 'react'
import { Typography, CssBaseline, Grid, Container, Card, CardMedia, CardContent, Toolbar } from '@material-ui/core'
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import {BrowserRouter as Router,Link as RouterLink} from "react-router-dom";
import Link from '@material-ui/core/Link'
import useStyles from './style'

function Recipe({title, cuisine, thumbnail, url}){
    const classes = useStyles()

    return(
      <>
      <CssBaseline />
        <Router>
        <Grid item  xs={12} sm={6} md={4}>
          <Link underline='none' component={RouterLink} to={{pathname: url}} target="_blank">
          <Card className={classes.card}>
              <CardMedia image={thumbnail} className={classes.cardMedia}/>
              <CardContent className={classes.cardContent}>
                <Typography variant="body2" className={classes.cardSubtitle} gutterBottom>Recipe</Typography>
                <Typography variant="h5" align="center" className={classes.letterSpacing}>{(title.length > 10) ? title = `${title.substring(0,10)}...` : title }</Typography>
                <Toolbar>
                <Typography variant="body2" className={classes.icon}>cuisine: {cuisine? cuisine : 'Filipino' }</Typography>
                <RestaurantOutlinedIcon />
                </Toolbar>
              </CardContent>
           </Card>
           </Link>
        </Grid>
        </Router>
      </>
    )
}

export default Recipe