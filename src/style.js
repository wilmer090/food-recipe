import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    mainTitle:{
      padding:"20px"
    },
    icon:{
        marginRight: "10px"
    },
    bgColorBlack:{
        backgroundColor: "black"
    },
    card: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
        transition: "0.5s",
        '&:hover' : {
          transform: "scale(1.05)",
          transition: "0.5s"
        }
    },
    cardMedia:{
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
        padding: "20px",
        transition: "0.5s",
        textTransform: "uppercase",
        '&:hover':{
          color: "rgba(25,118,210,1)",
          transition: "0.5s"
        }
    },
    cardSubtitle: {
        color:"red",
        textTransform: "uppercase",
        fontWeight: "700",
        marginBottom: "5px"
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      letterSpacing: {
        letterSpacing: "5px"
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
})
)

export default useStyles