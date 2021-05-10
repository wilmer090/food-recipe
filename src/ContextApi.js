import React,{useState, createContext} from 'react'


export const contextApi = createContext()

export const ContextApiProvider = (props) => {

    
const [query, setQuery] = useState('chicken')
const [recipes, setRecipes] = useState([])

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
    
    return (
        <contextApi.Provider value={{recipes, query, getRecipe, setQuery}}>
            {props.children}
        </contextApi.Provider>
    )
}
