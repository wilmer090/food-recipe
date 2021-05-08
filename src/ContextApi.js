import React,{useState, useEffect, createContext} from 'react'
import { set } from 'react-hook-form'


export const contextApi = createContext()

export const ContextApiProvider = (props) => {

    
const [query, setQuery] = useState('adobo')
const [recipes, setRecipes] = useState([])
const api_props = {
    APP_ID: '84cf712e',
    APP_KEY:'acb5b8b842f3e8caba7dde4fb350a64d',
    APP_QUERY: query
  }
  
//  fetch(`https://api.edamam.com/search?q=${api_props.APP_QUERY}&app_id=${api_props.APP_ID}&app_key=${api_props.APP_KEY}`)
// .then(res => res.json()).then(data => setRecipes(prev=> [...prev, 'wilmer']))

  setRecipes([{name:'testData'}])
  console.log(recipes)
    return (
        <contextApi.Provider value={{recipes}}>
            {props.children}
        </contextApi.Provider>
    )
}
