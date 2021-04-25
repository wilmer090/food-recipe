import React from 'react'
import {Typography,Container,Grid} from '@material-ui/core'
import useStyles from '../style'

const Footer = () =>{
    const classes = useStyles()
    return(
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>RECIPE</Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">Footer description</Typography>
        </footer>
    )
}
export default Footer