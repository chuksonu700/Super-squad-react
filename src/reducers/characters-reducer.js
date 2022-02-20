import { ADD_CHARACTER,REMOVE_CHARACTER } from '../actions';
import charactersList from '../data/characters.json';
import { createCharacter } from './helpers';

// creating our state
// a reducer is a function whch takes in a state and an action
function characters(state=charactersList,action){
    switch (action.type) {
        case ADD_CHARACTER:
            let characters = state.filter(items=>items.id!=action.id)
            return characters
        
        case REMOVE_CHARACTER:
            let character = [...state,createCharacter(action.id)]
            return character;

        default:
            return state;
    }
}

export default characters;

// ADD_CHARACTER will return what the user did not select