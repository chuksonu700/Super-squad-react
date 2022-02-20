import { ADD_CHARACTER,REMOVE_CHARACTER } from '../actions';
import {createCharacter} from './helpers';

// a reducer is function which takes  in a state and an action
function heroes(state=[],action){
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes =[...state,createCharacter(action.id)]
            return heroes;
        case REMOVE_CHARACTER:
            let newHeroes = state.filter(hero=>hero.id!=action.id);
            return newHeroes;
        default:
            return state;
    }
}


export default heroes;

// ADD_CHARACTER will return what the user did not select