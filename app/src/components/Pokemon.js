import React from 'react'
import { connect } from 'react-redux'


const Pokemon = props => {
    console.log(props.pokemon.name)
    return (
        <div>
       <p>{props.pokemon.id}</p>
       <p>{props.pokemon.name}</p>
       <p>{props.pokemon.height}</p>
      
       <h1>Pokemon Name</h1>
      </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Pokemon);