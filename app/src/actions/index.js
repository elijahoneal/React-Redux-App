import axios from "axios";
export const START_FETCHING_POKEMON = "START_FETCHING_POKEMON"
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS"
export const FETCHING_POKEMON_FAILURE = "FETCHING_POKEMON_FAILURE"

const getRandomPokemon = () => {
   return Math.floor(Math.random() * 100 )
}

const getPokemon = () => (dispatch) => {
    dispatch({ type: START_FETCHING_POKEMON });

    axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomPokemon()}`)
        .then( res => {
            console.log('get pokemon', res)
            console.log(getRandomPokemon())
            dispatch({
                type: FETCHING_POKEMON_SUCCESS,
                payload: {
                    name: res.data.name,
                    height: res.data.height,
                    id: res.data.id
                }
                
            })
        })
        .catch( err => {
            console.log('could not find pokemon', err.message)
            dispatch({ 
                type: FETCHING_POKEMON_FAILURE
                , payload: err.message })
        })
}

export default getPokemon;