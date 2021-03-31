import { connect } from 'react-redux';
import './App.css';
import Pokemon from './components/Pokemon'
import  getPokemon  from './actions'


function App(props) {

  const handleGetPokemon = e => {
    e.preventDefault();
    props.getPokemon();
  }

  return (
    <div className="App">
      <Pokemon/>
      <button onClick={handleGetPokemon}>Get Pokemon!</button>
    </div>
  );
}

export default connect( () => { return {} },{getPokemon} ) (App);
