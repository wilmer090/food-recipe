import React,{useState,useEffect, createContext} from 'react'
import { set } from 'react-hook-form'


export const contextApi = createContext()

export const ContextApiProvider = (props) => {

    
const [query, setQuery] = useState('chicken')
const [recipes, setRecipes] = useState([])

const api_props = {
    APP_ID: '84cf712e',
    APP_KEY:'asdcb2b8b842f3e543casjakfa710de4fb343592a64d',
    APP_QUERY: query
  }

  const getRecipe = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${api_props.APP_QUERY}&app_id=${api_props.APP_ID}&app_key=${api_props.APP_KEY}`)
    const data = await response.json()
    // const initialState =[{
    //         firstName : 'HARRY',
    //         lastName : 'POTTER',
    //         address : 'LONDON, ENGLAND',
    //         status : 'ACTIVE',
    //         position: 'BACKEND',
    //         emp_id: '1619592682480'
    //     },
    //     {
    //         firstName : 'JAMES',
    //         lastName : 'AMSTERDAM',
    //         address : 'LOS ANGLES, USA',
    //         status : 'ACTIVE',
    //         position : 'CS',
    //         emp_id: '1619592682481'
    //     },
    //     {
    //         firstName : 'JASMINE',
    //         lastName : 'BLOW',
    //         address : 'LOS ANGLES, USA',
    //         status : 'ACTIVE',
    //         position : 'FRONTEND',
    //         emp_id: '1619592683592'
    //     },
    //     {
    //         firstName : 'STEVEN',
    //         lastName : 'PETTERSON',
    //         address : 'CHICAGO, USA',
    //         status : 'ACTIVE',
    //         position : 'CS',
    //         emp_id: '1619592687544'
    //     },
    //     {
    //         firstName : 'MICHAEL',
    //         lastName : 'SAN JUAN',
    //         address : 'MANILA, PHILIPPINES',
    //         status : 'ACTIVE',
    //         position: 'DATA_ANALYST',
    //         emp_id: '1619592682679'
    //     },{
    //         firstName : 'ANDREW',
    //         lastName : 'UY',
    //         address : 'BINONDO, PHILIPPINES',
    //         status : 'ACTIVE',
    //         position: 'FRONTEND',
    //         emp_id: '1619592683784'
    //     }
    //     ]
    setRecipes(data.hits)
  }
    
    return (
        <contextApi.Provider value={{recipes, getRecipe}}>
            {props.children}
        </contextApi.Provider>
    )
}
