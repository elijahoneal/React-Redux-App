import {
    START_FETCHING_POKEMON, FETCHING_POKEMON_SUCCESS, FETCHING_POKEMON_FAILURE
} from '../actions'

const initialState = {
    pokemon: {
        name:'',
        height: '',
        id: ''
    },
    isFetching: false,
    error: ''
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case START_FETCHING_POKEMON:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isFetching: false
            }
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer